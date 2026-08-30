import { SteelConfig, ActionResult, SessionInfo } from './types/index.js';
/**
 * Client để giao tiếp với Steel API
 */
export declare class SteelClient {
    private config;
    private sessions;
    constructor(config: SteelConfig);
    /**
     * Tạo session mới
     */
    createSession(options?: {
        userAgent?: string;
        viewport?: {
            width: number;
            height: number;
        };
    }): Promise<ActionResult>;
    /**
     * Đóng session
     */
    closeSession(sessionId: string): Promise<ActionResult>;
    /**
     * Lấy thông tin session
     */
    getSessionInfo(sessionId: string): Promise<ActionResult>;
    /**
     * Điều hướng đến URL
     */
    navigate(sessionId: string, url: string, waitUntil?: string): Promise<ActionResult>;
    /**
     * Chụp ảnh màn hình
     */
    screenshot(sessionId: string, options?: {
        fullPage?: boolean;
        format?: string;
        quality?: number;
    }): Promise<ActionResult>;
    /**
     * Nhấp vào phần tử
     */
    click(sessionId: string, selector: string, options?: {
        button?: string;
        clickCount?: number;
    }): Promise<ActionResult>;
    /**
     * Nhập văn bản
     */
    type(sessionId: string, selector: string, text: string, options?: {
        delay?: number;
    }): Promise<ActionResult>;
    /**
     * Thực thi JavaScript
     */
    evaluate(sessionId: string, script: string): Promise<ActionResult>;
    /**
     * Trích xuất dữ liệu
     */
    extract(sessionId: string, selector: string, options?: {
        attribute?: string;
        all?: boolean;
    }): Promise<ActionResult>;
    /**
     * Chờ đợi
     */
    wait(sessionId: string, timeout: number, options?: {
        selector?: string;
        state?: string;
    }): Promise<ActionResult>;
    /**
     * Cập nhật thời gian hoạt động của session
     */
    private updateSessionActivity;
    /**
     * Lấy danh sách session đang hoạt động
     */
    getActiveSessions(): SessionInfo[];
}
//# sourceMappingURL=client.d.ts.map