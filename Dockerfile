FROM node:19-alpine3.16

WORKDIR /app

ENV NODE_ENV development

COPY package.json .

RUN npm install

COPY . .

EXPOSE 3000

CMD ["npm", "run", "dev"]
