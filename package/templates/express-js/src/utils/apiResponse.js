/**
 * @module utils/apiResponse
 * @description Standardized API response and error classes.
 *              Use ApiResponse for successful results and ApiError for failures.
 *              Ensures every endpoint returns a consistent { success, message, data } shape.
 */

export class ApiResponse {
    constructor(statusCode, data, message = 'Success') {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }
}

export class ApiError extends Error {
    /**
     * @param {number}   statusCode - HTTP status code
     * @param {string}   message    - Human-readable error message
     * @param {string[]} errors     - Optional list of detailed validation errors
     * @param {string}   stack      - Optional custom stack trace
     */
    constructor(statusCode, message = 'Something went wrong', errors = [], stack = '') {
        super(message);
        this.statusCode = statusCode;
        this.message = message;
        this.success = false;
        this.errors = errors;

        if (stack) {
            this.stack = stack;
        } else {
            Error.captureStackTrace(this, this.constructor);
        }
    }
}
