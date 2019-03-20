FROM node:6.14.2
EXPOSE 2700
COPY index.js .
COPY package.json .
COPY package-lock.json .

RUN npm install

CMD node .
