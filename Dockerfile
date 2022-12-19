FROM node:16.3.0-alpine

WORKDIR /app

ENV NODE_ENV development

COPY package.json .

RUN npm install --development

COPY . .

EXPOSE 3000

CMD ["npx", "@remix-run/dev", "dev"]