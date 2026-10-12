##Para desplegar un proyecto de Angular en un contenedor de Docker de forma eficiente, se utiliza una construcción multi-etapa (multi-stage build): la primera compila la aplicación y la segunda la sirve mediante un servidor web ligero como Nginx.
#1. Compilación de la aplicación Angular
FROM node:24-alpine AS build
WORKDIR /app

COPY package*.json ./
RUN npm ci

COPY . .
RUN npm run build --


# Etapa 2: Servir la aplicación con Nginx
FROM nginx:alpine
# Configuración para que las rutas de Angular funcionen al recargar
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Copia los archivos compilados desde la etapa de build
# Nota: Cambia 'nombre-de-tu-app' por el nombre que aparece en tu angular.json o la carpeta de salida en dist/
COPY --from=build /app/dist/cfdis-app/browser /usr/share/nginx/html

EXPOSE 80

CMD ["nginx", "-g", "daemon off;"]
