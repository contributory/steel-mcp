import { McpServer } from '@modelcontextprotocol/server';
import { NodeStreamableHTTPServerTransport } from '@modelcontextprotocol/node';
import { StdioServerTransport } from '@modelcontextprotocol/server/stdio';
import * as z from 'zod/v4';
import { createServer, IncomingMessage, ServerResponse } from 'node:http';

// Steel API configuration
const STEEL_API_BASE = process.env.STEEL_API_BASE || 'https://api.steel.dev';
const STEEL_API_KEY = process.env.STEEL_API_KEY || '';

/**
 * Helper function to make requests to Steel API
 */
async function steelRequest(endpoint: string, options: RequestInit = {}): Promise<any> {
  const url = `${STEEL_API_BASE}${endpoint}`;
  const headers: HeadersInit = {
    'Content-Type': 'application/json',
    ...(STEEL_API_KEY ? { 'Authorization': `Bearer ${STEEL_API_KEY}` } : {}),
    ...options.headers,
  };

  const response = await fetch(url, {
    ...options,
    headers,
  });

  if (!response.ok) {
    const errorText = await response.text();
    throw new Error(`Steel API error (${response.status}): ${errorText}`);
  }

  return response.json();
}

/**
 * Create the MCP Server for Steel API
 */
const server = new McpServer({
  name: 'steel-api-server',
  version: '1.0.0',
});

// Register tools for Steel API operations

/**
 * Tool: Create a new browser session
 * Creates a new cloud browser session with optional configuration
 */
