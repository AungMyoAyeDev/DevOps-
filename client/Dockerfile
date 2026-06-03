# Stage 1: Build the React application
FROM node:20-alpine AS builder
WORKDIR /app
COPY package*.json ./
RUN npm ci
COPY . .
# Outputs static files to /app/build (or /app/dist if using Vite)
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine
# Remove default Nginx configuration
RUN rm /etc/nginx/conf.d/default.conf
# Inject our custom proxy configuration
COPY nginx.conf /etc/nginx/conf.d/
# Copy the static assets from the builder stage
COPY --from=builder /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]