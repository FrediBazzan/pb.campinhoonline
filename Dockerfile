FROM alpine:latest

ARG PB_VERSION=0.19.0

RUN apk add --no-cache \
    unzip \
    ca-certificates \
    # Necessário apenas se você quiser usar scp para copiar posteriormente seu pb_data localmente
    openssh

# Baixar e descompactar o PocketBase
ADD https://github.com/pocketbase/pocketbase/releases/download/v${PB_VERSION}/pocketbase_${PB_VERSION}_linux_amd64.zip /tmp/pb.zip
RUN unzip /tmp/pb.zip -d /pb/

# Descomente para copiar o diretório pb_migrations local para o contêiner
# COPY ./pb_migrations /pb/pb_migrations

# Descomente para copiar o diretório pb_hooks local para o contêiner
# COPY ./pb_hooks /pb/pb_hooks

EXPOSE 8080

# Iniciar o PocketBase
CMD ["/pb/pocketbase", "serve", "--http=0.0.0.0:8080"]
