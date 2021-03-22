FROM node:14.16.0-alpine3.13
WORKDIR '/app/'
COPY package.json .
RUN yarn 
RUN yarn upgrade
COPY . .

CMD ["yarn", "develop"]