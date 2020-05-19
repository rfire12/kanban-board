FROM node:10.20.1

RUN npm install -g wait-on

USER node

RUN mkdir /home/node/app

WORKDIR /home/node/app

COPY --chown=node:node package*.json ./

RUN npm ci

COPY --chown=node:node . .

CMD ["npm", "run", "dev:start"]

