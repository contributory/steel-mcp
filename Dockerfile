FROM node:22-alpine

# Set working directory
WORKDIR /app
USER root

# Copy package files
COPY package*.json ./
COPY tsconfig.json ./
COPY src/ ./src/

# Install dependencies and build
RUN npm ci

# Build TypeScript
RUN npm run build

# Install only production dependencies and clean cache
RUN npm ci --only=production && npm cache clean --force

USER node

# Set environment variables
ENV NODE_ENV=production
ENV MCP_MODE=stdio

# Run the server
CMD ["node", "dist/index.js"]
