FROM node:alpine

WORKDIR /app

COPY . .

RUN npm install
RUN yarn build

EXPOSE 4000

CMD ["yarn", "start"]