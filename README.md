# ACCESAPP

Este proyecto es una API para la gestión de lugares, recomendaciones, categorías, usuarios, rating y comentarios, con autenticación utilizando AWS Cognito. La API está construida con NestJS y Express, utilizando PostgreSQL como base de datos y TypeORM como ORM. La documentación de la API se genera automáticamente con Swagger.

## Características

- **Lugares**: CRUD para la gestión de lugares.
- **Recomendaciones**: CRUD para la gestión de recomendaciones.
- **Categorías**: CRUD para la gestión de categorías de lugares.
- **Autenticación**: Integración con AWS Cognito para la autenticación de usuarios.
- **Imágenes de Lugares**: Gestión de imágenes asociadas a los lugares.
- **Comentarios**: CRUD para la gestión de comentarios en los lugares.
- **Accesibilidad**: Implementación de características para mejorar la accesibilidad.
- **Usuarios**: CRUD para la gestión de usuarios.

## Tecnologías Utilizadas

- **NestJS**: Framework para la construcción de aplicaciones Node.js eficientes, confiables y escalables.
- **Express**: Framework web para Node.js.
- **PostgreSQL**: Sistema de gestión de bases de datos relacional.
- **TypeORM**: ORM para TypeScript y JavaScript.
- **Swagger**: Herramienta para la generación de documentación de APIs.
- **Docker**: Plataforma para desarrollar, enviar y ejecutar aplicaciones en contenedores.

## Requisitos

- Docker
- Docker Compose
- Node.js (v14 o superior)
- npm (v6 o superior)

## Instalación

1. Clona este repositorio:
    ```sh
    git clone https://github.com/Queirel/AccessibleTraveler.git
    cd tu-repositorio
    ```

2. Crea un archivo `.env` en la raíz del proyecto con la configuración necesaria. Puedes basarte en el archivo `.env.template`.

3. Construye y levanta los contenedores Docker:
    ```sh
    docker-compose up --build
    ```

4. La aplicación estará disponible en `http://localhost:3000`.

## Uso

### Endpoints

La documentación completa de la API está disponible en `http://localhost:3000/api`.

### Autenticación

Para utilizar los endpoints protegidos, primero debes autenticarte y obtener un token JWT a través de AWS Cognito.

## Estructura del Proyecto
```
src/
├── auth/ # Módulo de autenticación
├── categories/ # Módulo de categorías
├── comments/ # Módulo de comentarios
├── images/ # Módulo de imágenes de lugares
├── places/ # Módulo de lugares
├── recommended/ # Módulo de recomendaciones
├── users/ # Módulo de usuarios
├── accessibility/ # Módulo de accesibilidad
├── main.ts # Punto de entrada de la aplicación
└── app.module.ts # Módulo principal de la aplicación
```
## Docker

### Dockerfile
```
El `Dockerfile` define la imagen de Docker para la aplicación.

```dockerfile
# Usa la imagen base de Node.js
FROM node:14-alpine

# Establece el directorio de trabajo en el contenedor
WORKDIR /app

# Copia los archivos package.json y package-lock.json
COPY package*.json ./

# Instala las dependencias
RUN npm install

# Copia el resto de los archivos de la aplicación
COPY . .

# Compila el código TypeScript a JavaScript
RUN npm run build

# Expone el puerto 3000
EXPOSE 3000

# Comando para ejecutar la aplicación
CMD ["npm", "run", "start:prod"]
```
### docker-compose.yml
El docker-compose.yml define los servicios de Docker para la aplicación.

```
version: '3.8'

services:
  db:
    image: postgres
    restart: always
    environment:
      POSTGRES_DB: ${POSTGRES_DB}
      POSTGRES_USER: ${POSTGRES_USER}
      POSTGRES_PASSWORD: ${POSTGRES_PASSWORD}
    ports:
      - '5432:5432'
    volumes:
      - db-data:/var/lib/postgresql/data

  app:
    build: .
    ports:
      - '3000:3000'
    environment:
      DATABASE_URL: postgres://postgres:password@db:5432/mydatabase
    depends_on:
      - db

volumes:
  db-data:
```


Contribuir
Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

Haz un fork del repositorio.
Crea una nueva rama (git checkout -b feature/nueva-funcionalidad).
Realiza tus cambios y haz commit (git commit -am 'Agrega nueva funcionalidad').
Sube tus cambios a GitHub (git push origin feature/nueva-funcionalidad).
Abre un Pull Request.

Contacto
Para cualquier consulta o sugerencia, puedes contactarme en [federicoqueirel@hotmail.com].
