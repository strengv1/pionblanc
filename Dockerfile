# Stage 1: Build the Next.js application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Serve with Nginx
FROM nginx:alpine

# Copy the built Next.js app from the previous stage
COPY --from=build /app/.next /usr/share/nginx/html

# Copy static assets (optional, if you have a public folder)
COPY --from=build /app/public /usr/share/nginx/html/public

# Copy the custom Nginx configuration
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
