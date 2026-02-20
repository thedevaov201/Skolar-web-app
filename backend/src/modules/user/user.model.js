import mongoose from "mongoose";

const userSchema = new mongoose.Schema(
    {
    name: { type: String, required: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true },
    university: String,
    department: String,
    level: String,
    role: { type: String, enum: ['student', 'teacher', 'admin'], default: 'student' },
    isVerified: { type: Boolean, default: false },
    lastLogin: Date,
    verificationToken: String,
    verificationTokenExpires: Date,
    resetPasswordToken: String,
    resetPasswordExpires: Date,
    }, 
    { timestamps: true }
);

export const User = mongoose.model("User", userSchema);