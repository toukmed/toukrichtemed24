# ---- Stage 1: Build Tailwind CSS ----
FROM node:20-alpine AS build

WORKDIR /build

COPY package.json package-lock.json tailwind.config.js ./
COPY src/ ./src/

RUN npm ci --ignore-scripts
RUN npx tailwindcss -i ./src/css/tailwind-input.css -o ./src/css/tailwind.min.css --minify

# ---- Stage 2: Serve with nginx ----
FROM nginx:alpine

LABEL org.opencontainers.image.title="ToukrichteMed Landing Page" \
      org.opencontainers.image.description="Landing page for Mohamed Toukrichte" \
      org.opencontainers.image.version="1.0.0"

COPY --from=build /build/src/ /usr/share/nginx/html/
COPY nginx/app.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
