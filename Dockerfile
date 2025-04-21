FROM node:latest
WORKDIR /app
ADD . .
RUN npm install
CMD node index.js
EXPOSE 3000