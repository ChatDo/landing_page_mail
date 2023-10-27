# Use an official Node.js runtime as the base image
FROM node:14

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json to the working directory
COPY package*.json ./

# Install application dependencies
RUN npm install

RUN npm install -g serve

# Copy the rest of the application source code
COPY . .

# Expose the port your Vue.js app will run on (usually 80)
EXPOSE 8080

# Define the command to run your Vue.js app
CMD [ "npm", "start" ]
