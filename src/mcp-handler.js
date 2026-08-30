// Steel MCP server — EdgeOne Pages function (JSON-RPC over HTTP, no SSE).
//
// EdgeOne Pages does not support SSE streaming responses, and the MCP SDK's
// legacy Streamable HTTP transport always uses SSE. So this function implements
// the MCP protocol by hand over plain JSON request/response:
//   - POST a JSON-RPC message -> JSON-RPC response (application/json)
//   - Notifications -> HTTP 202 with empty body
//
// This is a stateless, tools-only server, fully compatible with standard MCP
// clients (initialize -> initialized -> tools/list -> tools/call -> ping).

import * as z from "zod/v4";

// ---------------------------------------------------------------------------
// Environment
// ---------------------------------------------------------------------------
// Works on Node.js (`process.env`) and EdgeOne Pages (`context.env`). EdgeOne
// functions receive env via the context argument, so onRequest copies it into
// this store before handling the request.
const envStore =
  typeof globalThis.process !== "undefined" && globalThis.process.env
    ? globalThis.process.env
    : {};

const STEEL_API_BASE = "https://api.steel.dev";
const SERVER_INFO = { name: "steel-browser", version: "1.0.0" };
const SUPPORTED_PROTOCOL_VERSIONS = [
  "2025-03-26",
  "2025-06-18",
  "2024-11-05",
];
const DEFAULT_PROTOCOL_VERSION = "2025-03-26";

/**
 * Helper to make requests to Steel API
 */
