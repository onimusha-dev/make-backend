/**
 * @module utils/apiResponse
 * @description Standardized API response and error classes for Hono.
 *              Use ApiResponse for successful results and ApiError for failures.
 *              Includes toJSON() for easy serialization with c.json().
 */

export class ApiResponse {
    constructor(statusCode, data, message = 'Success') {
        this.statusCode = statusCode;
        this.data = data;
        this.message = message;
        this.success = statusCode < 400;
    }

    /** Serialize to a plain object for c.json(). */
    toJSON() {
        return {
            success: this.success,
            message: this.message,
            data: this.data,
        };
    }
}

export class ApiError extends Error {
    /**
     * @param {number}   statusCode - HTTP status code
     * @param {string}   message    - Human-readable error message
     * @param {string[]} errors     - Optional list of detailed validation errors
     */
    constructor(statusCode, message = 'Something went wrong', errors = []) {
        super(message);
        this.statusCode = statusCode;
        this.success = false;
        this.errors = errors;
    }
}
