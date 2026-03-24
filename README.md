# Make-Backend Monorepo

This repository contains the `make-backend` CLI and its documentation website.

GitHub: [onimusha-dev/make-backend](https://github.com/onimusha-dev/make-backend)

## Structure

- `package/`: The core `make-backend` CLI package (published to npm).
- `website/`: The documentation website built with Next.js.

## Common Commands

### Root

- `pnpm install`: Install dependencies for all packages.
- `pnpm format`: Format all code in the repository.

### CLI (`package/`)

- `cd package`
- `pnpm test`: Run tests (if applicable).
- `pnpm publish`: Publish the CLI package to npm.

### Website (`website/`)

- `cd website`
- `pnpm dev`: Start the development server.
- `pnpm build`: Build the website for production.

## Secure Publication

The root and `website/` are marked as `private: true`. Only the content in the `package/` folder is intended for npm publication.
