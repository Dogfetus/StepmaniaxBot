# Use Node.js official image
FROM node:18

# Set the working directory in the container
WORKDIR /app

# Copy package.json and package-lock.json first
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Run the bot
CMD ["node", "stepbot.js"]

