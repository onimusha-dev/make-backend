/**
 * @module models/User
 * @description Mongoose schema and model definition for the User entity.
 *              Includes field-level validation and automatic timestamps.
 */

import mongoose, { Schema } from 'mongoose';

const userSchema = new Schema(
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

const User = mongoose.model('User', userSchema);

export default User;
