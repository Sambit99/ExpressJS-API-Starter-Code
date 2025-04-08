# ExpressJS API Starter Code

A TypeScript-based starter template for building robust and scalable ExpressJS API applications. This project includes pre-configured scripts, folder structure, linting, formatting, and support for both local and Dockerized development environments.

## 📁 Project Structure

```typescript
│── .husky/               	# Contains Git hooks managed by Husky to automate tasks during Git workflows.
│   │── commit-msg          # Git hook that runs on commit message; usually used to enforce commit message conventions (e.g., via commitlint).
│   └── pre-commit          # Git hook that runs before a commit is finalized; commonly used to trigger linting, tests, or formatting checks.
│── docker/ 				        # Main directory for Docker-related configurations and environments.
│  └── development/
│   │── Dockerfile 			# Dockerfile for setting up the development environment (e.g., installing dependencies, setting up node).
│   │── .dockerignore 		# Specifies files and folders to ignore when building the Docker image, similar to .gitignore.
│   │── .env 				# Environment-specific variables used during container build/run for development.
│   └── docker-compose.yml 	# Defines and configures multi-container Docker applications (e.g., app + DB) for local development.
├── logs/              # Stores Application Logs inside a file when NODE_ENV = 'development'
├── nginx/             # Contains NGINX configuration files (e.g., reverse proxy, SSL setup)
├── public/            # Stores Static Files like svg, jpg, jpegs, etc.
├── script/            # Stores Custom Shell Scripts (e.g., setup, deploy, cleanup)
├── src/
│   │── config/
│   │   └── config.ts  # All the configuration like Environment values reside inside the file.
│   │── constant/
│   │   │── application.ts        # All Application configuration reside inside the file.
│   │   │── responseMessage.ts    # Generic Responses like (Success, Failure, Unauthenticated, Unauthorized, Bad Request) reside inside the file.
│   │   └── statusCodes.ts        # All HTTP Status Codes reside inside the file.
│   │── controller/               # Handles incoming HTTP requests and sends appropriate responses.
│   │── middleware/               # Custom Middleware functions for request handling (e.g., authentication, logging).
│   │── model/                    # Contains database models/schema definitions (e.g., using Mongoose, Prisma, etc.).
│   │── router/                   # Defines application routes and maps them to controller methods.
│   │── service/                  # All the Databases, Rate-Limiting, and External Services configurations reside inside this folder.
│   │── types/
│   │   └── types.ts              # All Custom Types defined inside this file.
│   │── util/
│   │   │── ApiError.ts          # Custom API Error Handler Configuration.
│   │   │── ApiResponse.ts       # Custom API Response Wrapper.
│   │   │── ErrorObject.ts       # Standardized structure for Error Objects.
│   │   │── Logger.ts            # Custom Logger Configuration using a logging library (e.g., Winston, Pino).
│   │   └── Quicker.ts           # Utility to check Application/System Health (like readiness/liveness probes).
│   │── view/                    # Static HTML Pages or Server-Side Rendered Views (if any).
│   │── app.ts                   # Initializes express app, middleware, and routing.
│   │── server.ts                # Starts the HTTP server and listens on a port.
├── test/                        # Contains Unit and Integration Tests for different parts of the application.
├── .env.example                 # Environment variables example
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
