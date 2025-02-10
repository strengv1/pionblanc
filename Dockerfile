# Use a Node.js image to build the app
FROM node:18-alpine AS build
WORKDIR /app
COPY package.json package-lock.json ./
RUN npm install --legacy-peer-deps
COPY . .
RUN npm run build

# Runtime Nginx
FROM nginx:alpine
COPY --from=build /app/.next /usr/share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]
