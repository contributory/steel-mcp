import { z } from 'zod';
/**
 * Tool: New Session - Tạo session mới
 */
export declare const newSessionTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        userAgent: z.ZodOptional<z.ZodString>;
        viewport: z.ZodOptional<z.ZodObject<{
            width: z.ZodDefault<z.ZodNumber>;
            height: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width?: number | undefined;
            height?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        userAgent?: string | undefined;
        viewport?: {
            width: number;
            height: number;
        } | undefined;
    }, {
        userAgent?: string | undefined;
        viewport?: {
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
    }>;
};
/**
 * Tool: Close Session - Đóng session
 */
export declare const closeSessionTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        sessionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sessionId: string;
    }, {
        sessionId: string;
    }>;
};
/**
 * Tool: Get Session Info - Lấy thông tin session
 */
export declare const getSessionInfoTool: {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        sessionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sessionId: string;
    }, {
        sessionId: string;
    }>;
};
export declare const sessionTools: ({
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        userAgent: z.ZodOptional<z.ZodString>;
        viewport: z.ZodOptional<z.ZodObject<{
            width: z.ZodDefault<z.ZodNumber>;
            height: z.ZodDefault<z.ZodNumber>;
        }, "strip", z.ZodTypeAny, {
            width: number;
            height: number;
        }, {
            width?: number | undefined;
            height?: number | undefined;
        }>>;
    }, "strip", z.ZodTypeAny, {
        userAgent?: string | undefined;
        viewport?: {
            width: number;
            height: number;
        } | undefined;
    }, {
        userAgent?: string | undefined;
        viewport?: {
            width?: number | undefined;
            height?: number | undefined;
        } | undefined;
    }>;
} | {
    name: string;
    description: string;
    inputSchema: z.ZodObject<{
        sessionId: z.ZodString;
    }, "strip", z.ZodTypeAny, {
        sessionId: string;
    }, {
        sessionId: string;
    }>;
})[];
//# sourceMappingURL=session.d.ts.map