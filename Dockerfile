# Stage 1: Build the Next.js application
FROM node:18 AS build

# Set working directory
WORKDIR /app

# Install dependencies
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps

# Copy the rest of the application files
COPY . .

# Build the Next.js app
RUN npm run build

# Stage 2: Set up Nginx and serve the built app
FROM nginx:alpine

# Copy the built app from the build stage
COPY --from=build /app/out /usr/share/nginx/html

# Copy the custom Nginx config file
COPY nginx.conf /etc/nginx/nginx.conf

# Expose port 80
EXPOSE 80

# Start Nginx
CMD ["nginx", "-g", "daemon off;"]
