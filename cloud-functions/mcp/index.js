import {
  McpServer,
  WebStandardStreamableHTTPServerTransport,
} from "@modelcontextprotocol/server";
import { z } from "zod/v4";
import WebSocket from "ws";

const STEEL_API_BASE = "https://api.steel.dev";

/**
 * Helper to make requests to Steel API
 * @see https://docs.steel.dev/llms-full.txt
 */
async function steelRequest(endpoint, options = {}, env = {}) {
  const apiKey =
    env.STEEL_API_KEY ||
    (typeof globalThis.process !== "undefined" &&
      globalThis.process.env?.STEEL_API_KEY);

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

  // Some endpoints may return empty body
  const text = await response.text();
  if (!text) return {};
  try {
    return JSON.parse(text);
  } catch {
    return { raw: text };
  }
}

/** POST /v1/sessions/{id}/computer — mouse/keyboard/screenshot */
async function computerAction(sessionId, body, env) {
  return steelRequest(
    `/v1/sessions/${sessionId}/computer`,
    { method: "POST", body: JSON.stringify(body) },
    env,
  );
}

function formatComputerResult(result) {
  let output = "";
  if (result.base64_image) {
    output += `Screenshot (base64, length ${result.base64_image.length}):\n`;
    output += `${result.base64_image.slice(0, 200)}...\n`;
  }
  if (result.cursor_position) {
    output += `Cursor: ${JSON.stringify(result.cursor_position)}\n`;
  }
  // Include other useful fields without dumping huge blobs
  const { base64_image, ...rest } = result;
  if (Object.keys(rest).length > 0) {
    output += `\nResponse:\n${JSON.stringify(rest, null, 2)}\n`;
  }
  return output || JSON.stringify(result);
}


/** Resolve Steel session websocket URL + API key for CDP */
async function getSessionCdpEndpoint(sessionId, env) {
  const apiKey =
    env.STEEL_API_KEY ||
    (typeof globalThis.process !== "undefined" &&
      globalThis.process.env?.STEEL_API_KEY);
  if (!apiKey) throw new Error("STEEL_API_KEY environment variable is required");

  const session = await steelRequest(`/v1/sessions/${sessionId}`, {}, env);
  const base =
    session.websocketUrl ||
    session.websocket_url ||
    `wss://connect.steel.dev?sessionId=${sessionId}`;
  const sep = base.includes("?") ? "&" : "?";
  // Prefer appending apiKey if not already present
  const wsUrl = /apiKey=/i.test(base)
    ? base
    : `${base}${sep}apiKey=${encodeURIComponent(apiKey)}`;
  return { wsUrl, session, apiKey };
}

/**
 * Minimal CDP client over Steel session WebSocket.
 * Attaches to the first page target and runs `handler({ send, sessionId })`.
 */
