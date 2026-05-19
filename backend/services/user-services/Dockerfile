FROM node:20-alpine AS builder

WORKDIR /app

COPY package*.json  ./

COPY . .

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

EXPOSE 3006

CMD ["node", "dist/index.js"]

