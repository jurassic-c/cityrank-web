FROM node:latest

RUN npm install -g grunt-cli karma bower
ADD docker-entrypoint.sh /entrypoint.sh
RUN chmod +x /entrypoint.sh

VOLUME /app
WORKDIR /app
ENTRYPOINT /entrypoint.sh