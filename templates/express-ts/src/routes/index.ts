/**
 * @module routes
 * @description Registers all application routes under the /api prefix.
 *              Add new route modules here as the application grows.
 */

import { Router } from 'express';
import { getHome, healthCheck } from '../controllers/homeController.js';

const router = Router();

// Public Routes
router.get('/', getHome);
router.get('/health', healthCheck);

export default router;
