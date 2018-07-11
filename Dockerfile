FROM node:latest

EXPOSE 8080

# install basics
RUN apt-get -q update && apt-get install -y -qq \
  apt-utils \
  git \
  curl \
  ssh \
  sudo \
  nodejs \
  gcc \
  make \
  build-essential \
  unzip \
  && apt-get clean && rm -rf /var/lib/apt/lists/* /tmp/* /var/tmp/*

RUN git clone https://github.com/sofwerx/glo-services.git
WORKDIR /glo-services

CMD npm start
