# Build stage
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/

# Install dependencies
RUN npm ci

# Build TypeScript
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files for production
COPY package*.json ./

# Install only production dependencies
RUN npm ci --only=production

# Copy built files from builder stage
COPY --from=builder /app/dist ./dist

# Expose HTTP port (if using HTTP transport)
EXPOSE 3000

# Set environment variables
ENV NODE_ENV=production
ENV MCP_MODE=stdio

# Run the server
CMD ["node", "dist/index.js"]
