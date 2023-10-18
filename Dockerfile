FROM ubuntu:latest
LABEL authors="Nico"

ENTRYPOINT ["top", "-b"]
