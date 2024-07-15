## Crear la imagen de Docker
```
docker build -t graphql-first-app:latest -t graphql-first-app:1.0.0 .
```

## Ejecutar la imagen de Docker
```
docker run -p 4000:4000 -d graphql-first-app
```
## Publicar la imagen en Docker Hub

1. Cambiar el tag de la imagen a publicar:
```
docker image tag graphql-first-app benjamincv/graphql-first-app-bcv
```
2. Publicar la imagen en nuestro repositorio de docker hub:
```
docker push benjamincv/graphql-first-app-bcv
```

