FROM node

WORKDIR /usr/src/app

COPY package*.json ./

RUN npm install -g nodemon sequelize-cli sequelize pg

RUN npm install

COPY . .

EXPOSE 5000

CMD [ "npm", "start" ]