FROM centos:7

RUN (curl -sL https://rpm.nodesource.com/setup_12.x | bash -) \
  && yum clean all -y \
  && yum update -y \
  && yum install -y nodejs \
  && yum autoremove -y \
  && yum clean all -y \
  && npm install npm --global

RUN useradd -ms /bin/bash flowi-ui

WORKDIR /home/flowi-ui

COPY package.json .
RUN chown -R flowi-ui:flowi-ui /home/flowi-ui
USER flowi-ui
RUN npm install

COPY . .
RUN npm run build

EXPOSE 8080

CMD node server.js
