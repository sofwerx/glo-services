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

COPY . /glo-services

# for local dev version
#RUN mkdir -p /glo-services
#VOLUME /glo-services

WORKDIR /glo-services

CMD bash run.sh
