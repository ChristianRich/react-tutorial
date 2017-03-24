FROM node:6.9.4

#RUN apt-get update -qq && apt-get install -y build-essential libpq-dev libkrb5-dev && rm -rf /var/lib/apt/lists/*

RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app

RUN rm /etc/localtime && \
    ln -s /usr/share/zoneinfo/Australia/Sydney/etc/localtime

COPY package.json /usr/src/app/
RUN npm install

COPY . /usr/src/app

EXPOSE 3000
CMD [ "npm", "start" ]

#
# https://medium.com/@sunnykay/docker-development-workflow-node-express-mongo-4bb3b1f7eb1e#.67c0px9st
# https://iainhunter.wordpress.com/2016/01/12/avoiding-pitfalls-running-mongo-3-2-in-docker-on-osx/