server.registerTool(
  'create_session',
  {
    description: 'Create a new cloud browser session with Steel API. Returns session ID and connection details.',
    inputSchema: z.object({
      profileId: z.string().optional().describe('Optional profile ID for persistent browser state'),
      extensionIds: z.array(z.string()).optional().describe('List of extension IDs to install'),
      timeout: z.number().optional().describe('Session timeout in seconds (default: 300)'),
      region: z.string().optional().describe('Geographic region for the browser (e.g., "us-east", "eu-west")'),
    }),
  },
  async ({ profileId, extensionIds, timeout, region }) => {
    try {
      const body: any = {};
      if (profileId) body.profileId = profileId;
      if (extensionIds?.length) body.extensionIds = extensionIds;
      if (timeout) body.timeout = timeout;
      if (region) body.region = region;

      const result = await steelRequest('/sessions', {
        method: 'POST',
        body: JSON.stringify(body),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Session created successfully!\n\nSession ID: ${result.id}\nWebSocket URL: ${result.wsUrl}\nCDP URL: ${result.cdpUrl}\nStatus: ${result.status}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create session: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Get session details
 * Retrieves information about an existing session
 */
server.registerTool(
  'get_session',
  {
    description: 'Get details about an existing browser session including status, URLs, and metadata.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID to retrieve'),
    }),
  },
  async ({ sessionId }) => {
    try {
      const result = await steelRequest(`/sessions/${sessionId}`);

      return {
        content: [
          {
            type: 'text',
            text: `Session Details:\n\nID: ${result.id}\nStatus: ${result.status}\nCreated: ${result.createdAt}\nWebSocket URL: ${result.wsUrl}\nCDP URL: ${result.cdpUrl}\nProfile ID: ${result.profileId || 'N/A'}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to get session: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: List all sessions
 * Returns a list of all active sessions
 */
server.registerTool(
  'list_sessions',
  {
    description: 'List all active browser sessions with their current status.',
    inputSchema: z.object({
      limit: z.number().optional().describe('Maximum number of sessions to return (default: 10)'),
      status: z.string().optional().describe('Filter by status (e.g., "active", "closed")'),
    }),
  },
  async ({ limit, status }) => {
    try {
      const params = new URLSearchParams();
      if (limit) params.append('limit', limit.toString());
      if (status) params.append('status', status);

      const queryString = params.toString();
      const result = await steelRequest(`/sessions${queryString ? `?${queryString}` : ''}`);

      const sessions = Array.isArray(result) ? result : result.sessions || [];
      const sessionList = sessions.map((s: any) => `- ${s.id}: ${s.status} (created: ${s.createdAt})`).join('\n');

      return {
        content: [
          {
            type: 'text',
            text: `Active Sessions (${sessions.length}):\n\n${sessionList || 'No sessions found'}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to list sessions: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Close a session
 * Terminates an existing browser session
 */
server.registerTool(
  'close_session',
  {
    description: 'Close/terminate an existing browser session.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID to close'),
    }),
  },
  async ({ sessionId }) => {
    try {
      await steelRequest(`/sessions/${sessionId}`, {
        method: 'DELETE',
      });

      return {
        content: [
          {
            type: 'text',
            text: `Session ${sessionId} closed successfully.`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to close session: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Navigate to URL
 * Navigates a browser session to a specific URL
 */
server.registerTool(
  'navigate',
  {
    description: 'Navigate a browser session to a specific URL.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      url: z.string().describe('The URL to navigate to'),
      waitUntil: z.string().optional().describe('Wait condition: "load", "domcontentloaded", "networkidle" (default: "load")'),
    }),
  },
  async ({ sessionId, url, waitUntil = 'load' }) => {
    try {
      const result = await steelRequest(`/sessions/${sessionId}/navigate`, {
        method: 'POST',
        body: JSON.stringify({ url, waitUntil }),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Navigated to ${url}\nFinal URL: ${result.finalUrl || url}\nStatus: ${result.status || 'success'}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to navigate: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Take screenshot
 * Captures a screenshot of the current page
 */
server.registerTool(
  'take_screenshot',
  {
    description: 'Take a screenshot of the current page in a browser session.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      fullPage: z.boolean().optional().describe('Capture full page height (default: false)'),
      format: z.string().optional().describe('Image format: "png" or "jpeg" (default: "png")'),
      quality: z.number().optional().describe('JPEG quality 0-100 (only for jpeg format)'),
    }),
  },
  async ({ sessionId, fullPage = false, format = 'png', quality }) => {
    try {
      const body: any = { fullPage, format };
      if (quality !== undefined) body.quality = quality;

      const result = await steelRequest(`/sessions/${sessionId}/screenshot`, {
        method: 'POST',
        body: JSON.stringify(body),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Screenshot captured!\n\nFormat: ${format}\nFull Page: ${fullPage}\nScreenshot URL: ${result.url}\nBase64 (first 100 chars): ${result.base64?.substring(0, 100)}...`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to take screenshot: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Execute JavaScript
 * Executes JavaScript code in the browser context
 */
server.registerTool(
  'execute_javascript',
  {
    description: 'Execute JavaScript code in the browser context and return the result.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      script: z.string().describe('JavaScript code to execute'),
      awaitPromise: z.boolean().optional().describe('Wait for promise resolution (default: true)'),
    }),
  },
  async ({ sessionId, script, awaitPromise = true }) => {
    try {
      const result = await steelRequest(`/sessions/${sessionId}/execute`, {
        method: 'POST',
        body: JSON.stringify({ script, awaitPromise }),
      });

      return {
        content: [
          {
            type: 'text',
            text: `JavaScript executed successfully!\n\nResult: ${JSON.stringify(result.result, null, 2)}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to execute JavaScript: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Click element
 * Clicks on an element matching the provided selector
 */
server.registerTool(
  'click',
  {
    description: 'Click on an element matching the CSS selector.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      selector: z.string().describe('CSS selector for the element to click'),
      button: z.string().optional().describe('Mouse button: "left", "right", "middle" (default: "left")'),
      clickCount: z.number().optional().describe('Number of clicks (default: 1)'),
    }),
  },
  async ({ sessionId, selector, button = 'left', clickCount = 1 }) => {
    try {
      await steelRequest(`/sessions/${sessionId}/click`, {
        method: 'POST',
        body: JSON.stringify({ selector, button, clickCount }),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Clicked on "${selector}" (${button} button, ${clickCount} click(s))`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to click element: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Type text
 * Types text into an input element
 */
server.registerTool(
  'type',
  {
    description: 'Type text into an input element matching the CSS selector.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      selector: z.string().describe('CSS selector for the input element'),
      text: z.string().describe('Text to type'),
      delay: z.number().optional().describe('Delay between keystrokes in ms (default: 0)'),
    }),
  },
  async ({ sessionId, selector, text, delay = 0 }) => {
    try {
      await steelRequest(`/sessions/${sessionId}/type`, {
        method: 'POST',
        body: JSON.stringify({ selector, text, delay }),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Typed "${text}" into "${selector}"`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to type text: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Get page content
 * Extracts the full HTML content or text from the current page
 */
server.registerTool(
  'get_content',
  {
    description: 'Extract content from the current page (HTML, text, or markdown).',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      contentType: z.string().optional().describe('Content type: "html", "text", "markdown" (default: "text")'),
      selector: z.string().optional().describe('CSS selector to extract content from a specific element'),
    }),
  },
  async ({ sessionId, contentType = 'text', selector }) => {
    try {
      const result = await steelRequest(`/sessions/${sessionId}/content`, {
        method: 'POST',
        body: JSON.stringify({ contentType, selector }),
      });

      const contentPreview = result.content?.substring(0, 500) || '';
      const truncated = result.content?.length > 500 ? '...(truncated)' : '';

      return {
        content: [
          {
            type: 'text',
            text: `Page Content (${contentType}):\n\n${contentPreview}${truncated}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to get content: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Solve CAPTCHA
 * Uses Steel's CAPTCHA solving service
 */
server.registerTool(
  'solve_captcha',
  {
    description: 'Solve a CAPTCHA on the current page using Steel\'s CAPTCHA solving service.',
    inputSchema: z.object({
      sessionId: z.string().describe('The session ID'),
      captchaType: z.string().optional().describe('CAPTCHA type: "turnstile", "recaptcha", "hcaptcha" (auto-detected if not specified)'),
    }),
  },
  async ({ sessionId, captchaType }) => {
    try {
      const body: any = {};
      if (captchaType) body.captchaType = captchaType;

      const result = await steelRequest(`/sessions/${sessionId}/captcha/solve`, {
        method: 'POST',
        body: JSON.stringify(body),
      });

      return {
        content: [
          {
            type: 'text',
            text: `CAPTCHA solved successfully!\n\nType: ${result.type || captchaType || 'auto'}\nTime taken: ${result.solveTimeMs}ms\nSuccess: ${result.success}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to solve CAPTCHA: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Get profiles
 * Lists available browser profiles for persistent sessions
 */
server.registerTool(
  'get_profiles',
  {
    description: 'List available browser profiles for persistent browser state.',
    inputSchema: z.object({
      limit: z.number().optional().describe('Maximum number of profiles to return (default: 10)'),
    }),
  },
  async ({ limit = 10 }) => {
    try {
      const result = await steelRequest(`/profiles?limit=${limit}`);

      const profiles = Array.isArray(result) ? result : result.profiles || [];
      const profileList = profiles.map((p: any) => `- ${p.id}: ${p.name} (created: ${p.createdAt})`).join('\n');

      return {
        content: [
          {
            type: 'text',
            text: `Browser Profiles (${profiles.length}):\n\n${profileList || 'No profiles found'}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to get profiles: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Tool: Create profile
 * Creates a new browser profile for persistent sessions
 */
server.registerTool(
  'create_profile',
  {
    description: 'Create a new browser profile for persistent browser state across sessions.',
    inputSchema: z.object({
      name: z.string().describe('Name for the profile'),
    }),
  },
  async ({ name }) => {
    try {
      const result = await steelRequest('/profiles', {
        method: 'POST',
        body: JSON.stringify({ name }),
      });

      return {
        content: [
          {
            type: 'text',
            text: `Profile created successfully!\n\nID: ${result.id}\nName: ${result.name}\nCreated: ${result.createdAt}`,
          },
        ],
      };
    } catch (error) {
      return {
        content: [
          {
            type: 'text',
            text: `Failed to create profile: ${error instanceof Error ? error.message : String(error)}`,
          },
        ],
        isError: true,
      };
    }
  }
);

/**
 * Main entry point - supports both stdio and Streamable HTTP transports
 */
async function main() {
  const transportType = process.env.TRANSPORT || 'stdio';

  if (transportType === 'http') {
    // Streamable HTTP Transport using Node.js middleware
    const httpPort = parseInt(process.env.HTTP_PORT || '3000', 10);
    
    const transport = new NodeStreamableHTTPServerTransport({
      endpoint: '/mcp',
    });

    await server.connect(transport);

    const httpServer = createServer(async (req: IncomingMessage, res: ServerResponse) => {
      // Handle CORS
      res.setHeader('Access-Control-Allow-Origin', '*');
      res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
      res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

      if (req.method === 'OPTIONS') {
        res.writeHead(204);
        res.end();
        return;
      }

      // Route MCP requests to the transport
      if (req.url === '/mcp' || req.url?.startsWith('/mcp?')) {
        await transport.handleRequest(req, res);
        return;
      }

      // Health check endpoint
      if (req.url === '/health') {
        res.writeHead(200, { 'Content-Type': 'application/json' });
        res.end(JSON.stringify({ status: 'ok', server: 'steel-mcp-server' }));
        return;
      }

      // 404 for other routes
      res.writeHead(404, { 'Content-Type': 'application/json' });
      res.end(JSON.stringify({ error: 'Not found' }));
    });

    httpServer.listen(httpPort, () => {
      console.log(`Steel MCP Server running on http://localhost:${httpPort}/mcp`);
      console.log(`Health check: http://localhost:${httpPort}/health`);
    });
  } else {
    // Stdio Transport (default)
    const transport = new StdioServerTransport();
    await server.connect(transport);
    console.error('Steel MCP Server running on stdio');
  }
}

main().catch((error) => {
  console.error('Fatal error:', error);
  process.exit(1);
});
