# Use the official Node.js image with the version 16 as the base image
FROM node:20-alpine3.17

# Create a directory for the application and set it as the working directory
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install the application dependencies
RUN npm ci

# Copy the application source code to the working directory
COPY . .

# Set the health check for the container with a 5-second interval and 5-second timeout
HEALTHCHECK --interval=5s \
            --timeout=5s \
            CMD curl -f http://127.0.0.1:8000 || exit 1

# Expose port 8000 for the application to be accessible
EXPOSE 8000

# Start the application
CMD ["npm", "start"]
