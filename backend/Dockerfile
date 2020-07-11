FROM node:lts-alpine

WORKDIR /app

COPY ./src /app/src
COPY package.json /app
COPY package-lock.json /app
COPY tsconfig.json /app

RUN npm install
RUN npm run build
RUN rm -rf src

ENTRYPOINT ["npm", "run", "start:production"]
