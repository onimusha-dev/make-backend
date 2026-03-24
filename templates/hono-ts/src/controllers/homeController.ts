/**
 * @module controllers/homeController
 * @description Handlers for the root and health-check API endpoints.
 */

import { Context } from 'hono';
import { HTTP_STATUS } from '../constants/httpStatus.js';
import { ApiResponse } from '../utils/apiResponse.js';

/** GET /api -- Returns API status and version information. */
export const getHome = (c: Context) => {
    const response = new ApiResponse(HTTP_STATUS.OK, {
        version: '1.0.0',
        environment: process.env.NODE_ENV || 'development',
    }, 'API is running');

    return c.json(response.toJSON(), HTTP_STATUS.OK);
};

/** GET /api/health -- Returns server uptime and health metrics. */
export const healthCheck = (c: Context) => {
    const response = new ApiResponse(HTTP_STATUS.OK, {
        uptime: process.uptime(),
        timestamp: Date.now(),
        status: 'healthy',
    }, 'Health check passed');

    return c.json(response.toJSON(), HTTP_STATUS.OK);
};
