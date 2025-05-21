FROM node:20

WORKDIR /app

COPY app/package*.json .

RUN npm install

COPY app/ ./

RUN chown -R node:node /app

USER node

CMD ["npm", "run", "dev"]
