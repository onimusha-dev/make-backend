/**
 * @module routes
 * @description Registers all application routes under the /api prefix.
 *              Add new route modules here as the application grows.
 */

import { Hono } from 'hono';
import { getHome, healthCheck } from '../controllers/homeController.js';

const routes = new Hono();

// Public Routes
routes.get('/', getHome);
routes.get('/health', healthCheck);

export default routes;
