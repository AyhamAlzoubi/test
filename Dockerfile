FROM node:10-alpine


WORKDIR /src

COPY . .

EXPOSE 8080
CMD ["node", "index.js"]
