# Use the official Cypress Docker image with Node.js
FROM cypress/base:22.11.0

# Set working directory inside the container
WORKDIR /cypress-magento

# Copy package.json and package-lock.json first to leverage Docker cache
COPY package.json package-lock.json /cypress-magento/

# Install all dependencies
RUN npm ci

# Ensure Cypress is installed
RUN npx cypress install

# Copy the entire project into the working directory
COPY . .

# Set default command to run Cypress
CMD ["npx", "cypress", "run"]
