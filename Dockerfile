FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/

# Install dependencies (tsx được dùng để chạy TypeScript trực tiếp, không cần build)
RUN npm ci && npm cache clean --force

USER node

# Set environment variables
ENV NODE_ENV=production
ENV MCP_MODE=stdio

# Chạy server trực tiếp bằng tsx (không cần bước build)
CMD ["node_modules/.bin/tsx", "src/index.ts"]
