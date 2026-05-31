FROM node:22-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install 

COPY . .

EXPOSE 4000

CMD ["npm","run","dev"]

# # FOR PRODUCTION BUILD STAGE

# FROM node:22-alpine AS production

# WORKDIR /app

# COPY package*.json ./

# RUN npm install --omit=dev

# COPY --from=builder /dist/app ./dist 

# CMD ["npm","run","start"]