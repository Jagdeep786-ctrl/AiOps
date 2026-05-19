# Product Service Dockerfile
FROM node:20-alpine AS builder

WORKDIR /app

# Copy package files
COPY package*.json ./
RUN npm install

# Copy source code
COPY . .

# Build TypeScript
RUN npm run build

# Production stage
FROM node:20-alpine

WORKDIR /app

# Copy package files and install production dependencies only
COPY package*.json ./
RUN npm install --production && npm cache clean --force

# Copy built application
COPY --from=builder /app/dist ./dist

# Create non-root user
RUN addgroup -g 1001 -S nodejs
RUN adduser -S nodejs -u 1001

USER nodejs

EXPOSE 3003

CMD ["node", "dist/index.js"]


# docker run -d `
# >>   --name product-service-container `
# >>   --network boutique-net `
# >>   -p 3003:3003 `
# >>   -e PORT=3003 `
# >>   -e DB_HOST=postgres-container `
# >>   -e DB_PORT=5432 `
# >>   -e DB_USER=postgres `
# >>   -e DB_PASSWORD=postgres `
# >>   -e DB_NAME=products_db `
# >>   jagdeep144/product-service:latest