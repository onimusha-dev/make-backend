/**
 * @module utils/asyncHandler
 * @description Wraps an async Express route handler so that any rejected
 *              promise is automatically forwarded to the next error-handling
 *              middleware. Eliminates repetitive try/catch blocks in controllers.
 *
 * @example
 *   import { asyncHandler } from '../utils/asyncHandler.js';
 *
 *   router.get('/users', asyncHandler(async (req, res) => {
 *     const users = await User.find();
 *     res.json(users);
 *   }));
 */

import { Request, Response, NextFunction } from 'express';

type AsyncRouteHandler = (req: Request, res: Response, next: NextFunction) => Promise<any>;

export const asyncHandler = (fn: AsyncRouteHandler) =>
    (req: Request, res: Response, next: NextFunction) => {
        Promise.resolve(fn(req, res, next)).catch(next);
    };
