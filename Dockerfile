# Use an official Node.js image as the base image
FROM node:14

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Expose the port your application will run on
EXPOSE 8545

# Start the Hardhat node and admin-frontend when the container runs
CMD ["npx", "hardhat", "node", "&&", "cd", "admin-frontend", "&&", "npm", "start"]
