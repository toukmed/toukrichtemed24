FROM nginx:alpine

LABEL org.opencontainers.image.title="ToukrichteMed Landing Page" \
      org.opencontainers.image.description="Landing page for Mohamed Toukrichte" \
      org.opencontainers.image.version="1.0.0"

COPY src/ /usr/share/nginx/html/
COPY nginx/app.conf /etc/nginx/conf.d/default.conf

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
