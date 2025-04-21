FROM node:18

WORKDIR /usr/src/app

COPY package*.json ./
RUN npm install

COPY . .

# Compile TypeScript
RUN npx tsc

EXPOSE 3001

# Run the compiled JS
CMD ["node", "dist/server.js"]
