/**
 * @module index
 * @description Application entry point.
 *              Loads environment variables and starts the HTTP server.
 */

import app from './app.js';
import dotenv from 'dotenv';

dotenv.config();

const PORT = process.env.PORT || 3000;
const NODE_ENV = process.env.NODE_ENV || 'development';

app.listen(PORT, () => {
  console.log(`[server] running on http://localhost:${PORT} [${NODE_ENV}]`);
});
