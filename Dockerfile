FROM oven/bun:1.1.20-slim

WORKDIR /app
COPY package.json package.json
RUN bun install

COPY . .
#set public domain
ENV PUBLIC_SOURCIFY_SERVER_URL=https://sourcify-server.uludagcrib.site
#set internal ip
ENV INTERNAL_SOURCIFY_SERVER_URL=http://192.168.0.20:5555
RUN bun --bun run build

EXPOSE 3000
ENV ORIGIN="http://0.0.0.0:3000"
ENTRYPOINT ["sh", "./start.sh"]
