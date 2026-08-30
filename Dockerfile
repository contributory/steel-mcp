FROM node:22-alpine

# Set working directory
WORKDIR /app

# Copy package files
COPY package*.json ./
COPY src/ ./src/

# Install dependencies
RUN npm ci && npm cache clean --force

USER node

# Set environment variables
ENV NODE_ENV=production
ENV MCP_MODE=stdio

# Run the server with Node.js
CMD ["node", "src/index.js"]
