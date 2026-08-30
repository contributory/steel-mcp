/**
 * Các kiểu dữ liệu chung cho Steel MCP Server
 */
export type ActionType = 'navigate' | 'screenshot' | 'click' | 'type' | 'evaluate' | 'extract' | 'wait';
export interface BaseActionParams {
    sessionId?: string;
}
export interface NavigateParams extends BaseActionParams {
    url: string;
    waitUntil?: 'load' | 'domcontentloaded' | 'networkidle' | 'commit';
}
export interface ScreenshotParams extends BaseActionParams {
    fullPage?: boolean;
    format?: 'png' | 'jpeg';
    quality?: number;
}
export interface ClickParams extends BaseActionParams {
    selector: string;
    button?: 'left' | 'right' | 'middle';
    clickCount?: number;
}
export interface TypeParams extends BaseActionParams {
    selector: string;
    text: string;
    delay?: number;
}
export interface EvaluateParams extends BaseActionParams {
    script: string;
}
export interface ExtractParams extends BaseActionParams {
    selector: string;
    attribute?: string;
    all?: boolean;
}
export interface WaitParams extends BaseActionParams {
    timeout: number;
    selector?: string;
    state?: 'visible' | 'hidden' | 'attached' | 'detached';
}
export type ActionParams = NavigateParams | ScreenshotParams | ClickParams | TypeParams | EvaluateParams | ExtractParams | WaitParams;
export interface ActionResult {
    success: boolean;
    data?: unknown;
    error?: string;
    sessionId?: string;
}
export interface SteelConfig {
    apiKey: string;
    baseUrl?: string;
    timeout?: number;
}
export interface SessionInfo {
    sessionId: string;
    createdAt: Date;
    lastActivityAt: Date;
    status: 'active' | 'closed' | 'error';
}
//# sourceMappingURL=index.d.ts.map