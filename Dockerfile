FROM node:16-alpine

# Create app directory
WORKDIR /usr/src/app

# Install app dependencies
COPY package*.json ./

RUN npm install

# Bundle app source
COPY . .

# Expose the port the app will run on
EXPOSE 8080

# Command to run the app
CMD ["npm", "start"]
