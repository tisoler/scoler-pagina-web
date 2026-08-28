# Dockerfile para gestion-cobranza-landing-page (React/Vite)

FROM node:20-alpine AS builder

WORKDIR /app

# Copiar archivos de dependencias
COPY package.json pnpm-lock.yaml pnpm-workspace.yaml ./

# Habilitar Corepack (viene con Node) y usar la versión fijada en package.json
RUN corepack enable && corepack prepare pnpm@10.28.2 --activate

# Instalar dependencias
RUN pnpm install --frozen-lockfile

# Copiar código fuente
COPY . .

# Variables de entorno para el build (se pasan como build args)
ARG VITE_CONTACT_API_URL=https://cobros.astre.net.ar/api
ENV VITE_CONTACT_API_URL=$VITE_CONTACT_API_URL

# Construir la aplicación
RUN pnpm run build

# Imagen de producción con Apache
FROM httpd:alpine

# Copiar configuración de Apache para permitir .htaccess (por consistencia con UI)
RUN sed -i \
    -e 's/^#\(LoadModule rewrite_module modules\/mod_rewrite.so\)/\1/' \
    -e 's/AllowOverride None/AllowOverride All/g' \
    /usr/local/apache2/conf/httpd.conf

# Copiar la salida estática generada por Vike
COPY --from=builder /app/dist/client/. /usr/local/apache2/htdocs/

# Exponer puerto (Apache escucha en 80 por defecto)
EXPOSE 80

# Iniciar Apache
CMD ["httpd", "-D", "FOREGROUND"]
