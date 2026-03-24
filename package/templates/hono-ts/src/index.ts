/**
 * @module index
 * @description Application entry point.
 *              Loads environment variables and starts the Hono HTTP server via @hono/node-server.
 */

import { serve } from '@hono/node-server';
import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = Number(process.env.PORT) || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

serve({ fetch: app.fetch, port: PORT }, () => {
    console.log(`[server] running on http://localhost:${PORT} [${NODE_ENV}]`);
});
