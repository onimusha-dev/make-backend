/**
 * @module utils/apiResponse
 * @description Standardized API response and error classes.
 *              Use ApiResponse for successful results and ApiError for failures.
 *              Ensures every endpoint returns a consistent { success, message, data } shape.
 */

import { HttpStatusCode } from '../constants/httpStatus.js';

/** Wraps a successful response with a consistent shape. */
export class ApiResponse<T = unknown> {
    public statusCode: HttpStatusCode;
    public data: T;
    public message: string;
    public success: boolean;

    constructor(statusCode: HttpStatusCode, data: T, message = 'Success') {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

/** Represents an operational error with an HTTP status code. */
export class ApiError extends Error {
    public statusCode: HttpStatusCode;
    public success: false;
    public errors: string[];

    constructor(statusCode: HttpStatusCode, message = 'Something went wrong', errors: string[] = [], stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
