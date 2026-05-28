FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

CMD ["npm","run","build"]

FROM node:22-alpine AS production 

WORKDIR /app 

COPY package*.json ./

RUN npm install --only=production

COPY --from=builder /app/dist ./dist

EXPOSE 4000

CMD ["npm","run","start"]