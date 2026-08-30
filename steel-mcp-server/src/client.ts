import { SteelConfig, ActionResult, SessionInfo } from './types/index.js';

/**
 * Client để giao tiếp với Steel API
 */
export class SteelClient {
  private config: SteelConfig;
  private sessions: Map<string, SessionInfo>;

  constructor(config: SteelConfig) {
    this.config = config;
    this.sessions = new Map();
  }

  /**
   * Tạo session mới
   */
  async createSession(options?: {
    userAgent?: string;
    viewport?: { width: number; height: number };
  }): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({
          userAgent: options?.userAgent,
          viewport: options?.viewport,
        }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      const sessionId = data.sessionId || data.id;

      // Lưu thông tin session
      const sessionInfo: SessionInfo = {
        sessionId,
        createdAt: new Date(),
        lastActivityAt: new Date(),
        status: 'active',
      };
      this.sessions.set(sessionId, sessionInfo);

      return {
        success: true,
        data: { sessionId, ...data },
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
      };
    }
  }

  /**
   * Đóng session
   */
  async closeSession(sessionId: string): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
      });

      if (!response.ok && response.status !== 204) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      // Cập nhật trạng thái session
      const session = this.sessions.get(sessionId);
      if (session) {
        session.status = 'closed';
        session.lastActivityAt = new Date();
        this.sessions.set(sessionId, session);
      }

      return {
        success: true,
        data: { message: 'Session closed successfully' },
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Lấy thông tin session
   */
  async getSessionInfo(sessionId: string): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}`, {
        method: 'GET',
        headers: {
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Điều hướng đến URL
   */
  async navigate(sessionId: string, url: string, waitUntil?: string): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/navigate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ url, waitUntil }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Chụp ảnh màn hình
   */
  async screenshot(
    sessionId: string,
    options?: { fullPage?: boolean; format?: string; quality?: number }
  ): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/screenshot`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify(options),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Nhấp vào phần tử
   */
  async click(
    sessionId: string,
    selector: string,
    options?: { button?: string; clickCount?: number }
  ): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/click`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ selector, ...options }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Nhập văn bản
   */
  async type(
    sessionId: string,
    selector: string,
    text: string,
    options?: { delay?: number }
  ): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/type`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ selector, text, ...options }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Thực thi JavaScript
   */
  async evaluate(sessionId: string, script: string): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/evaluate`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ script }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Trích xuất dữ liệu
   */
  async extract(
    sessionId: string,
    selector: string,
    options?: { attribute?: string; all?: boolean }
  ): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/extract`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ selector, ...options }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Chờ đợi
   */
  async wait(
    sessionId: string,
    timeout: number,
    options?: { selector?: string; state?: string }
  ): Promise<ActionResult> {
    try {
      const response = await fetch(`${this.config.baseUrl}/sessions/${sessionId}/wait`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'Authorization': `Bearer ${this.config.apiKey}`,
        },
        body: JSON.stringify({ timeout, ...options }),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const data = await response.json();
      this.updateSessionActivity(sessionId);

      return {
        success: true,
        data,
        sessionId,
      };
    } catch (error) {
      return {
        success: false,
        error: error instanceof Error ? error.message : 'Unknown error',
        sessionId,
      };
    }
  }

  /**
   * Cập nhật thời gian hoạt động của session
   */
  private updateSessionActivity(sessionId: string): void {
    const session = this.sessions.get(sessionId);
    if (session) {
      session.lastActivityAt = new Date();
      this.sessions.set(sessionId, session);
    }
  }

  /**
   * Lấy danh sách session đang hoạt động
   */
  getActiveSessions(): SessionInfo[] {
    return Array.from(this.sessions.values()).filter(s => s.status === 'active');
  }
}
