FROM node:16-alpine

WORKDIR /user/src/adminfrontend

COPY package* ./

RUN npm install 

COPY . ./
EXPOSE 3000


CMD ["npm", "start"]


