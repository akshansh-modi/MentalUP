FROM node:22-alpine3.19
WORKDIR /MentalUp
WORKDIR /app

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD [ "npm", "run","dev" ]