async function steelRequest(endpoint, options = {}) {
  const apiKey = envStore.STEEL_API_KEY;
  if (!apiKey) {
    throw new Error("STEEL_API_KEY environment variable is required");
  }

  const url = `${STEEL_API_BASE}${endpoint}`;
  const headers = {
    "Content-Type": "application/json",
    "steel-api-key": apiKey,
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Steel API error: HTTP ${response.status} - ${errorText}`);
  }

  return response.json();
}

// ---------------------------------------------------------------------------
// Tools
// ---------------------------------------------------------------------------
const TOOLS = [
  {
    name: "scrape",
    description:
      "Scrape content from a URL using Steel API. Returns HTML, markdown, cleaned HTML, readability text, metadata and extracted links.",
    inputSchema: z.object({
      url: z.string().url().describe("The URL to scrape"),
      waitForSelector: z
        .string()
        .optional()
        .describe("CSS selector to wait for before scraping"),
      timeout: z
        .number()
        .optional()
        .describe("Timeout in milliseconds (default: 30000)"),
      removeSelector: z
        .string()
        .optional()
        .describe("CSS selector to remove from page before scraping"),
      onlyMainContent: z
        .boolean()
        .optional()
        .describe(
          "Only extract main content, excluding navigation and footers",
        ),
      includeLinks: z
        .boolean()
        .optional()
        .describe("Include extracted links in response"),
    }),
    async run({
      url,
      waitForSelector,
      timeout,
      removeSelector,
      onlyMainContent,
      includeLinks,
    }) {
      try {
        const requestBody = { url };
        if (waitForSelector) requestBody.waitForSelector = waitForSelector;
        if (timeout) requestBody.timeout = timeout;
        if (removeSelector) requestBody.removeSelector = removeSelector;
        if (onlyMainContent !== undefined)
          requestBody.onlyMainContent = onlyMainContent;
        if (includeLinks !== undefined) requestBody.includeLinks = includeLinks;

        const result = await steelRequest("/v1/scrape", {
          method: "POST",
          body: JSON.stringify(requestBody),
        });

        let output = `URL: ${url}\n`;
        output += `Status: ${result.metadata?.status_code ?? "N/A"}\n`;
        output += `Title: ${result.metadata?.title ?? "N/A"}\n\n`;

        if (result.content?.markdown) {
          output += `--- Content (Markdown) ---\n${result.content.markdown}\n`;
        } else if (result.content?.html) {
          output += `--- Content (HTML) ---\n${result.content.html.substring(0, 5000)}...\n`;
        }

        if (result.links && result.links.length > 0) {
          output += `\n--- Extracted Links (${result.links.length}) ---\n`;
          result.links.slice(0, 20).forEach((link) => {
            output += `- ${link.href}${link.text ? ` (${link.text})` : ""}\n`;
          });
        }

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            { type: "text", text: `Error scraping ${url}: ${error.message}` },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "create-session",
    description:
      "Create a new Steel browser session for automation. Returns session ID and WebSocket URL for connecting Puppeteer/Playwright.",
    inputSchema: z.object({
      sessionId: z
        .string()
        .uuid()
        .optional()
        .describe(
          "Custom session ID (UUID). If not provided, Steel generates one.",
        ),
      useProxy: z.boolean().optional().describe("Use residential proxies"),
      solveCaptcha: z
        .boolean()
        .optional()
        .describe("Enable automatic CAPTCHA solving"),
      recordVideo: z
        .boolean()
        .optional()
        .describe("Record video of the session"),
      timeout: z.number().optional().describe("Session timeout in seconds"),
    }),
    async run({ sessionId, useProxy, solveCaptcha, recordVideo, timeout }) {
      try {
        const requestBody = {};
        if (sessionId) requestBody.sessionId = sessionId;
        if (useProxy !== undefined) requestBody.useProxy = useProxy;
        if (solveCaptcha !== undefined) requestBody.solveCaptcha = solveCaptcha;
        if (recordVideo !== undefined) requestBody.recordVideo = recordVideo;
        if (timeout) requestBody.timeout = timeout;

        const session = await steelRequest("/v1/sessions", {
          method: "POST",
          body: JSON.stringify(requestBody),
        });

        let output = `Session created successfully!\n\n`;
        output += `Session ID: ${session.id}\n`;
        output += `WebSocket URL: ${session.websocketUrl}\n`;
        output += `Created at: ${session.createdAt}\n`;
        if (session.expiresAt) {
          output += `Expires at: ${session.expiresAt}\n`;
        }

        output += `\n--- How to connect with Puppeteer ---\n`;
        output += `import puppeteer from 'puppeteer-core';\n`;
        output += `const browser = await puppeteer.connect({\n`;
        output += `  browserWSEndpoint: \`${session.websocketUrl}&apiKey=YOUR_API_KEY\`\n`;
        output += `});\n`;

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            { type: "text", text: `Error creating session: ${error.message}` },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "release-session",
    description:
      "Release/end a Steel browser session. Always call this when done with a session to avoid charges.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to release"),
    }),
    async run({ sessionId }) {
      try {
        await steelRequest(`/v1/sessions/${sessionId}`, {
          method: "DELETE",
        });

        return {
          content: [
            {
              type: "text",
              text: `Session ${sessionId} released successfully.`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error releasing session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "get-session",
    description: "Get details about an existing Steel browser session.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to retrieve"),
    }),
    async run({ sessionId }) {
      try {
        const session = await steelRequest(`/v1/sessions/${sessionId}`);

        let output = `Session Details:\n\n`;
        output += `ID: ${session.id}\n`;
        output += `Status: ${session.status}\n`;
        output += `Created at: ${session.createdAt}\n`;
        if (session.expiresAt) {
          output += `Expires at: ${session.expiresAt}\n`;
        }
        if (session.websocketUrl) {
          output += `WebSocket URL: ${session.websocketUrl}\n`;
        }

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "navigate",
    description:
      "Navigate to a URL in an existing Steel browser session and optionally take a screenshot.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to navigate in"),
      url: z.string().url().describe("The URL to navigate to"),
      waitForSelector: z
        .string()
        .optional()
        .describe("CSS selector to wait for after navigation"),
      timeout: z
        .number()
        .optional()
        .describe("Navigation timeout in milliseconds"),
      takeScreenshot: z
        .boolean()
        .optional()
        .describe("Take a screenshot after navigation"),
    }),
    async run({ sessionId, url, waitForSelector, timeout, takeScreenshot }) {
      try {
        const requestBody = { url };
        if (waitForSelector) requestBody.waitForSelector = waitForSelector;
        if (timeout) requestBody.timeout = timeout;
        if (takeScreenshot !== undefined)
          requestBody.takeScreenshot = takeScreenshot;

        const result = await steelRequest(
          `/v1/sessions/${sessionId}/navigate`,
          {
            method: "POST",
            body: JSON.stringify(requestBody),
          },
        );

        let output = `Navigated to: ${url}\n`;
        output += `Session: ${sessionId}\n`;

        if (result.screenshot) {
          output += `\nScreenshot (base64): ${result.screenshot.substring(0, 200)}...\n`;
        }

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error navigating in session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "execute-script",
    description:
      "Execute JavaScript code in a Steel browser session and return the result.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to execute script in"),
      script: z
        .string()
        .describe("JavaScript code to execute in the browser"),
      awaitPromise: z
        .boolean()
        .optional()
        .describe("Wait for the script to return a promise"),
    }),
    async run({ sessionId, script, awaitPromise }) {
      try {
        const requestBody = { script };
        if (awaitPromise !== undefined) requestBody.awaitPromise = awaitPromise;

        const result = await steelRequest(`/v1/sessions/${sessionId}/execute`, {
          method: "POST",
          body: JSON.stringify(requestBody),
        });

        let output = `Script executed in session ${sessionId}\n\n`;
        output += `Result:\n${JSON.stringify(result.result, null, 2)}\n`;

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error executing script in session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "screenshot",
    description:
      "Take a screenshot of the current page in a Steel browser session.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to take screenshot in"),
      fullPage: z
        .boolean()
        .optional()
        .describe("Capture full scrollable page"),
      selector: z
        .string()
        .optional()
        .describe("CSS selector of element to screenshot"),
    }),
    async run({ sessionId, fullPage, selector }) {
      try {
        const requestBody = {};
        if (fullPage !== undefined) requestBody.fullPage = fullPage;
        if (selector) requestBody.selector = selector;

        const result = await steelRequest(
          `/v1/sessions/${sessionId}/screenshot`,
          {
            method: "POST",
            body: JSON.stringify(requestBody),
          },
        );

        let output = `Screenshot taken in session ${sessionId}\n\n`;
        output += `Image (base64, first 500 chars):\n${result.screenshot.substring(0, 500)}...\n`;
        output += `\nFull length: ${result.screenshot.length} characters\n`;

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error taking screenshot in session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },

  {
    name: "get-content",
    description:
      "Get the current page content (HTML, markdown, text) from a Steel browser session.",
    inputSchema: z.object({
      sessionId: z.string().describe("The session ID to get content from"),
      format: z
        .enum(["html", "markdown", "text"])
        .optional()
        .describe("Content format to return"),
    }),
    async run({ sessionId, format }) {
      try {
        const requestBody = {};
        if (format) requestBody.format = format;

        const result = await steelRequest(`/v1/sessions/${sessionId}/content`, {
          method: "POST",
          body: JSON.stringify(requestBody),
        });

        let output = `Page content from session ${sessionId}:\n\n`;
        if (result.content?.markdown) {
          output += `--- Markdown ---\n${result.content.markdown.substring(0, 3000)}\n`;
        } else if (result.content?.html) {
          output += `--- HTML ---\n${result.content.html.substring(0, 3000)}\n`;
        } else if (result.content?.text) {
          output += `--- Text ---\n${result.content.text.substring(0, 3000)}\n`;
        }

        return {
          content: [{ type: "text", text: output }],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error getting content from session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  },
];

// ---------------------------------------------------------------------------
// JSON-RPC helpers
// ---------------------------------------------------------------------------
function jsonRpcResponse(id, result) {
  return { jsonrpc: "2.0", id: id ?? null, result };
}

function jsonRpcError(id, code, message) {
  return { jsonrpc: "2.0", id: id ?? null, error: { code, message } };
}

function httpJson(body, status = 200) {
  return new Response(JSON.stringify(body), {
    status,
    headers: {
      "content-type": "application/json",
      "cache-control": "no-store",
    },
  });
}

function zodToJsonSchema(schema) {
  return typeof z.toJSONSchema === "function"
    ? z.toJSONSchema(schema)
    : schema;
}

// ---------------------------------------------------------------------------
// Request dispatch
// ---------------------------------------------------------------------------
async function handleRequest(request) {
  if (request.method !== "POST") {
    // GET is used for discovery/health by some clients; return a simple body.
    return new Response(
      "Steel MCP server. POST JSON-RPC messages to this endpoint.",
      {
        status: request.method === "GET" ? 200 : 405,
        headers: { "content-type": "text/plain" },
      },
    );
  }

  let msg;
  try {
    msg = await request.json();
  } catch {
    return httpJson(jsonRpcError(null, -32700, "Parse error"), 400);
  }

  const id = msg?.id ?? null;

  switch (msg?.method) {
    case "initialize": {
      const requested = msg.params?.protocolVersion;
      const protocolVersion = SUPPORTED_PROTOCOL_VERSIONS.includes(requested)
        ? requested
        : DEFAULT_PROTOCOL_VERSION;
      return httpJson(
        jsonRpcResponse(id, {
          protocolVersion,
          capabilities: { tools: { listChanged: false } },
          serverInfo: SERVER_INFO,
        }),
      );
    }

    case "notifications/initialized":
    case "notifications/cancelled":
    case "notifications/progress":
    case "notifications/roots/list_changed":
    case "notifications/tools/list_changed": {
      // Notifications carry no response body.
      return new Response(null, { status: 202 });
    }

    case "ping":
      return httpJson(jsonRpcResponse(id, {}));

    case "tools/list":
      return httpJson(
        jsonRpcResponse(id, {
          tools: TOOLS.map(({ name, description, inputSchema }) => ({
            name,
            description,
            inputSchema: zodToJsonSchema(inputSchema),
          })),
        }),
      );

    case "tools/call": {
      const { name, arguments: rawArgs } = msg.params ?? {};
      const tool = TOOLS.find((t) => t.name === name);
      if (!tool) {
        return httpJson(jsonRpcError(id, -32602, `Unknown tool: ${name}`));
      }
      try {
        const args = tool.inputSchema.parse(rawArgs ?? {});
        const result = await tool.run(args);
        return httpJson(jsonRpcResponse(id, result));
      } catch (error) {
        return httpJson(
          jsonRpcResponse(id, {
            content: [
              {
                type: "text",
                text: `Error calling ${name}: ${error.message}`,
              },
            ],
            isError: true,
          }),
        );
      }
    }

    default:
      return httpJson(
        jsonRpcError(id, -32601, `Method not found: ${msg?.method}`),
      );
  }
}

/**
 * EdgeOne Pages function handler (Node/edge runtime).
 * Served at the `/mcp` route (file: edge-functions/mcp/index.js).
 * Receives the request via context and returns a `Response`.
 * Accepted EdgeOne signature: default export named `onRequest`.
 */
export default async function onRequest(context) {
  // Copy EdgeOne environment variables (context.env) into the store so the
  // Steel API key can be read regardless of the runtime.
  if (context && context.env) {
    for (const [key, value] of Object.entries(context.env)) {
      envStore[key] = value;
    }
  }
  return handleRequest(context.request);
}
