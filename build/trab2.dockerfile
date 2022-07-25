FROM node:16

# RUN npm install --global yarn
RUN mkdir /usr/app
COPY ./trabalho2-ban2 /usr/app
WORKDIR /usr/app
RUN yarn
RUN yarn build
COPY ./trabalho2-ban2/.env /usr/app/production/.env
RUN cp ./.env production/
RUN mkdir ./production/public
RUN cp -R ./public/* ./production/public
RUN mkdir ./production/src/views
RUN cp -R ./src/views/* ./production/src/views

WORKDIR /usr/app/production
EXPOSE 3000

ENTRYPOINT [ "node", "app.js" ]