import {
  McpServer,
  WebStandardStreamableHTTPServerTransport,
} from "@modelcontextprotocol/server";
import * as z from "zod/v4";

// Environment store that works on Node.js (`process.env`) and EdgeOne Pages
// (`context.env`). EdgeOne functions receive env via the context argument, so
// onRequest copies it into this store before handling the request.
const envStore =
  typeof globalThis.process !== "undefined" && globalThis.process.env
    ? globalThis.process.env
    : {};

const STEEL_API_BASE = "https://api.steel.dev";

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

// JSON-only transport: the MCP SDK's POST handler normally requires clients
// to advertise both JSON and SSE in Accept, even when JSON responses are enabled.
// Normalize Accept internally so clients can request application/json only.
class JsonOnlyStreamableHTTPServerTransport extends WebStandardStreamableHTTPServerTransport {
  async handlePostRequest(request, options) {
    const headers = new Headers(request.headers);
    const accept = headers.get("accept") || "";
    if (!accept.includes("text/event-stream")) {
      headers.set(
        "accept",
        accept
          ? `${accept}, text/event-stream`
          : "application/json, text/event-stream",
      );
    }
    const normalizedRequest = new Request(request, { headers });
    return super.handlePostRequest(normalizedRequest, options);
  }
}

function createServer() {
  const server = new McpServer({
    name: "steel-browser",
    version: "1.0.0",
    // Support all protocol revisions understood by this SDK, including the modern 2026 revision.
    supportedProtocolVersions: [
      "2026-07-28",
      "2025-11-25",
      "2025-06-18",
      "2025-03-26",
      "2024-11-05",
      "2024-10-07",
    ],
  });

  // Tool 1: Scrape a URL without browser session
  server.registerTool(
    "scrape",
    {
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
    },
    async ({
      url,
      waitForSelector,
      timeout,
      removeSelector,
      onlyMainContent,
      includeLinks,
    }) => {
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
  );

  // Tool 2: Create a browser session
  server.registerTool(
    "create-session",
    {
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
    },
    async ({ sessionId, useProxy, solveCaptcha, recordVideo, timeout }) => {
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
  );

  // Tool 3: Release a browser session
  server.registerTool(
    "release-session",
    {
      description:
        "Release/end a Steel browser session. Always call this when done with a session to avoid charges.",
      inputSchema: z.object({
        sessionId: z.string().describe("The session ID to release"),
      }),
    },
    async ({ sessionId }) => {
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
  );

  // Tool 4: Get session details
  server.registerTool(
    "get-session",
    {
      description: "Get details about an existing Steel browser session.",
      inputSchema: z.object({
        sessionId: z.string().describe("The session ID to retrieve"),
      }),
    },
    async ({ sessionId }) => {
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
  );

  // Tool 5: Navigate in a session
  server.registerTool(
    "navigate",
    {
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
    },
    async ({ sessionId, url, waitForSelector, timeout, takeScreenshot }) => {
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
  );

  // Tool 6: Execute JavaScript in a session
  server.registerTool(
    "execute-script",
    {
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
    },
    async ({ sessionId, script, awaitPromise }) => {
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
  );

  // Tool 7: Take a screenshot
  server.registerTool(
    "screenshot",
    {
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
    },
    async ({ sessionId, fullPage, selector }) => {
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
  );

  // Tool 8: Get page content
  server.registerTool(
    "get-content",
    {
      description:
        "Get the current page content (HTML, markdown, text) from a Steel browser session.",
      inputSchema: z.object({
        sessionId: z.string().describe("The session ID to get content from"),
        format: z
          .enum(["html", "markdown", "text"])
          .optional()
          .describe("Content format to return"),
      }),
    },
    async ({ sessionId, format }) => {
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
  );

  return server;
}

/**
 * Serves a single web-standard `Request` and resolves with a `Response`.
 * Each request gets a fresh McpServer instance (stateless) and a Streamable
 * HTTP transport with `enableJsonResponse: true`, so the SDK answers with
 * plain JSON instead of an SSE stream — required on runtimes such as
 * EdgeOne Pages that do not support streaming responses.
 */
async function handleRequest(request) {
  const server = createServer();
  const transport = new JsonOnlyStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });
  await server.connect(transport);
  try {
    return await transport.handleRequest(request);
  } finally {
    transport.close().catch(() => {});
    server.close().catch(() => {});
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
