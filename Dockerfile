# Use an official Node.js runtime as a parent image
FROM node:18-alpine

# Set the working directory inside the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install dependencies (including Next.js)
RUN npm install

# Copy the rest of the application code
COPY . .

# Build the Next.js app for production
RUN npm run build

# Expose the port your app will run on
EXPOSE 3000

# Run the Next.js app in production mode
CMD ["npm", "run", "start"]
