FROM node:6.14.2
EXPOSE 2700
COPY index.js .
CMD node .
