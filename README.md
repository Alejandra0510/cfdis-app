# CfdisApp

Proyecto Repositorio de CFDIs.
This project was generated using [Angular CLI](https://github.com/angular/angular-cli) version 22.1.4.

## Development server

To start a local development server, run:

```bash
ng serve
```

Once the server is running, open your browser and navigate to `http://localhost:4200/`. The application will automatically reload whenever you modify any of the source files.

## Code scaffolding

Angular CLI includes powerful code scaffolding tools. To generate a new component, run:

```bash
ng generate component component-name
```

For a complete list of available schematics (such as `components`, `directives`, or `pipes`), run:

```bash
ng generate --help
```

## Building

To build the project run:

```bash
ng build
```

This will compile your project and store the build artifacts in the `dist/` directory. By default, the production build optimizes your application for performance and speed.

## Running unit tests

To execute unit tests with the [Vitest](https://vitest.dev/) test runner, use the following command:

```bash
ng test
```

## Running end-to-end tests

For end-to-end (e2e) testing, run:

```bash
ng e2e
```

Angular CLI does not come with an end-to-end testing framework by default. You can choose one that suits your needs.

## Additional Resources

For more information on using the Angular CLI, including detailed command references, visit the [Angular CLI Overview and Command Reference](https://angular.dev/tools/cli) page.


## Docker
La aplicación se puede ejecutar en un contenedor de Docker. La imagen se construye en dos etapas (multi-stage build): la primera compila la aplicación con Node y la segunda sirve los archivos compilados con Nginx.

### Requisitos
- [Docker Desktop](https://www.docker.com/products/docker-desktop/) instalado y en ejecución.
- Acceso de red desde el equipo (y desde el contenedor) a la IP `http://10.9.9.15:8081`.

### Archivos necesarios
- Dockerfile, define la compilación de Angular (`node:24-alpine`) y servidor web (`nginx:alpine`).
- nginx.conf, configuración de Nginx, soporte de rutas de angular y proxi de la API.
- .dockerignore, excluye de la imagen archivos que no son necesarios.

### Construir la imagen
Desde la carpeta raíz del proyecto:
```bash
docker build -t cfdis-app .
```
Si se requiere ignorar el caché por cambios: 
```bash
docker build --no-cache -t cfdis-app .
```

### Ejecutar el contenedor
```bash
docker run -d -p 8081:80 --name cfdis-app cfdis-app
```
La aplicación queda disponible en `http://localhost:8081`. Si el puerto 8081 está ocupado, se puede usar otro.

### Comandos útiles
```bash
# Ver contenedores en ejecución
docker ps

# Ver los logs del contenedor
docker logs -f cfdis-app

# Detener y eliminar el contenedor
docker stop cfdis-app
docker rm cfdis-app

# Detener y eliminar en un solo paso
docker rm -f cfdis-app
```

### Actualizar la aplicación

Si el  contenedor ya esta iniciado no se actualiza al reconstruir la imagen. 
Después de cambiar el código:

```bash
docker build -t cfdis-app .
docker rm -f cfdis-app
docker run -d -p 8081:80 --name cfdis-app cfdis-app
```


