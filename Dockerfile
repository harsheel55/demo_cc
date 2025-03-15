FROM node:16 AS builder
WORKDIR /app
COPY package*.json ./
RUN npm install
COPY . .
RUN npm run build

FROM nginx:alpine
COPY --from=builder /app/build /usr/share/nginx/html
EXPOSE 8080
RUN echo 'server { listen 8080; root /usr/share/nginx/html; }' > /etc/nginx/conf.d/default.conf
CMD ["nginx", "-g", "daemon off;"]