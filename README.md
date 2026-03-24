<p align="center">
  <h1 align="center">make-backend</h1>
  <p align="center">
    Scaffold production-ready backend projects in seconds.
    <br />
    Express &middot; Hono &middot; TypeScript &middot; MongoDB &middot; PostgreSQL
  </p>
</p>

<p align="center">
  <a href="https://www.npmjs.com/package/make-backend"><img src="https://img.shields.io/npm/v/make-backend?style=flat-square&color=cb3837" alt="npm version" /></a>
  <a href="https://www.npmjs.com/package/make-backend"><img src="https://img.shields.io/npm/dm/make-backend?style=flat-square" alt="npm downloads" /></a>
  <a href="https://github.com/onimusha-dev/make-backend/blob/main/LICENSE"><img src="https://img.shields.io/npm/l/make-backend?style=flat-square" alt="license" /></a>
  <a href="https://nodejs.org"><img src="https://img.shields.io/node/v/make-backend?style=flat-square&color=339933" alt="node version" /></a>
</p>

---

## Table of Contents

- [Overview](#overview)
- [Features](#features)
- [Quick Start](#quick-start)
- [Usage](#usage)
- [Generated Project Structure](#generated-project-structure)
- [Configuration Options](#configuration-options)
- [What's Included](#whats-included)
- [Optional Packages](#optional-packages)
- [Package Managers](#package-managers)
- [Local Installation](#local-installation-without-npm)
- [Contributing](#contributing)
- [License](#license)

---

## Overview

`make-backend` is an interactive CLI that scaffolds a fully configured backend project with your choice of framework, language, database, and utility packages. It handles dependency installation, Git initialization, and generates a clean, opinionated project structure that follows industry best practices.

No more copy-pasting boilerplate. Just run one command and start building.

---

## Features

| Feature | Details |
| --- | --- |
| **Frameworks** | [Express](https://expressjs.com/) or [Hono](https://hono.dev/) |
| **Languages** | JavaScript (ESM) or [TypeScript](https://www.typescriptlang.org/) |
| **Databases** | [MongoDB](https://www.mongodb.com/) via [Mongoose](https://mongoosejs.com/) or [PostgreSQL](https://www.postgresql.org/) via [node-postgres](https://node-postgres.com/) |
| **Security** | Built-in [Helmet](https://helmetjs.github.io/), [Compression](https://www.npmjs.com/package/compression), and optional [bcrypt](https://www.npmjs.com/package/bcrypt) |
| **Testing** | Built-in [Vitest](https://vitest.dev/) suite with sample health-check tests |
| **Linting** | Modern ESLint (flat config) + Prettier + EditorConfig |
| **Validation** | Optional [Zod](https://zod.dev/) with **automatic environment validation** |
| **Logging** | Built-in [Morgan](https://www.npmjs.com/package/morgan) HTTP logger |
| **Package Managers** | [npm](https://www.npmjs.com/), [pnpm](https://pnpm.io/), [yarn](https://yarnpkg.com/), [bun](https://bun.sh/) |
| **Git** | Automatic `git init` on project creation |

---

## Quick Start

Run directly with `npx` -- no global install required:

```bash
npx make-backend
```

Or install globally:

```bash
# npm
npm install -g make-backend

# pnpm
pnpm add -g make-backend

# yarn
yarn global add make-backend

# bun
bun add -g make-backend
```

Then run:

```bash
make-backend
```

---

## Usage

The CLI guides you through an interactive setup:

```
1. Enter project name        ->  my-api
2. Select framework           ->  Express / Hono
3. Select language            ->  JavaScript / TypeScript
4. Select database            ->  MongoDB / PostgreSQL / None
5. Select additional packages ->  bcrypt, jwt, zod, morgan, helmet, nodemailer
6. Select package manager     ->  npm / pnpm / yarn / bun
```

After configuration, the CLI will:

1. Scaffold the project directory with your selected template
2. Merge database configuration and models (if selected)
3. Install all dependencies using your chosen package manager
4. Initialize a Git repository
5. Print the next steps to get your server running

```bash
cd my-api
npm run dev     # or: pnpm dev / yarn dev / bun dev
```

Your server starts at `http://localhost:3000` by default.

---

## Generated Project Structure

```
my-api/
|-- src/
|   |-- config/           # Database connection setup
|   |-- constants/        # HTTP status codes and shared constants
|   |-- controllers/      # Route handler logic
|   |-- middlewares/       # Error handlers, auth guards, etc.
|   |-- models/           # Database models (Mongoose schemas or PG queries)
|   |-- routes/           # Route definitions
|   |-- utils/            # ApiResponse, ApiError, asyncHandler
|   |-- types/            # TypeScript type declarations (TS only)
|   |-- app.js|ts         # Application setup (middleware, routes, error handling)
|   `-- index.js|ts       # Entry point (env vars, server listen)
|-- .env                  # Environment variables (auto-generated from .env.example)
|-- .env.example          # Environment variable template
|-- .gitignore            # Standard Node.js gitignore
|-- package.json          # Dependencies and scripts
`-- tsconfig.json         # TypeScript configuration (TS only)
```

---

## Configuration Options

### Frameworks

| Framework | Description | Docs |
| --- | --- | --- |
| **Express** | Fast, minimalist web framework for Node.js | [expressjs.com](https://expressjs.com/) |
| **Hono** | Ultrafast, lightweight web framework built for the edge | [hono.dev](https://hono.dev/) |

### Languages

| Language | Notes |
| --- | --- |
| **JavaScript** | ES Modules (`"type": "module"`), runs directly with Node.js |
| **TypeScript** | Compiled via [tsx](https://www.npmjs.com/package/tsx) in dev, [tsc](https://www.typescriptlang.org/docs/handbook/compiler-options.html) for production builds |

### Databases

| Database | Driver | Setup |
| --- | --- | --- |
| **MongoDB** | [Mongoose](https://mongoosejs.com/) `^8.0.0` | Connection manager with graceful shutdown, User model included |
| **PostgreSQL** | [node-postgres](https://node-postgres.com/) `^8.11.3` | Connection pool with lifecycle events, User table with typed CRUD operations |
| **None** | -- | Skips database setup entirely |

---

## What's Included

Every generated project ships with:

- **Standardized API responses** via `ApiResponse` and `ApiError` classes
- **Global error handling** middleware with dev-only stack traces
- **Security by default** via [Helmet](https://helmetjs.github.io/) and [Compression](https://www.npmjs.com/package/compression)
- **Automatic logging** via [Morgan](https://www.npmjs.com/package/morgan)
- **Testing suite** pre-configured with [Vitest](https://vitest.dev/) and Supertest
- **Linting & Formatting** via modern [ESLint](https://eslint.org/) and [Prettier](https://prettier.io/)
- **Environment variables** via [dotenv](https://www.npmjs.com/package/dotenv) with `.env.example`
- **Health check endpoint** at `GET /api/health`
- **Developer Experience** via [tsx](https://www.npmjs.com/package/tsx) or native `--watch`

---

## Optional Packages

During setup, you can select any combination of these packages:

| Package | Purpose | Docs |
| --- | --- | --- |
| `bcrypt` | Password hashing | [npmjs.com/package/bcrypt](https://www.npmjs.com/package/bcrypt) |
| `jsonwebtoken` | JWT-based authentication | [npmjs.com/package/jsonwebtoken](https://www.npmjs.com/package/jsonwebtoken) |
| `zod` | Schema validation | [zod.dev](https://zod.dev/) |
| `nodemailer` | Email sending | [nodemailer.com](https://nodemailer.com/) |

---

## Package Managers

`make-backend` supports all major Node.js package managers:

| Manager | Install Command | Run Dev | Docs |
| --- | --- | --- | --- |
| **npm** | `npm install` | `npm run dev` | [docs.npmjs.com](https://docs.npmjs.com/) |
| **pnpm** | `pnpm install` | `pnpm dev` | [pnpm.io](https://pnpm.io/) |
| **yarn** | `yarn install` | `yarn dev` | [yarnpkg.com](https://yarnpkg.com/) |
| **bun** | `bun install` | `bun dev` | [bun.sh](https://bun.sh/) |

Your selected package manager preference is cached locally, so it's pre-selected on future runs.

---

## Local Installation (without npm)

If the package isn't published on npm yet, or you prefer to run it from source, you can set it up locally.

### Option 1: npm link (recommended for development)

```bash
# Clone the repository
git clone https://github.com/onimusha-dev/make-backend.git
cd make-backend

# Install dependencies
npm install

# Create a global symlink
npm link

# Now you can run it from anywhere
make-backend
```

To unlink later:

```bash
npm unlink -g make-backend
```

### Option 2: Install as a hidden tool in your home directory

This approach keeps the tool tucked away in a dot-directory and adds it to your PATH permanently.

```bash
# Clone into a hidden directory
git clone https://github.com/onimusha-dev/make-backend.git ~/.make-backend

# Install dependencies
cd ~/.make-backend
npm install

# Make the binary executable
chmod +x ~/.make-backend/bin/index.js
```

Then add the binary to your PATH. Choose your shell:

**Bash** (`~/.bashrc`):

```bash
echo 'export PATH="$HOME/.make-backend/bin:$PATH"' >> ~/.bashrc
source ~/.bashrc
```

**Zsh** (`~/.zshrc`):

```bash
echo 'export PATH="$HOME/.make-backend/bin:$PATH"' >> ~/.zshrc
source ~/.zshrc
```

**Fish** (`~/.config/fish/config.fish`):

```bash
echo 'set -gx PATH $HOME/.make-backend/bin $PATH' >> ~/.config/fish/config.fish
source ~/.config/fish/config.fish
```

After that, you can run `index.js` from anywhere. To use it as `make-backend` instead, create an alias:

**Bash / Zsh:**

```bash
echo 'alias make-backend="node $HOME/.make-backend/bin/index.js"' >> ~/.bashrc  # or ~/.zshrc
source ~/.bashrc
```

**Fish:**

```bash
alias make-backend="node $HOME/.make-backend/bin/index.js" --save
```

Now run:

```bash
make-backend
```

### Option 3: Run directly with npx from GitHub

No clone or install needed:

```bash
npx github:onimusha-dev/make-backend
```

---

## Contributing

Contributions are welcome. To get started:

```bash
# 1. Fork and clone the repository
git clone https://github.com/YOUR_USERNAME/make-backend.git
cd make-backend

# 2. Install dependencies
npm install

# 3. Link the CLI locally for testing
npm link

# 4. Test the CLI
make-backend
```

When submitting a pull request:

- Follow the existing code style and directory conventions
- Test your changes by scaffolding a project with each framework/language/database combination
- Keep commits atomic and descriptive

---

## License

Distributed under the [ISC License](./LICENSE).
