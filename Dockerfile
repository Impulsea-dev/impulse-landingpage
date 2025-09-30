# Etapa de compilacion
FROM node:18-alpine AS build
WORKDIR /app

# Copiamos los manifiestos primero para aprovechar la cache
COPY package*.json ./
RUN npm ci

# Copiamos el resto del codigo y construimos
COPY . .
RUN npm run build

# Etapa de runtime: nginx sirviendo los archivos estaticos
FROM nginx:1.25-alpine AS runtime

# Configuracion personalizada para SPA
COPY docker/nginx.conf /etc/nginx/conf.d/default.conf

# Copiamos los artefactos generados en la etapa build
COPY --from=build /app/dist /usr/share/nginx/html

EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]