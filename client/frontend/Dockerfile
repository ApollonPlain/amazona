FROM node:lts-slim

RUN mkdir -p /usr/src/app/client

WORKDIR /usr/src/app/client

COPY package.json ./
# COPY package-lock.json ./
COPY . ./

EXPOSE 3000

CMD [ "npm", "start" ]
