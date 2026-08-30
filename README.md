# Steel MCP Server

MCP (Model Context Protocol) server for Steel Browser API. This server provides tools for web scraping and browser automation using Steel's cloud browser infrastructure.

## Features

- **Scrape**: Extract content from URLs without managing browser sessions
- **Create Session**: Launch cloud browser sessions with proxies, CAPTCHA solving, and stealth mode
- **Release Session**: Clean up browser sessions to avoid charges
- **Get Session**: Retrieve session details
- **Navigate**: Navigate to URLs within a session
- **Execute Script**: Run JavaScript in the browser
- **Screenshot**: Capture screenshots of pages
- **Get Content**: Extract page content in various formats (HTML, markdown, text)

## Installation

```bash
npm install
```

## Configuration

Set your Steel API key as an environment variable:

```bash
export STEEL_API_KEY=your_api_key_here
```

## Usage

### Running the Server

The server runs over stdio transport, which is the standard way MCP hosts connect:

```bash
npm start
```

Or directly:

```bash
node src/index.js
```

### Connecting from VS Code

Create `.vscode/mcp.json` in your project:

```json
{
  "servers": {
    "steel": {
      "type": "stdio",
      "command": "node",
      "args": ["src/index.js"],
      "env": {
        "STEEL_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

### Connecting from Claude Code

```bash
claude mcp add steel -- node src/index.js
```

Make sure `STEEL_API_KEY` is set in your environment.

### Connecting from Cursor

Create `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "steel": {
      "command": "node",
      "args": ["src/index.js"],
      "env": {
        "STEEL_API_KEY": "your_api_key_here"
      }
    }
  }
}
```

## Available Tools

### 1. scrape

Scrape content from a URL without creating a browser session.

**Parameters:**
- `url` (required): The URL to scrape
- `waitForSelector` (optional): CSS selector to wait for
- `timeout` (optional): Timeout in milliseconds
- `removeSelector` (optional): CSS selector to remove before scraping
- `onlyMainContent` (optional): Only extract main content
- `includeLinks` (optional): Include extracted links

### 2. create-session

Create a new browser session for automation.

**Parameters:**
- `sessionId` (optional): Custom UUID for the session
- `useProxy` (optional): Use residential proxies
- `solveCaptcha` (optional): Enable CAPTCHA solving
- `recordVideo` (optional): Record session video
- `timeout` (optional): Session timeout in seconds

### 3. release-session

Release/end a browser session.

**Parameters:**
- `sessionId` (required): The session ID to release

### 4. get-session

Get details about an existing session.

**Parameters:**
- `sessionId` (required): The session ID to retrieve

### 5. navigate

Navigate to a URL in an existing session.

**Parameters:**
- `sessionId` (required): The session ID
- `url` (required): The URL to navigate to
- `waitForSelector` (optional): CSS selector to wait for
- `timeout` (optional): Navigation timeout in ms
- `takeScreenshot` (optional): Take screenshot after navigation

### 6. execute-script

Execute JavaScript in a browser session.

**Parameters:**
- `sessionId` (required): The session ID
- `script` (required): JavaScript code to execute
- `awaitPromise` (optional): Wait for promise resolution

### 7. screenshot

Take a screenshot of the current page.

**Parameters:**
- `sessionId` (required): The session ID
- `fullPage` (optional): Capture full scrollable page
- `selector` (optional): CSS selector of element to screenshot

### 8. get-content

Get page content from a session.

**Parameters:**
- `sessionId` (required): The session ID
- `format` (optional): 'html', 'markdown', or 'text'

## Example Workflow

1. Create a session: `create-session({ useProxy: true, solveCaptcha: true })`
2. Navigate: `navigate({ sessionId: "...", url: "https://example.com" })`
3. Execute script: `execute-script({ sessionId: "...", script: "document.title" })`
4. Take screenshot: `screenshot({ sessionId: "..." })`
5. Release session: `release-session({ sessionId: "..." })`

## Links

- [Steel Documentation](https://docs.steel.dev/)
- [Steel API Reference](https://steel.apidocumentation.com/api-reference)
- [MCP TypeScript SDK](https://ts.sdk.modelcontextprotocol.io/)

## License

MIT
