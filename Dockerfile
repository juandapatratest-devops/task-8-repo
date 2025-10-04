# Gunakan base image Node.js
FROM node:18

# Set working directory
WORKDIR /usr/src/app

# Copy package.json dan install dependencies
COPY package*.json ./
RUN npm install

# Copy semua file project
COPY . .

# Expose port aplikasi
EXPOSE 3000

# Command default
CMD ["npm", "start"]
