FROM keymetrics/pm2:8-alpine

LABEL maintainer="gi.grousset@gmail.com"

WORKDIR /app

COPY *.js ./
COPY package*.json ./
COPY pm2.json .

ENV NPM_CONFIG_LOGLEVEL warn

RUN npm install --production

CMD [ "pm2-runtime", "start", "pm2.json" ]
