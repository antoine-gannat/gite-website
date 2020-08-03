FROM node:12-alpine

WORKDIR /app/

# Install serve
RUN npm install -g serve

# Copy the package.json and package-lock.json
COPY ./package*.json ./

# Install the dependencies for prod environment
RUN npm install --production

# Copy the rest of the files
COPY . .

RUN npm run build

# Expose HTTP and HTTPS port
EXPOSE 80
EXPOSE 443

# serve the build folder
CMD [ "serve", "--listen", "80", "/app/build", "--ssl-cert", "/ssl-keys/${URL}/cert.pem", "--ssl-key", "/ssl-keys/${URL}/privkey.pem"]