# ExpressJS API Starter Code

A TypeScript-based starter template for building robust and scalable ExpressJS API applications. This project includes pre-configured scripts, folder structure, linting, formatting, and support for both local and Dockerized development environments.

## 📁 Project Structure

```typescript
│── .husky/                      # Contains Git hooks managed by Husky to automate tasks during Git workflows.
│   │── commit-msg
│   └── pre-commit
│── docker/                      # Main directory for Docker-related configurations and environments.
│  └── development/
│   │── Dockerfile
│   │── .dockerignore
│   │── .env
│   └── docker-compose.yml
├── logs/                        # Stores Application Logs inside a file when NODE_ENV = 'development'
├── nginx/                       # Contains NGINX configuration files (e.g., reverse proxy, SSL setup)
├── public/                      # Stores Static Files like svg, jpg, jpegs, etc.
├── script/                      # Stores Custom Shell Scripts (e.g., setup, deploy, cleanup)
├── src/                         # Main source directory containing all app-related code and logic.
│   │── config/                  # Centralized configuration for environment variables, server settings, etc.
│   │   └── config.ts            # Loads and exports environment-based configuration values.
│ 	│
│   │── constant/                # Stores shared constant values used across the app.
│   │   │── application.ts       # Application-wide constants (e.g., app name, default limits).
│   │   │── responseMessage.ts   # Generic response messages like success, error, unauthorized, etc.
│   │   └── statusCodes.ts       # Centralized HTTP status code definitions.
│	│
│   │── controller/              # Handles incoming HTTP requests and sends appropriate responses.
│   │── middleware/              # Custom Middleware functions for request handling (e.g., authentication, logging).
│   │── model/                   # Contains database models/schema definitions (e.g., using Mongoose, Prisma, etc.).
│   │── router/                  # Defines application routes and maps them to controller methods.
│   │── service/                 # All the Databases, Rate-Limiting, and External Services configurations reside inside this folder.
│	│
│   │── types/                   # Contains TypeScript type definitions and custom interfaces.
│   │   └── types.ts             # Central file for app-specific TypeScript types and interfaces.
│	│
│   │── util/                    # Shared utility/helper functions used throughout the application.
│   │   │── ApiError.ts          # Custom class/utility to handle API-related errors.
│   │   │── ApiResponse.ts       # Custom class/utility to standardize API responses.
│   │   │── ErrorObject.ts       # Structure and format for internal error objects.
│   │   │── Logger.ts            # Logger configuration and helpers (e.g., using Winston, Pino).
│   │   └── Quicker.ts           # Utility for checking application/system health status (e.g., liveness/readiness).
│	│
│   │── view/                    # Static HTML Pages or Server-Side Rendered Views (if any).
│   │── app.ts                   # Initializes express app, middleware, and routing.
│   │── server.ts                # Starts the HTTP server and listens on a port.
├── test/                        # Contains Unit and Integration Tests for different parts of the application.
├── .env.example                 # Example file showing the required environment variables for the project.
├── .prettierrc                  # Prettier configuration
├── commitlint.config.js         # Commit lint rules
├── eslint.config.mjs            # ESLint configuration
├── nodemon.json                 # Nodemon config
├── package-lock.json
├── package.json
└── tsconfig.json                # TypeScript configuration file

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

## 🐳 Docker Setup

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
