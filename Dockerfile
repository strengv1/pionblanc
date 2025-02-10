# # Use a Node.js image to build the app
# FROM node:18-alpine AS build

# WORKDIR /app

# # Install dependencies
# COPY package.json package-lock.json ./
# RUN npm install --legacy-peer-deps

# # Copy the source code
# COPY . .

# # Build the app for production
# RUN npm run build

# # Use a lightweight image for the runtime
# FROM nginx:alpine

# # Copy the build output to the nginx server
# COPY --from=build /app/.next /usr/share/nginx/html

# # Expose port 80
# EXPOSE 80

# # Run nginx
# CMD ["nginx", "-g", "daemon off;"]

# Use Node.js image for runtime
FROM node:18-alpine

WORKDIR /app

# Copy built app
COPY . .

# Install production dependencies
RUN npm install --production --legacy-peer-deps

# Expose app port
EXPOSE 3000

# Start the Next.js app
CMD ["npm", "start"]