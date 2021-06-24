FROM node:14.17-alpine
WORKDIR /usr/app
COPY  package*.json .
RUN npm ci
COPY . .
EXPOSE ${PORT}
RUN npm start