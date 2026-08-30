import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StreamableHTTPServerTransport } from '@modelcontextprotocol/sdk/server/streamableHttp.js';
import { createServer, IncomingMessage, ServerResponse } from 'http';
import { z } from 'zod';
import { SteelClient } from './client.js';
import { DEFAULT_CONFIG, MCP_SERVER_CONFIG, SERVER_CONFIG } from './config/index.js';
import {
  navigateTool,
  screenshotTool,
  clickTool,
  typeTool,
  evaluateTool,
  extractTool,
  waitTool,
  newSessionTool,
  closeSessionTool,
  getSessionInfoTool,
} from './tools/index.js';

/**
 * Khởi tạo MCP Server với Streamable HTTP Transport cho Steel Browser
 */
async function main() {
  // Tạo Steel Client
  const steelClient = new SteelClient(DEFAULT_CONFIG);

  // Tạo HTTP server
  const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
    try {
      // Tạo MCP Server mới cho mỗi request để tránh lỗi "Already connected to a transport"
      const server = new McpServer({
        name: MCP_SERVER_CONFIG.name,
        version: MCP_SERVER_CONFIG.version,
      });

      // Đăng ký tất cả các tools
      registerTools(server, steelClient);

      // Tạo transport cho mỗi request - dùng stateless mode (sessionIdGenerator: undefined)
      // Vì mỗi request HTTP tạo một McpServer instance mới, không cần session management
      const transport = new StreamableHTTPServerTransport({
        sessionIdGenerator: undefined, // Stateless mode - mỗi request độc lập
        onsessioninitialized: (sessionId: string) => {
          console.error(`Session initialized: ${sessionId}`);
        },
        onsessionclosed: (sessionId: string) => {
          console.error(`Session closed: ${sessionId}`);
        },
      });

      // Kết nối server với transport
      await server.connect(transport);

      // Xử lý request thông qua transport
      await transport.handleRequest(req, res);
    } catch (error) {
      console.error('Error handling request:', error);
      res.statusCode = 500;
      res.end('Internal Server Error');
    }
  });

  // Bắt đầu lắng nghe
  httpServer.listen(SERVER_CONFIG.port, SERVER_CONFIG.host, () => {
    console.error(`Steel MCP Server running on http://${SERVER_CONFIG.host}:${SERVER_CONFIG.port}`);
    console.error('Streamable HTTP transport enabled');
  });
}

/**
 * Đăng ký tất cả các tools với server
 */
function registerTools(server: McpServer, steelClient: SteelClient) {
  // Tool: New Session
  server.tool(
    newSessionTool.name,
    newSessionTool.description,
    newSessionTool.inputSchema.shape,
    async (params: z.infer<typeof newSessionTool.inputSchema>) => {
      const result = await steelClient.createSession({
        userAgent: params.userAgent,
        viewport: params.viewport,
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: `Session created successfully. Session ID: ${JSON.stringify(result.data)}`,
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error creating session: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Tool: Close Session
  server.tool(
    closeSessionTool.name,
    closeSessionTool.description,
    closeSessionTool.inputSchema.shape,
    async (params: z.infer<typeof closeSessionTool.inputSchema>) => {
      const result = await steelClient.closeSession(params.sessionId);

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: `Session ${params.sessionId} closed successfully.`,
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error closing session: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Tool: Get Session Info
  server.tool(
    getSessionInfoTool.name,
    getSessionInfoTool.description,
    getSessionInfoTool.inputSchema.shape,
    async (params: z.infer<typeof getSessionInfoTool.inputSchema>) => {
      const result = await steelClient.getSessionInfo(params.sessionId);

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify(result.data, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error getting session info: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Tool: Navigate
  server.tool(
    navigateTool.name,
    navigateTool.description,
    navigateTool.inputSchema.shape,
    async (params: z.infer<typeof navigateTool.inputSchema>) => {
      let sessionId = params.sessionId;
      if (!sessionId) {
        const newSession = await steelClient.createSession();
        if (!newSession.success || !newSession.data) {
          return {
            content: [{ type: 'text', text: `Error creating session: ${newSession.error}` }],
            isError: true,
          };
        }
        sessionId = (newSession.data as any).sessionId;
      }

      const result = await steelClient.navigate(sessionId!, params.url, params.waitUntil);

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Navigation successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error navigating: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Screenshot
  server.tool(
    screenshotTool.name,
    screenshotTool.description,
    screenshotTool.inputSchema.shape,
    async (params: z.infer<typeof screenshotTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for screenshot' }],
          isError: true,
        };
      }

      const result = await steelClient.screenshot(sessionId, {
        fullPage: params.fullPage,
        format: params.format,
        quality: params.quality,
      });

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Screenshot captured', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error capturing screenshot: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Click
  server.tool(
    clickTool.name,
    clickTool.description,
    clickTool.inputSchema.shape,
    async (params: z.infer<typeof clickTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for click' }],
          isError: true,
        };
      }

      const result = await steelClient.click(sessionId, params.selector, {
        button: params.button,
        clickCount: params.clickCount,
      });

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Click successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error clicking: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Type
  server.tool(
    typeTool.name,
    typeTool.description,
    typeTool.inputSchema.shape,
    async (params: z.infer<typeof typeTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for type' }],
          isError: true,
        };
      }

      const result = await steelClient.type(sessionId, params.selector, params.text, {
        delay: params.delay,
      });

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Type successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error typing: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Evaluate
  server.tool(
    evaluateTool.name,
    evaluateTool.description,
    evaluateTool.inputSchema.shape,
    async (params: z.infer<typeof evaluateTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for evaluate' }],
          isError: true,
        };
      }

      const result = await steelClient.evaluate(sessionId, params.script);

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Evaluate successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error evaluating: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Extract
  server.tool(
    extractTool.name,
    extractTool.description,
    extractTool.inputSchema.shape,
    async (params: z.infer<typeof extractTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for extract' }],
          isError: true,
        };
      }

      const result = await steelClient.extract(sessionId, params.selector, {
        attribute: params.attribute,
        all: params.all,
      });

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Extract successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error extracting: ${result.error}` }],
          isError: true,
        };
      }
    }
  );

  // Tool: Wait
  server.tool(
    waitTool.name,
    waitTool.description,
    waitTool.inputSchema.shape,
    async (params: z.infer<typeof waitTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [{ type: 'text', text: 'Session ID is required for wait' }],
          isError: true,
        };
      }

      const result = await steelClient.wait(sessionId, params.timeout, {
        selector: params.selector,
        state: params.state,
      });

      if (result.success) {
        return {
          content: [{
            type: 'text',
            text: JSON.stringify({ message: 'Wait successful', sessionId, data: result.data }, null, 2),
          }],
        };
      } else {
        return {
          content: [{ type: 'text', text: `Error waiting: ${result.error}` }],
          isError: true,
        };
      }
    }
  );
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
