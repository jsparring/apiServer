FROM node:slim

WORKDIR /home/apiServer

COPY ./package.json ./

RUN npm install --only=prod

COPY . .

CMD ["npm", "start"]
