/**
 * Cấu hình mặc định cho Steel MCP Server
 */
export const DEFAULT_CONFIG = {
    apiKey: process.env.STEEL_API_KEY || '',
    baseUrl: process.env.STEEL_API_URL || 'https://api.steel.dev',
    timeout: 30000, // 30 giây
};
/**
 * Các cổng và cấu hình server
 */
export const SERVER_CONFIG = {
    port: parseInt(process.env.PORT || '3000', 10),
    host: process.env.HOST || 'localhost',
};
/**
 * Cấu hình cho MCP Server
 */
export const MCP_SERVER_CONFIG = {
    name: 'steel-browser-server',
    version: '1.0.0',
};
//# sourceMappingURL=index.js.map