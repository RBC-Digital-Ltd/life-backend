FROM node:20-alpine3.18

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm install

COPY src/ src/

EXPOSE 4000

CMD ["npx", "ts-node", "src/index.ts"]
