FROM node:20-alpine3.18
WORKDIR /code
COPY . .
EXPOSE 4000
RUN npm install
CMD ["npm", "run", "dev"]
