/**
 * @module controllers/homeController
 * @description Handlers for the root and health-check API endpoints.
 */

import { Request, Response } from 'express';
import { HTTP_STATUS } from '../constants/httpStatus.js';
import { ApiResponse } from '../utils/apiResponse.js';

/** GET /api -- Returns API status and version information. */
export const getHome = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(
            HTTP_STATUS.OK,
            {
                version: '1.0.0',
                environment: process.env.NODE_ENV || 'development',
            },
            'API is running'
        )
    );
};

/** GET /api/health -- Returns server uptime and health metrics. */
export const healthCheck = (req: Request, res: Response) => {
    res.status(HTTP_STATUS.OK).json(
        new ApiResponse(
            HTTP_STATUS.OK,
            {
                uptime: process.uptime(),
                timestamp: Date.now(),
                status: 'healthy',
            },
            'Health check passed'
        )
    );
};
