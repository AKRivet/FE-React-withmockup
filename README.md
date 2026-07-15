# test-layout-with-mockup-02

Full-stack web application scaffold.

## Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Language | TypeScript |
| Build Tool | Vite |
| UI Library | Mantine v7 |
| State Management | Redux Toolkit |
| Backend | Express (Node.js) |
| Package Manager | npm workspaces |

## Project Structure

```
.
├── client/                  # React frontend
│   ├── src/
│   │   ├── app/             # Redux store + typed hooks
│   │   ├── components/      # Shared/reusable UI components
│   │   ├── features/        # Redux slices + feature-scoped components
│   │   ├── hooks/           # Custom React hooks
│   │   ├── pages/           # Route-level page components
│   │   ├── types/           # Shared TypeScript types
│   │   └── utils/           # Utility functions
│   ├── vite.config.ts
│   └── eslint.config.js
└── server/                  # Express API
    └── src/
        ├── middleware/
        └── routes/
```

## Getting Started

```bash
# Install all dependencies (root + workspaces)
npm install

# Run both client and server in parallel
npm run dev

# Client only  →  http://localhost:5173
# Server only  →  http://localhost:3001
```

## Available Scripts

| Command | Description |
|---|---|
| `npm run dev` | Start client (port 5173) and server (port 3001) concurrently |
| `npm run build` | Build the client for production |
| `npm run lint` | Lint client source |
| `npm run format` | Format all files with Prettier |
| `npm run dev -w client` | Client dev server only |
| `npm run dev -w server` | Server dev server only |

## API

The Vite dev server proxies `/api/*` requests to the Express server at `localhost:3001`, so no CORS issues during development.

| Endpoint | Description |
|---|---|
| `GET /api/health` | Health check |

## Environment Variables

```bash
# client/.env.local
VITE_API_URL=http://localhost:3001

# server/.env
PORT=3001
NODE_ENV=development
```

Copy the `.env.example` files in each workspace and adjust as needed.
