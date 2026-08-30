import { z } from 'zod';
/**
 * Tool: Navigate - Điều hướng trình duyệt đến một URL
 */
export declare const navigateTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        url: z.ZodString;
        waitUntil: z.ZodDefault<z.ZodOptional<z.ZodEnum<["load", "domcontentloaded", "networkidle", "commit"]>>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        waitUntil: "load" | "domcontentloaded" | "networkidle" | "commit";
        sessionId?: string | undefined;
    }, {
        url: string;
        waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Screenshot - Chụp ảnh màn hình
 */
export declare const screenshotTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        fullPage: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        format: z.ZodDefault<z.ZodOptional<z.ZodEnum<["png", "jpeg"]>>>;
        quality: z.ZodOptional<z.ZodNumber>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fullPage: boolean;
        format: "png" | "jpeg";
        quality?: number | undefined;
        sessionId?: string | undefined;
    }, {
        fullPage?: boolean | undefined;
        format?: "png" | "jpeg" | undefined;
        quality?: number | undefined;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Click - Nhấp vào phần tử
 */
export declare const clickTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        button: z.ZodDefault<z.ZodOptional<z.ZodEnum<["left", "right", "middle"]>>>;
        clickCount: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        button: "left" | "right" | "middle";
        clickCount: number;
        sessionId?: string | undefined;
    }, {
        selector: string;
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Type - Nhập văn bản vào trường
 */
export declare const typeTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        text: z.ZodString;
        delay: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        text: string;
        delay: number;
        sessionId?: string | undefined;
    }, {
        selector: string;
        text: string;
        delay?: number | undefined;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Evaluate - Thực thi JavaScript
 */
export declare const evaluateTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        script: z.ZodString;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        script: string;
        sessionId?: string | undefined;
    }, {
        script: string;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Extract - Trích xuất dữ liệu từ trang
 */
export declare const extractTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        attribute: z.ZodDefault<z.ZodOptional<z.ZodEnum<["textContent", "innerHTML", "href", "src", "value", "data"]>>>;
        all: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        attribute: "data" | "value" | "textContent" | "innerHTML" | "href" | "src";
        all: boolean;
        sessionId?: string | undefined;
    }, {
        selector: string;
        attribute?: "data" | "value" | "textContent" | "innerHTML" | "href" | "src" | undefined;
        all?: boolean | undefined;
        sessionId?: string | undefined;
    }>;
};
/**
 * Tool: Wait - Chờ đợi
 */
export declare const waitTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        timeout: z.ZodNumber;
        selector: z.ZodOptional<z.ZodString>;
        state: z.ZodDefault<z.ZodOptional<z.ZodEnum<["visible", "hidden", "attached", "detached"]>>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timeout: number;
        state: "visible" | "hidden" | "attached" | "detached";
        selector?: string | undefined;
        sessionId?: string | undefined;
    }, {
        timeout: number;
        selector?: string | undefined;
        state?: "visible" | "hidden" | "attached" | "detached" | undefined;
        sessionId?: string | undefined;
    }>;
};
export declare const allTools: ({
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        url: z.ZodString;
        waitUntil: z.ZodDefault<z.ZodOptional<z.ZodEnum<["load", "domcontentloaded", "networkidle", "commit"]>>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        url: string;
        waitUntil: "load" | "domcontentloaded" | "networkidle" | "commit";
        sessionId?: string | undefined;
    }, {
        url: string;
        waitUntil?: "load" | "domcontentloaded" | "networkidle" | "commit" | undefined;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        fullPage: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        format: z.ZodDefault<z.ZodOptional<z.ZodEnum<["png", "jpeg"]>>>;
        quality: z.ZodOptional<z.ZodNumber>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        fullPage: boolean;
        format: "png" | "jpeg";
        quality?: number | undefined;
        sessionId?: string | undefined;
    }, {
        fullPage?: boolean | undefined;
        format?: "png" | "jpeg" | undefined;
        quality?: number | undefined;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        button: z.ZodDefault<z.ZodOptional<z.ZodEnum<["left", "right", "middle"]>>>;
        clickCount: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        button: "left" | "right" | "middle";
        clickCount: number;
        sessionId?: string | undefined;
    }, {
        selector: string;
        button?: "left" | "right" | "middle" | undefined;
        clickCount?: number | undefined;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        text: z.ZodString;
        delay: z.ZodDefault<z.ZodOptional<z.ZodNumber>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        text: string;
        delay: number;
        sessionId?: string | undefined;
    }, {
        selector: string;
        text: string;
        delay?: number | undefined;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        script: z.ZodString;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        script: string;
        sessionId?: string | undefined;
    }, {
        script: string;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        selector: z.ZodString;
        attribute: z.ZodDefault<z.ZodOptional<z.ZodEnum<["textContent", "innerHTML", "href", "src", "value", "data"]>>>;
        all: z.ZodDefault<z.ZodOptional<z.ZodBoolean>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        selector: string;
        attribute: "data" | "value" | "textContent" | "innerHTML" | "href" | "src";
        all: boolean;
        sessionId?: string | undefined;
    }, {
        selector: string;
        attribute?: "data" | "value" | "textContent" | "innerHTML" | "href" | "src" | undefined;
        all?: boolean | undefined;
        sessionId?: string | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        timeout: z.ZodNumber;
        selector: z.ZodOptional<z.ZodString>;
        state: z.ZodDefault<z.ZodOptional<z.ZodEnum<["visible", "hidden", "attached", "detached"]>>>;
        sessionId: z.ZodOptional<z.ZodString>;
    }, "strip", z.ZodTypeAny, {
        timeout: number;
        state: "visible" | "hidden" | "attached" | "detached";
        selector?: string | undefined;
        sessionId?: string | undefined;
    }, {
        timeout: number;
        selector?: string | undefined;
        state?: "visible" | "hidden" | "attached" | "detached" | undefined;
        sessionId?: string | undefined;
    }>;
})[];
//# sourceMappingURL=browser.d.ts.map