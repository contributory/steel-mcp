import { McpServer } from '@modelcontextprotocol/sdk/server/mcp.js';
import { StdioServerTransport } from '@modelcontextprotocol/sdk/server/stdio.js';
import { z } from 'zod';
import { SteelClient } from './client.js';
import { DEFAULT_CONFIG, MCP_SERVER_CONFIG } from './config/index.js';
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
 * Khởi tạo MCP Server cho Steel Browser
 */
async function main() {
  // Tạo Steel Client
  const steelClient = new SteelClient(DEFAULT_CONFIG);

  // Tạo MCP Server
  const server = new McpServer({
    name: MCP_SERVER_CONFIG.name,
    version: MCP_SERVER_CONFIG.version,
  });

  // Đăng ký tool: New Session
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
              text: `Session created successfully. Session ID: ${result.data}`,
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

  // Đăng ký tool: Close Session
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

  // Đăng ký tool: Get Session Info
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

  // Đăng ký tool: Navigate
  server.tool(
    navigateTool.name,
    navigateTool.description,
    navigateTool.inputSchema.shape,
    async (params: z.infer<typeof navigateTool.inputSchema>) => {
      // Tạo session mới nếu chưa có
      let sessionId = params.sessionId;
      if (!sessionId) {
        const newSession = await steelClient.createSession();
        if (!newSession.success || !newSession.data) {
          return {
            content: [
              {
                type: 'text',
                text: `Error creating session: ${newSession.error}`,
              },
            ],
            isError: true,
          };
        }
        sessionId = (newSession.data as any).sessionId;
      }

      const result = await steelClient.navigate(
        sessionId!,
        params.url,
        params.waitUntil
      );

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Navigation successful',
                sessionId,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error navigating: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Screenshot
  server.tool(
    screenshotTool.name,
    screenshotTool.description,
    screenshotTool.inputSchema.shape,
    async (params: z.infer<typeof screenshotTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for screenshot',
            },
          ],
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
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Screenshot captured successfully',
                sessionId,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error capturing screenshot: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Click
  server.tool(
    clickTool.name,
    clickTool.description,
    clickTool.inputSchema.shape,
    async (params: z.infer<typeof clickTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for click',
            },
          ],
          isError: true,
        };
      }

      const result = await steelClient.click(sessionId, params.selector, {
        button: params.button,
        clickCount: params.clickCount,
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Click successful',
                sessionId,
                selector: params.selector,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error clicking: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Type
  server.tool(
    typeTool.name,
    typeTool.description,
    typeTool.inputSchema.shape,
    async (params: z.infer<typeof typeTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for type',
            },
          ],
          isError: true,
        };
      }

      const result = await steelClient.type(sessionId, params.selector, params.text, {
        delay: params.delay,
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Type successful',
                sessionId,
                selector: params.selector,
                text: params.text,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error typing: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Evaluate
  server.tool(
    evaluateTool.name,
    evaluateTool.description,
    evaluateTool.inputSchema.shape,
    async (params: z.infer<typeof evaluateTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for evaluate',
            },
          ],
          isError: true,
        };
      }

      const result = await steelClient.evaluate(sessionId, params.script);

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Evaluate successful',
                sessionId,
                script: params.script.substring(0, 100) + (params.script.length > 100 ? '...' : ''),
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error evaluating: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Extract
  server.tool(
    extractTool.name,
    extractTool.description,
    extractTool.inputSchema.shape,
    async (params: z.infer<typeof extractTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for extract',
            },
          ],
          isError: true,
        };
      }

      const result = await steelClient.extract(sessionId, params.selector, {
        attribute: params.attribute,
        all: params.all,
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Extract successful',
                sessionId,
                selector: params.selector,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error extracting: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Đăng ký tool: Wait
  server.tool(
    waitTool.name,
    waitTool.description,
    waitTool.inputSchema.shape,
    async (params: z.infer<typeof waitTool.inputSchema>) => {
      const sessionId = params.sessionId;
      if (!sessionId) {
        return {
          content: [
            {
              type: 'text',
              text: 'Session ID is required for wait',
            },
          ],
          isError: true,
        };
      }

      const result = await steelClient.wait(sessionId, params.timeout, {
        selector: params.selector,
        state: params.state,
      });

      if (result.success) {
        return {
          content: [
            {
              type: 'text',
              text: JSON.stringify({
                message: 'Wait successful',
                sessionId,
                timeout: params.timeout,
                data: result.data,
              }, null, 2),
            },
          ],
        };
      } else {
        return {
          content: [
            {
              type: 'text',
              text: `Error waiting: ${result.error}`,
            },
          ],
          isError: true,
        };
      }
    }
  );

  // Kết nối server với Stdio transport
  const transport = new StdioServerTransport();
  await server.connect(transport);

  console.error('Steel MCP Server running on stdio');
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