async function withCdpPage(sessionId, env, handler, { timeoutMs = 30000 } = {}) {
  const { wsUrl } = await getSessionCdpEndpoint(sessionId, env);

  return new Promise((resolve, reject) => {
    const ws = new WebSocket(wsUrl);
    let nextId = 1;
    const pending = new Map();
    let settled = false;
    let pageSessionId = null;

    const fail = (err) => {
      if (settled) return;
      settled = true;
      try {
        ws.close();
      } catch {}
      reject(err instanceof Error ? err : new Error(String(err)));
    };

    const timer = setTimeout(
      () => fail(new Error(`CDP timeout after ${timeoutMs}ms`)),
      timeoutMs,
    );

    const send = (method, params = {}, sessionIdForCmd) => {
      const id = nextId++;
      const msg = { id, method, params };
      if (sessionIdForCmd) msg.sessionId = sessionIdForCmd;
      return new Promise((res, rej) => {
        pending.set(id, { res, rej });
        try {
          ws.send(JSON.stringify(msg));
        } catch (e) {
          pending.delete(id);
          rej(e);
        }
      });
    };

    const eventListeners = [];
    const onEvent = (method, cb) => {
      eventListeners.push({ method, cb });
    };

    ws.on("open", async () => {
      try {
        // Discover page targets
        const { result } = await send("Target.getTargets");
        const targets = result?.targetInfos || [];
        const page =
          targets.find((t) => t.type === "page" && !t.url?.startsWith("devtools:")) ||
          targets.find((t) => t.type === "page");
        if (!page) {
          throw new Error(
            `No page target found (targets: ${targets.map((t) => t.type).join(",") || "none"})`,
          );
        }

        const attached = await send("Target.attachToTarget", {
          targetId: page.targetId,
          flatten: true,
        });
        pageSessionId = attached.result?.sessionId;
        if (!pageSessionId) {
          throw new Error("Failed to attach to page target");
        }

        const out = await handler({
          send: (method, params = {}) => send(method, params, pageSessionId),
          onEvent,
          pageTarget: page,
          browserSend: send,
        });

        if (!settled) {
          settled = true;
          clearTimeout(timer);
          try {
            ws.close();
          } catch {}
          resolve(out);
        }
      } catch (e) {
        fail(e);
      }
    });

    ws.on("message", (data) => {
      let msg;
      try {
        msg = JSON.parse(String(data));
      } catch {
        return;
      }
      if (msg.id != null && pending.has(msg.id)) {
        const { res, rej } = pending.get(msg.id);
        pending.delete(msg.id);
        if (msg.error) rej(new Error(msg.error.message || JSON.stringify(msg.error)));
        else res(msg);
        return;
      }
      if (msg.method) {
        for (const { method, cb } of eventListeners) {
          if (method === msg.method || method === "*") {
            try {
              cb(msg);
            } catch {}
          }
        }
      }
    });

    ws.on("error", (err) => fail(err));
    ws.on("close", () => {
      if (!settled) fail(new Error("CDP WebSocket closed unexpectedly"));
    });
  });
}


