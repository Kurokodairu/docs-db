FROM node:6.14.2
EXPOSE 2700
COPY package.json .
COPY package-lock.json .
COPY index.js .
CMD node .
