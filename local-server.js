// Local development server (plain node:http).
// The Cloudflare Pages Functions file must stay free of Node builtins, so the
// node:http glue lives here instead. Run with: node local-server.js
import http from "node:http";
import { webcrypto } from "node:crypto";
import { toNodeHandler } from "@modelcontextprotocol/node";
import onRequest from "./edge-functions/mcp/index.js";

// Node 18 does not expose the Web Crypto global in ESM scope; EdgeOne
// provides it natively. Polyfill it only for local development.
if (!globalThis.crypto) {
  globalThis.crypto = webcrypto;
}

const PORT = process.env.PORT || 3000;
const server = http.createServer(toNodeHandler({ fetch: (request) => onRequest({ request }) }));
server.listen(PORT, "0.0.0.0", () => {
  console.error(`Steel MCP server running on port ${PORT} at /`);
});

process.on("SIGINT", () => server.close(() => process.exit(0)));
