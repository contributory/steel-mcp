/**
 * Steel MCP Server - Entry Point
 *
 * Điểm vào chính cho ứng dụng, lựa chọn giữa Stdio hoặc HTTP transport
 */
import { spawn } from 'child_process';
import { fileURLToPath } from 'url';
import { dirname, join } from 'path';
const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);
// Lấy mode từ environment variable hoặc argument
const mode = process.env.MCP_MODE || process.argv[2] || 'stdio';
console.error(`Starting Steel MCP Server in ${mode} mode...`);
if (mode === 'http') {
    // Chạy HTTP server với Streamable HTTP transport
    const httpServerPath = join(__dirname, 'http-server.js');
    const child = spawn('node', [httpServerPath], {
        stdio: 'inherit',
        env: { ...process.env },
    });
    child.on('error', (error) => {
        console.error('Failed to start HTTP server:', error);
        process.exit(1);
    });
    child.on('exit', (code) => {
        console.error(`HTTP server exited with code ${code}`);
        process.exit(code || 0);
    });
}
else {
    // Chạy Stdio server (mặc định)
    const stdioServerPath = join(__dirname, 'server.js');
    const child = spawn('node', [stdioServerPath], {
        stdio: 'inherit',
        env: { ...process.env },
    });
    child.on('error', (error) => {
        console.error('Failed to start Stdio server:', error);
        process.exit(1);
    });
    child.on('exit', (code) => {
        console.error(`Stdio server exited with code ${code}`);
        process.exit(code || 0);
    });
}
//# sourceMappingURL=index.js.map