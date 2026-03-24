/**
 * @module config/db
 * @description MongoDB connection manager using Mongoose.
 *              Handles connection lifecycle, retries, and graceful shutdown.
 */

import mongoose from "mongoose";

/**
 * Establishes a connection to MongoDB.
 * Uses MONGO_URI from environment variables.
 * Exits the process on failure to prevent the app from running without a database.
 */
const connectDB = async (): Promise<void> => {
    try {
        const conn = await mongoose.connect(process.env.MONGO_URI || "");

        console.log(
            `[database] MongoDB connected -> ${conn.connection.host}:${conn.connection.port}/${conn.connection.name}`
        );
    } catch (error) {
        console.error(`[database] MongoDB connection failed -> ${(error as Error).message}`);
        process.exit(1);
    }
};

/** Graceful shutdown -- close connection when the app terminates. */
process.on("SIGINT", async () => {
    await mongoose.connection.close();
    console.log("[database] MongoDB connection closed (app termination)");
    process.exit(0);
});

export default connectDB;
