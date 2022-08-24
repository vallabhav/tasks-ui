# Build container
FROM node:16 as builder

WORKDIR /app
COPY . /app

RUN rm -rf /app/node_modules
RUN rm -rf /app/dist
RUN rm -rf package-lock.json

RUN ["chmod", "+x", "/app/vite.config.js"]

Run npm install -g npm@8.18.0

RUN npm install

RUN npm run build


# Runtime container
FROM nginx

COPY --from=builder /app/dist/ /usr/share/nginx/html