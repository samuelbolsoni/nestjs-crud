FROM node:14.15.4-alpine3.12

RUN apk add --no-cache bash

RUN npm config set strict-ssl false

RUN npm install -g @nestjs/cli

RUN npm install nodemon

USER node

WORKDIR /home/node/app
