/**
 * @module middlewares/errorHandler
 * @description Global error-handling middleware for Express.
 *              Catches ApiError instances and unhandled errors,
 *              returns consistent JSON responses. Stack traces are
 *              only exposed in development.
 */

import { Request, Response, NextFunction } from 'express';
import { ApiError } from '../utils/apiResponse.js';
import { HTTP_STATUS } from '../constants/httpStatus.js';

/** Handles all unmatched routes -- passes a 404 ApiError to next(). */
export const notFound = (req: Request, res: Response, next: NextFunction) => {
    next(new ApiError(HTTP_STATUS.NOT_FOUND, `Not Found - ${req.originalUrl}`));
};

/** Global error handler -- must be registered LAST in the middleware stack. */
export const errorHandler = (err: Error | ApiError, req: Request, res: Response, next: NextFunction) => {
    console.error(`[error] ${err.message}`);

    if (err instanceof ApiError) {
        return res.status(err.statusCode).json({
            success: false,
            message: err.message,
            errors: err.errors,
        });
    }

    const statusCode = (err as any).status || HTTP_STATUS.INTERNAL_SERVER;
    res.status(statusCode).json({
        success: false,
        message: err.message || 'Internal Server Error',
        ...(process.env.NODE_ENV === 'development' && { stack: err.stack }),
    });
};
