# Step 1: Build Stage
FROM node:14.15.0-alpine3.12 AS build

# Set working directory
WORKDIR /usr/src/app

# Copy package.json and package-lock.json
COPY package*.json ./

# Install dependencies
RUN npm ci

# Copy the rest of the application code
COPY . .

# Set environment variable for production
ENV NODE_ENV=production

# Build the application
RUN npm run build

# Step 2: Production Stage
FROM node:14.15.0-alpine3.12 AS production

# Set working directory
WORKDIR /usr/src/app

# Copy only the necessary files from the build stage
COPY --from=build /usr/src/app/package*.json ./
COPY --from=build /usr/src/app/.next ./
COPY --from=build /usr/src/app/public ./public

# Install only production dependencies
RUN npm install --only=production

# Expose the port the app runs on
EXPOSE 3000

# Command to run the application
CMD ["npm", "start"]
