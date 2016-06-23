FROM kallikrein/node:5.5.0

MAINTAINER Gilles Grousset "gi.grousset@gmail.com"

RUN npm i -g pm2 npm-check-updates

RUN mkdir -p /app
COPY . /app
WORKDIR /app
RUN npm install

EXPOSE 1389

CMD ["pm2", "start", "app.js", "--no-daemon"]
