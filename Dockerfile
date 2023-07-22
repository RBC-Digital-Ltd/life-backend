FROM node:20-alpine3.18 AS build

WORKDIR /code

COPY package.json package-lock.json ./
RUN npm ci

COPY . .

RUN npm run build

FROM node:20-alpine3.18 AS runtime

WORKDIR /code

COPY --from=build ./code/dist ./dist

ENV NODE_ENV=production
COPY package.json package-lock.json ./
RUN npm ci

EXPOSE 4000

CMD ["node", "dist/index.js"]
