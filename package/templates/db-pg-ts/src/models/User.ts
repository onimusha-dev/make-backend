/**
 * @module models/User
 * @description Data access layer for the users table in PostgreSQL.
 *              Provides table creation, typed CRUD operations, and parameterized queries.
 */

import { query } from "../config/db.js";

/** Represents a row in the users table. */
export interface User {
    id: number;
    name: string;
    email: string;
    password: string;
    created_at: Date;
    updated_at: Date;
}

// Schema Definition

/** Creates the users table if it doesn't already exist. */
export const createUsersTable = async (): Promise<void> => {
    const sql = `
    CREATE TABLE IF NOT EXISTS users (
      id          SERIAL PRIMARY KEY,
      name        VARCHAR(100) NOT NULL,
      email       VARCHAR(100) UNIQUE NOT NULL,
      password    VARCHAR(255) NOT NULL,
      created_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
      updated_at  TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
    await query(sql);
    console.log("[database] users table ready");
};

// Queries

/** Retrieve all users (excludes password). */
export const findAllUsers = async (): Promise<User[]> => {
    const { rows } = await query(
        "SELECT id, name, email, created_at FROM users ORDER BY created_at DESC"
    );
    return rows;
};

/** Retrieve a single user by ID (excludes password). */
export const findUserById = async (id: number): Promise<User | null> => {
    const { rows } = await query("SELECT id, name, email, created_at FROM users WHERE id = $1", [
        id,
    ]);
    return rows[0] || null;
};

/** Insert a new user and return the created record. */
export const createUser = async (name: string, email: string, password: string): Promise<User> => {
    const { rows } = await query(
        "INSERT INTO users (name, email, password) VALUES ($1, $2, $3) RETURNING id, name, email, created_at",
        [name, email, password]
    );
    return rows[0];
};
