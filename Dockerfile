FROM node:10

WORKDIR /usr/src/app

COPY package*.json ./

COPY . .

RUN npm i -g pm2

RUN npm i

RUN npm run build 

EXPOSE 80

CMD [ "pm2", "start" ,"build/server.js" ]