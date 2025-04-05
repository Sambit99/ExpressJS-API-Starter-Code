# ExpressJS API Starter Code

A TypeScript-based starter template for building robust and scalable ExpressJS API applications. This project includes pre-configured scripts, folder structure, linting, formatting, and support for both local and Dockerized development environments.

## 📁 Project Structure

```
- .husky
- docker
  - development
    - Dockerfile
    - .dockerignore
    - .env
    - docker-compose.yml
- logs
- nginx
- public
- script
- src
  - config
  - constant
  - controller
  - middleware
  - model
  - router
  - service
  - types
  - util
  - view
  - app.ts
  - server.ts
- test
- .env.example
- .prettierrc
- commitlint.config.js
- eslint.config.mjs
- nodemon.json
- package-lock.json
- package.json
- tsconfig.json
```

## 🚀 Getting Started

### 🔧 Prerequisites

- Node.js (v18+ recommended)
- npm (v9+)
- Docker & Docker Compose (optional, for containerized setup)

### 🔨 Local Development Setup

**Install dependencies**

```bash
npm install
```

**Setup environment variables**

Create a `.env.development` file in the root directory and copy the content from `.env.example`:

```bash
cp .env.example .env.development
```

**Start the development server**

```bash
npm run start:dev
```

## 🐳 Dockerized Setup

### 1. Move Docker development files to root

Copy the contents of `/docker/development` to the project root:

```bash
cp -r docker/development/* ./
```

### 2. Rename the environment file

Rename the copied `.env` file to `.env.development`

### 3. Build and run using Docker

You can use either the Dockerfile or Docker Compose.

**Using Dockerfile:**

```bash
docker build -t express-api .
docker run -p 3000:3000 --env-file .env.development express-api
```

**Using Docker Compose:**

```bash
docker-compose --env-file .env.development up --build
```

## 📜 Available Scripts

| Script                 | Description                          |
| ---------------------- | ------------------------------------ |
| `npm run start:dev`    | Start server in development mode     |
| `npm run build`        | Compile TypeScript to JavaScript     |
| `npm run lint`         | Run ESLint                           |
| `npm run lint:fix`     | Fix ESLint issues                    |
| `npm run format:check` | Check code formatting using Prettier |
| `npm run format:fix`   | Auto-format code using Prettier      |

## ✍️ Author

**Sambit Kumar Sahoo**

---

Let me know if you'd like to include usage examples, Postman collection, or CI/CD steps too.

Would you like me to add:

- ✅ Usage examples
- ✅ Postman collection
- ✅ CI/CD setup instructions
