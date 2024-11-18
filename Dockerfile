# Base image with Node.js
FROM node:20

# Set working directory
WORKDIR /app

# Copy package files and install dependencies
COPY package*.json ./
RUN npm install

# Copy the project files into the container
COPY . .

# Install Playwright and its dependencies
RUN npx playwright install --with-deps

# Expose a port (if running tests requiring local server)
EXPOSE 3000

# Default command to run tests
CMD ["npx", "playwright", "test"]