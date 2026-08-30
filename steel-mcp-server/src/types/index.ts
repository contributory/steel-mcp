/**
 * Các kiểu dữ liệu chung cho Steel MCP Server
 */

// Các loại hành động có thể thực hiện với Steel Browser
export type ActionType = 
  | 'navigate'
  | 'screenshot'
  | 'click'
  | 'type'
  | 'evaluate'
  | 'extract'
  | 'wait';

// Tham số cơ sở cho mọi yêu cầu
export interface BaseActionParams {
  sessionId?: string;
}

// Tham số cho hành động navigate
export interface NavigateParams extends BaseActionParams {
  url: string;
  waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
}

// Tham số cho hành động screenshot
export interface ScreenshotParams extends BaseActionParams {
  fullPage?: boolean;
  format?: 'png' | 'jpeg';
  quality?: number;
}

// Tham số cho hành động click
export interface ClickParams extends BaseActionParams {
  selector: string;
  button?: 'left' | 'right' | 'middle';
  clickCount?: number;
}

// Tham số cho hành động type
export interface TypeParams extends BaseActionParams {
  selector: string;
  text: string;
  delay?: number;
}

// Tham số cho hành động evaluate (chạy JavaScript)
export interface EvaluateParams extends BaseActionParams {
  script: string;
}

// Tham số cho hành động extract (trích xuất dữ liệu)
export interface ExtractParams extends BaseActionParams {
  selector: string;
  attribute?: string; // 'textContent', 'innerHTML', 'href', 'src', etc.
  all?: boolean; // Lấy tất cả các phần tử khớp hay chỉ phần tử đầu tiên
}

// Tham số cho hành động wait
export interface WaitParams extends BaseActionParams {
  timeout: number;
  selector?: string;
  state?: 'visible' | 'hidden' | 'attached' | 'detached';
}

// Union type cho tất cả các tham số hành động
export type ActionParams = 
  | NavigateParams
  | ScreenshotParams
  | ClickParams
  | TypeParams
  | EvaluateParams
  | ExtractParams
  | WaitParams;

// Kết quả trả về từ một hành động
export interface ActionResult {
  success: boolean;
  data?: unknown;
  error?: string;
  sessionId?: string;
}

// Cấu hình cho Steel API
export interface SteelConfig {
  apiKey: string;
  baseUrl?: string;
  timeout?: number;
}

// Thông tin session
export interface SessionInfo {
  sessionId: string;
  createdAt: Date;
  lastActivityAt: Date;
  status: 'active' | 'closed' | 'error';
}
