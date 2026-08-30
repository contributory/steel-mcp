import { z } from 'zod';

/**
 * Tool: Navigate - Điều hướng trình duyệt đến một URL
 */
export const navigateTool = {
  name: 'steel_navigate',
  description: 'Điều hướng trình duyệt Steel đến một URL cụ thể',
  inputSchema: z.object({
    url: z.string().url().describe('URL cần điều hướng đến'),
    waitUntil: z.enum(['load', 'domcontentloaded', 'networkidle', 'commit'])
      .optional()
      .default('networkidle')
      .describe('Sự kiện chờ đợi sau khi điều hướng'),
    sessionId: z.string().optional().describe('ID session (tự động tạo nếu không có)'),
  }),
};

/**
 * Tool: Screenshot - Chụp ảnh màn hình
 */
export const screenshotTool = {
  name: 'steel_screenshot',
  description: 'Chụp ảnh màn hình trang web hiện tại',
  inputSchema: z.object({
    fullPage: z.boolean().optional().default(false).describe('Chụp toàn bộ trang hay chỉ viewport'),
    format: z.enum(['png', 'jpeg']).optional().default('png').describe('Định dạng ảnh'),
    quality: z.number().min(1).max(100).optional().describe('Chất lượng ảnh (chỉ áp dụng cho JPEG)'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

/**
 * Tool: Click - Nhấp vào phần tử
 */
export const clickTool = {
  name: 'steel_click',
  description: 'Nhấp vào một phần tử trên trang web sử dụng CSS selector',
  inputSchema: z.object({
    selector: z.string().describe('CSS selector của phần tử cần nhấp'),
    button: z.enum(['left', 'right', 'middle']).optional().default('left').describe('Nút chuột cần nhấp'),
    clickCount: z.number().min(1).optional().default(1).describe('Số lần nhấp'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

/**
 * Tool: Type - Nhập văn bản vào trường
 */
export const typeTool = {
  name: 'steel_type',
  description: 'Nhập văn bản vào một trường input trên trang web',
  inputSchema: z.object({
    selector: z.string().describe('CSS selector của trường input'),
    text: z.string().describe('Văn bản cần nhập'),
    delay: z.number().min(0).optional().default(0).describe('Độ trễ giữa các ký tự (ms)'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

/**
 * Tool: Evaluate - Thực thi JavaScript
 */
export const evaluateTool = {
  name: 'steel_evaluate',
  description: 'Thực thi mã JavaScript trong ngữ cảnh của trang web',
  inputSchema: z.object({
    script: z.string().describe('Mã JavaScript cần thực thi'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

/**
 * Tool: Extract - Trích xuất dữ liệu từ trang
 */
export const extractTool = {
  name: 'steel_extract',
  description: 'Trích xuất dữ liệu từ các phần tử trên trang web',
  inputSchema: z.object({
    selector: z.string().describe('CSS selector của phần tử cần trích xuất'),
    attribute: z.enum(['textContent', 'innerHTML', 'href', 'src', 'value', 'data'])
      .optional()
      .default('textContent')
      .describe('Thuộc tính cần trích xuất'),
    all: z.boolean().optional().default(false).describe('Lấy tất cả các phần tử khớp hay chỉ phần tử đầu tiên'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

/**
 * Tool: Wait - Chờ đợi
 */
export const waitTool = {
  name: 'steel_wait',
  description: 'Chờ đợi trong một khoảng thời gian hoặc chờ phần tử xuất hiện',
  inputSchema: z.object({
    timeout: z.number().min(1).describe('Thời gian chờ tối đa (ms)'),
    selector: z.string().optional().describe('CSS selector của phần tử cần chờ'),
    state: z.enum(['visible', 'hidden', 'attached', 'detached'])
      .optional()
      .default('visible')
      .describe('Trạng thái cần chờ của phần tử'),
    sessionId: z.string().optional().describe('ID session'),
  }),
};

// Export tất cả tools
export const allTools = [
  navigateTool,
  screenshotTool,
  clickTool,
  typeTool,
  evaluateTool,
  extractTool,
  waitTool,
];
