/**
 * @module models/User
 * @description Mongoose schema and model definition for the User entity.
 *              Includes field-level validation, TypeScript interface, and automatic timestamps.
 */

import mongoose, { Schema, Document } from 'mongoose';

/** Represents a User document in MongoDB. */
export interface IUser extends Document {
    name: string;
    email: string;
    password: string;
    createdAt: Date;
    updatedAt: Date;
}

const userSchema = new Schema<IUser>(
    {
        name: {
            type: String,
            required: [true, 'Name is required'],
            trim: true,
            maxlength: [100, 'Name cannot exceed 100 characters'],
        },
        email: {
            type: String,
            required: [true, 'Email is required'],
            unique: true,
            lowercase: true,
            trim: true,
            match: [/^\S+@\S+\.\S+$/, 'Please provide a valid email'],
        },
        password: {
            type: String,
            required: [true, 'Password is required'],
            minlength: [6, 'Password must be at least 6 characters'],
            select: false, // exclude from queries by default
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const User = mongoose.model<IUser>('User', userSchema);

export default User;
