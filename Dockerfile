FROM ubuntu:latest

WORKDIR /ftb-one

COPY . .

CMD /start.sh
