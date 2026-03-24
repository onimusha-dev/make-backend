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

export const asyncHandler = (fn) => (req, res, next) => {
    Promise.resolve(fn(req, res, next)).catch(next);
};
