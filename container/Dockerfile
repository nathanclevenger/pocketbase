FROM alpine:latest

ARG PB_VERSION=0.12.3

RUN apk add --no-cache unzip bash fuse sqlite ca-certificates curl

# download and unzip PocketBase
# ADD https://github.com/nathanclevenger/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
ADD https://github.com/nathanclevenger/pocketbase/releases/download/${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

EXPOSE 8080

# start PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]