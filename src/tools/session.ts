import { z } from 'zod';

/**
 * Tool: New Session - Tạo session mới
 */
export const newSessionTool = {
  name: 'steel_new_session',
  description: 'Tạo một session trình duyệt Steel mới',
  inputSchema: z.object({
    userAgent: z.string().optional().describe('User agent tùy chỉnh'),
    viewport: z.object({
      width: z.number().min(1).default(1920),
      height: z.number().min(1).default(1080),
    }).optional().describe('Kích thước viewport'),
  }),
};

/**
 * Tool: Close Session - Đóng session
 */
export const closeSessionTool = {
  name: 'steel_close_session',
  description: 'Đóng một session trình duyệt Steel',
  inputSchema: z.object({
    sessionId: z.string().describe('ID session cần đóng'),
  }),
};

/**
 * Tool: Get Session Info - Lấy thông tin session
 */
export const getSessionInfoTool = {
  name: 'steel_get_session_info',
  description: 'Lấy thông tin về một session trình duyệt',
  inputSchema: z.object({
    sessionId: z.string().describe('ID session cần lấy thông tin'),
  }),
};

// Export tất cả tools quản lý session
export const sessionTools = [
  newSessionTool,
  closeSessionTool,
  getSessionInfoTool,
];
