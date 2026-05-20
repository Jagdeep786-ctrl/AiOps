FROM node:20-alpine

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

RUN npm install -g serve

EXPOSE 3000

CMD ["serve", "-s", "build", "-l", "3000", "--single"]


# docker build -t jagdeep144/frontend-shopping:latest .

# docker run -d -p 3000:3000 --name frontend-container jagdeep144/frontend-shopping:latest 