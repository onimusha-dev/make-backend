/**
 * @module app
 * @description Hono application configuration.
 *              Registers global middleware, API routes, and error handlers.
 */

import { Hono } from 'hono';
import { cors } from 'hono/cors';
import { logger } from 'hono/logger';
import { secureHeaders } from 'hono/secure-headers';
import { compress } from 'hono/compress';
import routes from './routes/index.js';
import { ApiError } from './utils/apiResponse.js';
import { HTTP_STATUS } from './constants/httpStatus.js';

const app = new Hono();

// Global Middleware
app.use('*', logger());
app.use('*', cors());
app.use('*', secureHeaders());
app.use('*', compress());

// API Routes
app.route('/api', routes);

// Error Handling

app.onError((err, c) => {
    console.error(`[error] ${err.message}`);

    if (err instanceof ApiError) {
        return c.json({
            success: false,
            message: err.message,
            errors: err.errors,
        }, err.statusCode);
    }

    return c.json({
        success: false,
        message: err.message || 'Internal Server Error',
    }, HTTP_STATUS.INTERNAL_SERVER);
});

app.notFound((c) => {
    return c.json({
        success: false,
        message: `Not Found - ${c.req.path}`,
    }, HTTP_STATUS.NOT_FOUND);
});

export default app;