function createServer(env = {}) {
  const server = new McpServer({
    name: "steel-browser",
    version: "1.2.0",
    supportedProtocolVersions: [
      "2026-07-28",
      "2025-11-25",
      "2025-06-18",
      "2025-03-26",
      "2024-11-05",
      "2024-10-07",
    ],
  });

  // ── Stateless: POST /v1/scrape ──────────────────────────────────────────
  server.registerTool(
    "scrape",
    {
      description:
        "Scrape a URL with Steel (stateless). Returns markdown/html content, metadata, and links. Optional screenshot/pdf as hosted URLs. No session required.",
      inputSchema: z.object({
        url: z.string().url().describe("The URL to scrape"),
        format: z
          .array(z.enum(["markdown", "html", "cleaned_html", "readability"]))
          .optional()
          .describe("Content formats to return (default: markdown)"),
        delay: z
          .number()
          .optional()
          .describe("Wait ms after load for client-rendered content"),
        useProxy: z
          .boolean()
          .optional()
          .describe("Route through Steel residential proxies"),
        screenshot: z
          .boolean()
          .optional()
          .describe("Also capture a hosted screenshot URL"),
        pdf: z.boolean().optional().describe("Also capture a hosted PDF URL"),
      }),
    },
    async ({ url, format, delay, useProxy, screenshot, pdf }) => {
      try {
        const requestBody = {
          url,
          format: format ?? ["markdown"],
        };
        if (delay !== undefined) requestBody.delay = delay;
        if (useProxy !== undefined) requestBody.useProxy = useProxy;
        if (screenshot !== undefined) requestBody.screenshot = screenshot;
        if (pdf !== undefined) requestBody.pdf = pdf;

        const result = await steelRequest(
          "/v1/scrape",
          { method: "POST", body: JSON.stringify(requestBody) },
          env,
        );

        let output = `URL: ${url}\n`;
        output += `Status: ${result.metadata?.statusCode ?? result.metadata?.status_code ?? "N/A"}\n`;
        output += `Title: ${result.metadata?.title ?? "N/A"}\n\n`;

        const content = result.content ?? {};
        if (content.markdown) {
          output += `--- Markdown ---\n${content.markdown}\n`;
        } else if (content.html) {
          output += `--- HTML ---\n${String(content.html).slice(0, 8000)}\n`;
        } else if (content.cleaned_html || content.cleanedHtml) {
          output += `--- Cleaned HTML ---\n${String(content.cleaned_html ?? content.cleanedHtml).slice(0, 8000)}\n`;
        } else if (content.readability) {
          output += `--- Readability ---\n${JSON.stringify(content.readability).slice(0, 8000)}\n`;
        }

        if (result.links?.length) {
          output += `\n--- Links (${result.links.length}) ---\n`;
          result.links.slice(0, 30).forEach((link) => {
            const href = link.url ?? link.href ?? "";
            const text = link.text ?? "";
            output += `- ${href}${text ? ` (${text})` : ""}\n`;
          });
        }

        if (result.screenshot?.url) {
          output += `\nScreenshot: ${result.screenshot.url}\n`;
        }
        if (result.pdf?.url) {
          output += `PDF: ${result.pdf.url}\n`;
        }

        return { content: [{ type: "text", text: output }] };
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

  // ── Stateless: POST /v1/screenshot ──────────────────────────────────────
  server.registerTool(
    "screenshot-url",
    {
      description:
        "Take a screenshot of a URL (stateless). Returns a hosted PNG URL. No session required.",
      inputSchema: z.object({
        url: z.string().url().describe("The URL to capture"),
        fullPage: z
          .boolean()
          .optional()
          .describe("Capture full scrollable page"),
        useProxy: z.boolean().optional().describe("Use residential proxies"),
      }),
    },
    async ({ url, fullPage, useProxy }) => {
      try {
        const requestBody = { url };
        if (fullPage !== undefined) requestBody.fullPage = fullPage;
        if (useProxy !== undefined) requestBody.useProxy = useProxy;

        const result = await steelRequest(
          "/v1/screenshot",
          { method: "POST", body: JSON.stringify(requestBody) },
          env,
        );

        const hosted = result.url ?? result.screenshot?.url ?? "(no url)";
        return {
          content: [
            {
              type: "text",
              text: `Screenshot of ${url}\nHosted URL: ${hosted}\n`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error screenshotting ${url}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // ── Session lifecycle ───────────────────────────────────────────────────
  server.registerTool(
    "create-session",
    {
      description:
        "Create a Steel cloud browser session. Returns session ID, CDP websocketUrl, and sessionViewerUrl. Drive the browser via computer actions or connect Puppeteer/Playwright over CDP. Always call release-session when done.",
      inputSchema: z.object({
        sessionId: z
          .string()
          .uuid()
          .optional()
          .describe("Optional custom session UUID"),
        useProxy: z.boolean().optional().describe("Use residential proxies"),
        solveCaptcha: z
          .boolean()
          .optional()
          .describe("Enable automatic CAPTCHA solving"),
        timeout: z
          .number()
          .optional()
          .describe("Session timeout in milliseconds (Steel default ~5 min)"),
        dimensions: z
          .object({
            width: z.number(),
            height: z.number(),
          })
          .optional()
          .describe("Viewport dimensions (recommended for computer-use)"),
      }),
    },
    async ({ sessionId, useProxy, solveCaptcha, timeout, dimensions }) => {
      try {
        const requestBody = {};
        if (sessionId) requestBody.sessionId = sessionId;
        if (useProxy !== undefined) requestBody.useProxy = useProxy;
        if (solveCaptcha !== undefined) requestBody.solveCaptcha = solveCaptcha;
        if (timeout !== undefined) requestBody.timeout = timeout;
        if (dimensions) requestBody.dimensions = dimensions;

        const session = await steelRequest(
          "/v1/sessions",
          { method: "POST", body: JSON.stringify(requestBody) },
          env,
        );

        const apiKeyHint = "YOUR_API_KEY";
        let output = `Session created successfully!\n\n`;
        output += `Session ID: ${session.id}\n`;
        output += `Status: ${session.status ?? "n/a"}\n`;
        output += `WebSocket (CDP): ${session.websocketUrl ?? session.websocket_url ?? "n/a"}\n`;
        if (session.sessionViewerUrl || session.debugUrl) {
          output += `Live viewer: ${session.sessionViewerUrl ?? session.debugUrl}\n`;
        }
        output += `Created at: ${session.createdAt ?? session.created_at ?? "n/a"}\n`;

        output += `\n--- CDP connect (Puppeteer) ---\n`;
        output += `browserWSEndpoint: \`${session.websocketUrl ?? session.websocket_url}&apiKey=${apiKeyHint}\`\n`;
        output += `\nDrive via tools: navigate, computer, session-screenshot. Call release-session when done.\n`;

        return { content: [{ type: "text", text: output }] };
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

  server.registerTool(
    "get-session",
    {
      description: "Get details about an existing Steel browser session.",
      inputSchema: z.object({
        sessionId: z.string().describe("The session ID"),
      }),
    },
    async ({ sessionId }) => {
      try {
        const session = await steelRequest(
          `/v1/sessions/${sessionId}`,
          {},
          env,
        );

        let output = `Session Details:\n\n`;
        output += `ID: ${session.id}\n`;
        output += `Status: ${session.status}\n`;
        output += `Created at: ${session.createdAt ?? session.created_at}\n`;
        if (session.expiresAt || session.expires_at) {
          output += `Expires at: ${session.expiresAt ?? session.expires_at}\n`;
        }
        if (session.websocketUrl || session.websocket_url) {
          output += `WebSocket URL: ${session.websocketUrl ?? session.websocket_url}\n`;
        }
        if (session.sessionViewerUrl || session.debugUrl) {
          output += `Live viewer: ${session.sessionViewerUrl ?? session.debugUrl}\n`;
        }

        return { content: [{ type: "text", text: output }] };
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

  server.registerTool(
    "release-session",
    {
      description:
        "Release/end a Steel browser session. Always call this when done to avoid charges.",
      inputSchema: z.object({
        sessionId: z.string().describe("The session ID to release"),
      }),
    },
    async ({ sessionId }) => {
      try {
        await steelRequest(
          `/v1/sessions/${sessionId}`,
          { method: "DELETE" },
          env,
        );
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

  // ── Session drive: Computer API ─────────────────────────────────────────
  // POST /v1/sessions/{id}/computer
  // Actions: move_mouse | click_mouse | drag_mouse | scroll | press_key |
  //          type_text | wait | take_screenshot | get_cursor_position

  server.registerTool(
    "computer",
    {
      description:
        "Execute a Steel Computer Use action on a live session (POST /v1/sessions/{id}/computer). Actions: move_mouse, click_mouse, drag_mouse, scroll, press_key, type_text, wait, take_screenshot, get_cursor_position.",
      inputSchema: z.object({
        sessionId: z.string().describe("Active Steel session ID"),
        action: z
          .enum([
            "move_mouse",
            "click_mouse",
            "drag_mouse",
            "scroll",
            "press_key",
            "type_text",
            "wait",
            "take_screenshot",
            "get_cursor_position",
          ])
          .describe("Computer action type"),
        coordinates: z
          .object({ x: z.number(), y: z.number() })
          .optional()
          .describe("Pointer coordinates for move/click/drag/scroll"),
        button: z
          .enum(["left", "right", "middle"])
          .optional()
          .describe("Mouse button for click"),
        keys: z
          .array(z.string())
          .optional()
          .describe('Keys for press_key, e.g. ["Control", "l"] or ["Enter"]'),
        text: z.string().optional().describe("Text for type_text"),
        duration: z
          .number()
          .optional()
          .describe("Wait duration in seconds (action=wait)"),
        path: z
          .array(z.object({ x: z.number(), y: z.number() }))
          .optional()
          .describe("Path points for drag_mouse"),
        screenshot: z
          .boolean()
          .optional()
          .describe("Request a screenshot in the response after the action"),
      }),
    },
    async ({
      sessionId,
      action,
      coordinates,
      button,
      keys,
      text,
      duration,
      path,
      screenshot,
    }) => {
      try {
        const body = { action };
        if (coordinates) body.coordinates = coordinates;
        if (button) body.button = button;
        if (keys) body.keys = keys;
        if (text !== undefined) body.text = text;
        if (duration !== undefined) body.duration = duration;
        if (path) body.path = path;
        if (screenshot !== undefined) body.screenshot = screenshot;

        const result = await computerAction(sessionId, body, env);
        return {
          content: [
            {
              type: "text",
              text: `Action ${action} on session ${sessionId}\n\n${formatComputerResult(result)}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error computer action on ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // Navigate via address bar (Ctrl/Meta+L → type URL → Enter) as in Steel recipes
  server.registerTool(
    "navigate",
    {
      description:
        "Navigate a live session to a URL using the Computer API (focus address bar, type URL, Enter). Requires an active session from create-session.",
      inputSchema: z.object({
        sessionId: z.string().describe("Active Steel session ID"),
        url: z.string().url().describe("URL to open"),
        waitSeconds: z
          .number()
          .optional()
          .describe("Seconds to wait after navigation (default 2)"),
      }),
    },
    async ({ sessionId, url, waitSeconds }) => {
      try {
        // Focus omnibox
        await computerAction(
          sessionId,
          { action: "press_key", keys: ["Control", "l"] },
          env,
        );
        await computerAction(
          sessionId,
          { action: "type_text", text: url },
          env,
        );
        await computerAction(
          sessionId,
          { action: "press_key", keys: ["Enter"] },
          env,
        );
        const wait = waitSeconds ?? 2;
        await computerAction(
          sessionId,
          { action: "wait", duration: wait },
          env,
        );
        const shot = await computerAction(
          sessionId,
          { action: "take_screenshot" },
          env,
        );

        return {
          content: [
            {
              type: "text",
              text: `Navigated session ${sessionId} to ${url}\n\n${formatComputerResult(shot)}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error navigating session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  server.registerTool(
    "session-screenshot",
    {
      description:
        "Screenshot the current page in a live Steel session via Computer API (action=take_screenshot). Returns base64 image metadata.",
      inputSchema: z.object({
        sessionId: z.string().describe("Active Steel session ID"),
      }),
    },
    async ({ sessionId }) => {
      try {
        const result = await computerAction(
          sessionId,
          { action: "take_screenshot" },
          env,
        );
        return {
          content: [
            {
              type: "text",
              text: `Session ${sessionId} screenshot\n\n${formatComputerResult(result)}`,
            },
          ],
        };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error screenshot session ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );


  // ── CDP: get element source by CSS selector ─────────────────────────────
  server.registerTool(
    "get-selector",
    {
      description:
        "Get outerHTML / innerHTML / text / attribute of elements matching a CSS selector in a live Steel session (via CDP Runtime.evaluate). Requires an active session that already loaded a page.",
      inputSchema: z.object({
        sessionId: z.string().describe("Active Steel session ID"),
        selector: z.string().describe("CSS selector, e.g. #main, .article, div.foo"),
        property: z
          .enum(["outerHTML", "innerHTML", "textContent", "innerText"])
          .optional()
          .describe("Which property to return (default: outerHTML)"),
        attribute: z
          .string()
          .optional()
          .describe("If set, return this attribute instead of property (e.g. href, src)"),
        all: z
          .boolean()
          .optional()
          .describe("Return all matches (default: first match only)"),
        maxLength: z
          .number()
          .optional()
          .describe("Truncate each result string to this many chars (default 50000)"),
      }),
    },
    async ({
      sessionId,
      selector,
      property,
      attribute,
      all,
      maxLength,
    }) => {
      try {
        const prop = property ?? "outerHTML";
        const max = maxLength ?? 50000;
        const result = await withCdpPage(sessionId, env, async ({ send }) => {
          await send("Runtime.enable");
          const expression = `
            (() => {
              const sel = ${JSON.stringify(selector)};
              const attr = ${JSON.stringify(attribute ?? null)};
              const prop = ${JSON.stringify(prop)};
              const all = ${all ? "true" : "false"};
              const nodes = all
                ? Array.from(document.querySelectorAll(sel))
                : (() => { const n = document.querySelector(sel); return n ? [n] : []; })();
              return {
                url: location.href,
                title: document.title,
                count: nodes.length,
                items: nodes.map((el, i) => {
                  let value;
                  if (attr) value = el.getAttribute(attr);
                  else if (prop === "textContent") value = el.textContent;
                  else if (prop === "innerText") value = el.innerText;
                  else if (prop === "innerHTML") value = el.innerHTML;
                  else value = el.outerHTML;
                  return { index: i, tag: el.tagName, value };
                }),
              };
            })()
          `;
          const evalResult = await send("Runtime.evaluate", {
            expression,
            returnByValue: true,
            awaitPromise: true,
          });
          if (evalResult.result?.exceptionDetails) {
            throw new Error(
              evalResult.result.exceptionDetails.text ||
                JSON.stringify(evalResult.result.exceptionDetails),
            );
          }
          return evalResult.result?.result?.value;
        });

        if (!result) {
          return {
            content: [{ type: "text", text: "No result from page evaluate" }],
            isError: true,
          };
        }

        let output = `URL: ${result.url}\nTitle: ${result.title}\nSelector: ${selector}\nMatches: ${result.count}\n\n`;
        if (!result.count) {
          output += "(no elements matched)\n";
        } else {
          for (const item of result.items) {
            let v = item.value ?? "";
            if (typeof v === "string" && v.length > max) {
              v = v.slice(0, max) + `\n... [truncated, total ${item.value.length} chars]`;
            }
            output += `--- [${item.index}] <${item.tag}> ---\n${v}\n\n`;
          }
        }

        return { content: [{ type: "text", text: output }] };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error get-selector on ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  // ── CDP: capture network requests for a time window ─────────────────────
  server.registerTool(
    "network-requests",
    {
      description:
        "Capture network requests/responses on a live Steel session via CDP Network domain for a short listen window. Enable Network, collect requestWillBeSent + responseReceived, return summary (method, url, status, mimeType, resourceType).",
      inputSchema: z.object({
        sessionId: z.string().describe("Active Steel session ID"),
        durationMs: z
          .number()
          .optional()
          .describe("How long to listen in ms (default 5000, max 30000)"),
        urlFilter: z
          .string()
          .optional()
          .describe("Only include requests whose URL contains this substring"),
        resourceTypes: z
          .array(
            z.enum([
              "Document",
              "Stylesheet",
              "Image",
              "Media",
              "Font",
              "Script",
              "TextTrack",
              "XHR",
              "Fetch",
              "Prefetch",
              "EventSource",
              "WebSocket",
              "Manifest",
              "SignedExchange",
              "Ping",
              "CSPViolationReport",
              "Preflight",
              "Other",
            ]),
          )
          .optional()
          .describe("Filter by resource type (e.g. XHR, Fetch, Document)"),
        includeHeaders: z
          .boolean()
          .optional()
          .describe("Include request/response headers (default false)"),
      }),
    },
    async ({
      sessionId,
      durationMs,
      urlFilter,
      resourceTypes,
      includeHeaders,
    }) => {
      try {
        const listenMs = Math.min(Math.max(durationMs ?? 5000, 500), 30000);
        const data = await withCdpPage(
          sessionId,
          env,
          async ({ send, onEvent }) => {
            const byId = new Map();

            onEvent("Network.requestWillBeSent", (msg) => {
              const p = msg.params || {};
              const req = p.request || {};
              byId.set(p.requestId, {
                requestId: p.requestId,
                url: req.url,
                method: req.method,
                resourceType: p.type,
                timestamp: p.timestamp,
                requestHeaders: req.headers,
                status: null,
                mimeType: null,
                responseHeaders: null,
              });
            });

            onEvent("Network.responseReceived", (msg) => {
              const p = msg.params || {};
              const res = p.response || {};
              const existing = byId.get(p.requestId) || {
                requestId: p.requestId,
                url: res.url,
              };
              existing.status = res.status;
              existing.mimeType = res.mimeType;
              existing.resourceType = existing.resourceType || p.type;
              existing.responseHeaders = res.headers;
              byId.set(p.requestId, existing);
            });

            onEvent("Network.loadingFailed", (msg) => {
              const p = msg.params || {};
              const existing = byId.get(p.requestId) || {
                requestId: p.requestId,
              };
              existing.failed = true;
              existing.errorText = p.errorText;
              byId.set(p.requestId, existing);
            });

            await send("Network.enable", {
              maxTotalBufferSize: 10_000_000,
              maxResourceBufferSize: 5_000_000,
            });

            // Also grab document URL for context
            await send("Runtime.enable");
            const pageInfo = await send("Runtime.evaluate", {
              expression: "({ url: location.href, title: document.title })",
              returnByValue: true,
            });
            const page = pageInfo.result?.result?.value || {};

            await new Promise((r) => setTimeout(r, listenMs));

            let items = [...byId.values()];
            if (urlFilter) {
              items = items.filter((i) => (i.url || "").includes(urlFilter));
            }
            if (resourceTypes?.length) {
              const set = new Set(resourceTypes);
              items = items.filter((i) => set.has(i.resourceType));
            }

            return {
              page,
              listenMs,
              total: items.length,
              requests: items.map((i) => {
                const row = {
                  method: i.method,
                  url: i.url,
                  status: i.status,
                  mimeType: i.mimeType,
                  resourceType: i.resourceType,
                  failed: i.failed || false,
                  errorText: i.errorText,
                };
                if (includeHeaders) {
                  row.requestHeaders = i.requestHeaders;
                  row.responseHeaders = i.responseHeaders;
                }
                return row;
              }),
            };
          },
          { timeoutMs: listenMs + 20000 },
        );

        let output = `Page: ${data.page?.title || "n/a"}\nURL: ${data.page?.url || "n/a"}\nListened: ${data.listenMs}ms\nCaptured: ${data.total} request(s)\n\n`;
        const maxShow = 100;
        data.requests.slice(0, maxShow).forEach((r, idx) => {
          output += `${idx + 1}. [${r.method || "?"}] ${r.status ?? (r.failed ? "FAIL" : "?")} ${r.resourceType || ""} ${r.url || ""}\n`;
          if (r.mimeType) output += `   mime: ${r.mimeType}\n`;
          if (r.errorText) output += `   error: ${r.errorText}\n`;
          if (includeHeaders && r.requestHeaders) {
            output += `   req headers: ${JSON.stringify(r.requestHeaders)}\n`;
          }
          if (includeHeaders && r.responseHeaders) {
            output += `   res headers: ${JSON.stringify(r.responseHeaders)}\n`;
          }
        });
        if (data.total > maxShow) {
          output += `\n... and ${data.total - maxShow} more\n`;
        }

        return { content: [{ type: "text", text: output }] };
      } catch (error) {
        return {
          content: [
            {
              type: "text",
              text: `Error network-requests on ${sessionId}: ${error.message}`,
            },
          ],
          isError: true,
        };
      }
    },
  );

  return server;
}

// EdgeOne Pages — fully stateless MCP transport (JSON only, no session sticky)
const onRequest = async (context) => {
  const request = context instanceof Request ? context : context?.request;

  if (!request) {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32600, message: "Invalid request: No Request object" },
        id: null,
      }),
      { status: 400, headers: { "content-type": "application/json" } },
    );
  }

  if (request.method.toUpperCase() !== "POST") {
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32000, message: "Method not allowed." },
        id: null,
      }),
      { status: 405, headers: { "content-type": "application/json" } },
    );
  }

  const env = context?.env || {};
  const server = createServer(env);
  const transport = new WebStandardStreamableHTTPServerTransport({
    sessionIdGenerator: undefined,
    enableJsonResponse: true,
  });

  try {
    await server.connect(transport);
    return await transport.handleRequest(request);
  } catch (error) {
    console.error("[mcp-handler] error:", error);
    return new Response(
      JSON.stringify({
        jsonrpc: "2.0",
        error: {
          code: -32603,
          message: error?.message || "Internal server error",
        },
        id: null,
      }),
      { status: 500, headers: { "content-type": "application/json" } },
    );
  } finally {
    try {
      await transport.close();
    } catch {}
    try {
      await server.close();
    } catch {}
  }
};

export default onRequest;
