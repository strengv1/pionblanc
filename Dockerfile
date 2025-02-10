# Use the official Node.js image as the base image
FROM node:18-alpine

# Set working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json (or yarn.lock) to the container
COPY package*.json ./

# Install the project dependencies inside the container
RUN npm install --legacy-peer-deps

# Copy the rest of the application code to the container
COPY . .

# Expose port 3000 for the app (Next.js default port)
EXPOSE 3000

# Command to start the Next.js application (production mode by default)
CMD ["npm", "run", "start"]
