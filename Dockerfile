# syntax=docker/dockerfile:1

FROM node:16.14.0
ENV NODE_ENV=development

WORKDIR /sdc

COPY ["package.json", "package-lock.json*", "./"]

RUN npm install

COPY . .

CMD ["node", "index.js"]