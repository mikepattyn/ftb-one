FROM ubuntu:latest

WORKDIR /ftb-one

COPY . .

EXPOSE 25565

ENTRYPOINT ["/ftb-one/start.sh"]
