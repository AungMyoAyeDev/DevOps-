FROM node:22-alpine AS builder

WORKDIR /app

COPY client/package*.json ./

RUN npm install

COPY client .

RUN npm run build

FROM nginx:alpine

COPY nginx/nginx.conf /etc/nginx/nginx.conf

COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80