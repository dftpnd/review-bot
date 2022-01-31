FROM node:16
RUN mkdir -p /usr/src/app
RUN npm run build
ADD . /usr/src/app/
ENTRYPOINT ["npm", "start"]