// Local development server (plain node:http).
// Run: npm run build:edge && node local-server.js
// Serves the bundled EdgeOne function at http://localhost:PORT/mcp
import http from "node:http";
import { webcrypto } from "node:crypto";
import onRequest from "./edge-functions/mcp/index.js";

// The Edge runtime provides global Web Crypto; Node's dev adapter needs to
// expose it so the bundled MCP transport can generate request stream IDs.
if (!globalThis.crypto) globalThis.crypto = webcrypto;

const PORT = process.env.PORT || 3000;

const server = http.createServer(async (req, res) => {
  try {
    let body = "";
    for await (const chunk of req) body += chunk;

    const request = new Request(
      `http://${req.headers.host ?? "localhost"}${req.url ?? "/"}`,
      {
        method: req.method ?? "GET",
        headers: req.headers,
        body: body || undefined,
      },
    );

    const response = await onRequest({ request, env: process.env });

    res.writeHead(response.status, Object.fromEntries(response.headers));
    res.end(await response.text());
  } catch (err) {
    res.writeHead(500, { "content-type": "application/json" });
    res.end(
      JSON.stringify({
        jsonrpc: "2.0",
        error: { code: -32603, message: err.message },
        id: null,
      }),
    );
  }
});

server.listen(PORT, "0.0.0.0", () => {
  console.error(`Steel MCP server running on port ${PORT} at http://localhost:${PORT}/mcp`);
});
