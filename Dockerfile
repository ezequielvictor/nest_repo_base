FROM node:16.15-alpine

WORKDIR /usr/src/app

COPY package.json ./
COPY tsconfig.build.json ./
COPY tsconfig.json ./

RUN npm install

EXPOSE 3000

CMD ["npm", "start"]