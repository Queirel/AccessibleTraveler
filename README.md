# ACCESAPP

This project is an API for managing places, recommendations, categories, users, ratings and comments, with authentication using AWS Cognito. The API is built with NestJS and Express, using PostgreSQL as the database and TypeORM as the ORM. API documentation is automatically generated with Swagger.

## Features

- **Places**: CRUD for place management.
- **Recommended**: CRUD for recommendation management.
- **Categories**: CRUD for place category management.
- **Autentication**: Integration with AWS Cognito for user authentication.
- **Image-places**: Management of images associated with places.
- **Comments**: CRUD for managing comments in places.
- **Accessibilities**: Implementation of features to improve accessibility.
- **Users**: CRUD for user management.

## Used technologies

- **NestJS**: Framework for building efficient, reliable and scalable Node.js applications.
- **Express**: Web framework for Node.js.
- **PostgreSQL**: Relational database management system.
- **TypeORM**: ORM for TypeScript and JavaScript.
- **Swagger**: Tool for generating API documentation.
- **Docker**: Platform for developing, shipping and running containerized applications.

## Requirements

- Docker
- Docker Compose
- Node.js (v14 or higher)
- npm (v6 or higher)

## Instalación

1. Clone this repository:
    ```sh
    git clone https://github.com/Queirel/AccessibleTraveler.git
    cd your-repository
    ```

2. Create a `.env` file in the project root with the necessary configuration. You can rely on the `.env.template` file.

3. Build and launch Docker containers:
    ```sh
    docker-compose up --build
    ```

4. The application will be available in `http://localhost:3000`.

## Use

### Endpoints

Complete API documentation is available at `http://localhost:3000/api`.

### Authentication

To use secured endpoints, you must first authenticate and obtain a JWT token through AWS Cognito.

## Project Structure
```
src/
├── auth/ # Authentication module
├── categories/ # Categories module
├── comments/ # comments module
├── images/ # images module
├── places/ # places module
├── recommended/ # recommended module
├── users/ # users module
├── accessibility/ # accessibility module
├── main.ts # Application entry point
└── app.module.ts # Main application module
```
## Docker

### Dockerfile
```
The `Dockerfile` defines the Docker image for the application.

```dockerfile
# Use the Node.js base image
FROM node:14-alpine

# Set the working directory in the container
WORKDIR /app

# Copy the package.json and package-lock.json files
COPY package*.json ./

# Install the dependencies
RUN npm install

# Copy the rest of the application files
COPY . .

# Compile TypeScript code to JavaScript
RUN npm run build

# Expose port 3000
EXPOSE 3000

# Command to run the application
CMD ["npm", "run", "start:prod"]
```
### docker-compose.yml
The docker-compose.yml defines the Docker services for the application.

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


### Contribute
If you wish to contribute to this project, please follow the following steps:

Fork the repository.
Create a new branch (git checkout -b feature/new-feature).
Make your changes and commit (git commit -am 'Add new functionality').
Upload your changes to GitHub (git push origin feature/new-functionality).
Open a Pull Request.

### Contact
For any questions or suggestions, you can contact me at [federicoqueirel@hotmail.com].
