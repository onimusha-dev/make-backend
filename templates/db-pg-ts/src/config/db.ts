/**
 * @module config/db
 * @description PostgreSQL connection pool using node-postgres.
 *              Manages connection pooling, query execution, and lifecycle events.
 */

import pg, { QueryResult } from 'pg';
const { Pool } = pg;

/**
 * Connection pool instance.
 * Reads DATABASE_URL from environment for the connection string.
 * The pool automatically manages connections -- no need to connect/disconnect manually.
 */
const pool = new Pool({
    connectionString: process.env.DATABASE_URL,
});

// Database Connection

pool.on('connect', () => {
    console.log('[database] PostgreSQL pool -> new client connected');
});

pool.on('error', (err: Error) => {
    console.error('[database] PostgreSQL pool error ->', err.message);
    process.exit(1);
});

// Query Helper

/**
 * Execute a parameterized SQL query against the pool.
 * @param text   - SQL query string with $1, $2, ... placeholders.
 * @param params - Values to bind to the query placeholders.
 */
export const query = (text: string, params?: any[]): Promise<QueryResult> =>
    pool.query(text, params);

/** Graceful shutdown -- drain the pool when the app terminates. */
process.on('SIGINT', async () => {
    await pool.end();
    console.log('[database] PostgreSQL pool closed (app termination)');
    process.exit(0);
});

export default pool;
