# Use Node 12.13.1 LTS
FROM node:12.13.1

# Copy source code
COPY . /app

# Change working dir
WORKDIR /app

# Install dependencies
RUN npm install

# Expose API port to the outside
EXPOSE 4000

# Launch application
CMD ["npm", "start"]