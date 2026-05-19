# Auth Service Dockerfile
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

EXPOSE 3001

CMD ["node", "dist/index.js"]




#   docker logs gateway-service-container



# docker run -d `
#   --name gateway-service-container `
#   --network boutique-net `
#   -p 3001:3001 `
#   -e AUTH_SERVICE_URL=http://auth-container:3002 `
#   -e PRODUCTS_SERVICE_URL=http://products-container:3003 `
#   -e ORDERS_SERVICE_URL=http://order-service-container:3004 `
#   -e USERS_SERVICE_URL=http://user-service-container:3006 `
#   jagdeep144/gateway-service:latest





#docker exec -it postgres-container psql -U postgres -c "CREATE DATABASE orders_db;"
#docker restart order-service-container

#iwr http://localhost:3005/health
#iwr http://localhost:3006/api/users  
 



#the below 2 commands pass from api gateway to check is these service working
 #iwr http://localhost:3001/api/products/health -UseBasicParsing
 #  iwr http://localhost:3001/api/users/health -UseBasicParsing                                                                    


# to inspect network
#docker network inspect boutique-net