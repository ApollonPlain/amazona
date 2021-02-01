FROM node:lts-slim

RUN mkdir -p /usr/src/app

WORKDIR /usr/src/app

#
COPY . .
RUN npm install
#

EXPOSE 5000

# You can change this
CMD [ "npm", "start" ]
