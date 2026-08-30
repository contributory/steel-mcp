# Steel MCP Server

MCP (Model Context Protocol) Server cho Steel Browser API, hỗ trợ giao thức truyền tải Streamable HTTP.

## Cấu trúc dự án

```
steel-mcp-server/
├── src/
│   ├── index.ts           # Entry point chính
│   ├── server.ts          # MCP Server với Stdio transport
│   ├── http-server.ts     # MCP Server với Streamable HTTP transport
│   ├── client.ts          # Steel API Client
│   ├── config/
│   │   └── index.ts       # Cấu hình server
│   ├── tools/
│   │   ├── index.ts       # Export tất cả tools
│   │   ├── browser.ts     # Tools thao tác trình duyệt
│   │   └── session.ts     # Tools quản lý session
│   └── types/
│       └── index.ts       # Định nghĩa kiểu dữ liệu
├── package.json
└── tsconfig.json
```

## Cài đặt

```bash
cd steel-mcp-server
npm install
```

## Cấu hình

Tạo file `.env` hoặc đặt các biến môi trường sau:

```bash
STEEL_API_KEY=your_api_key_here
STEEL_API_URL=https://api.steel.dev  # Optional, default là https://api.steel.dev
PORT=3000  # Optional, chỉ dùng cho HTTP mode
HOST=localhost  # Optional, chỉ dùng cho HTTP mode
```

## Chạy server

### Mode Stdio (mặc định - cho MCP clients qua stdin/stdout)

```bash
npm run dev
# hoặc build rồi chạy
npm run build
npm start
```

### Mode HTTP (Streamable HTTP transport)

```bash
MCP_MODE=http npm run dev
# hoặc
npm run build
MCP_MODE=http npm start
```

Server sẽ chạy tại `http://localhost:3000` (có thể thay đổi qua biến môi trường).

## Các công cụ (Tools) hỗ trợ

### Quản lý Session

- **steel_new_session**: Tạo session trình duyệt mới
- **steel_close_session**: Đóng session
- **steel_get_session_info**: Lấy thông tin session

### Thao tác Trình duyệt

- **steel_navigate**: Điều hướng đến URL
- **steel_screenshot**: Chụp ảnh màn hình
- **steel_click**: Nhấp vào phần tử
- **steel_type**: Nhập văn bản vào trường
- **steel_evaluate**: Thực thi JavaScript
- **steel_extract**: Trích xuất dữ liệu từ trang
- **steel_wait**: Chờ đợi (thời gian hoặc phần tử)

## Ví dụ sử dụng

### Kết nối từ MCP Client

```typescript
import { Client } from '@modelcontextprotocol/sdk/client/index.js';
import { StreamableHTTPClientTransport } from '@modelcontextprotocol/sdk/client/streamableHttp.js';

const client = new Client({
  name: 'my-client',
  version: '1.0.0',
});

const transport = new StreamableHTTPClientTransport(
  new URL('http://localhost:3000/mcp')
);

await client.connect(transport);

// Sử dụng tools
const result = await client.callTool({
  name: 'steel_navigate',
  arguments: {
    url: 'https://example.com',
  },
});
```

### Gọi API trực tiếp (HTTP mode)

```bash
# Tạo session mới
curl -X POST http://localhost:3000/mcp \
  -H "Content-Type: application/json" \
  -d '{
    "jsonrpc": "2.0",
    "id": 1,
    "method": "tools/call",
    "params": {
      "name": "steel_new_session",
      "arguments": {}
    }
  }'
```

## Lưu ý

- Đảm bảo bạn có API key hợp lệ từ Steel
- Session sẽ tự động tạo nếu không cung cấp `sessionId` khi gọi các tools thao tác trình duyệt
- HTTP mode hỗ trợ nhiều kết nối đồng thời với session management

## License

MIT
