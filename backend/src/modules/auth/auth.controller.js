import { User } from "../user/user.model.js"
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../../utils/generateTokenAndSetCookie.js";

export const checkAuth = async (req,res) => {
    try {
        const { user } = await User.findById(req.userId).select("-password")
        if(!user) return res.status(400).json({message: "User not found"})

        res.status(200).json({ success: true, user})
    } catch (error) {
        console.log("Error in checkAuth", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const signup = async (req, res) => {
    const { name, email, password, university, department, level } = req.body;
    try {
        if(!name || !email || !password || !university || !department || !level) {
            throw new Error("All fields are required")
        }

        const userExists = await User.findOne({ email });
        if(userExists) return res.status(400).json({message: "User already exist"})

        const hashedPassword = await bcryptjs.hash(password, 10)
        const verificationToken = Math.floor(100000 + Math.random() * 900000).toString();

        const user = await User.create({
            name,
            email,
            password: hashedPassword,
            university,
            department,
            level,
            verificationToken
        })

        await user.save()

        //jwt
        generateTokenAndSetCookie(res, user._id)

        res.status(201).json({
            success: true,
            message: "User created successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })
    } catch (error) {
        console.log("error signing up: ", error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const logout = async (req, res) => {
    res.clearCookie("token")
    res.status(200).json({success: true, message: "Logged out successfully"})
}

export const login = async (req, res) => {
    const { email, password } = req.body;
    try {
        if(!email || !password) {
            throw new Error("All fields are required")
        }

        const user = await User.findOne({ email })
        if(!user) return res.status(400).json({message: "Invalid credentials"})

        const isPasswordValid = await bcryptjs.compare(password, user.password)
        if(!isPasswordValid) return res.status(400).json({message: "Invalid credentials"})

        user.lastLogin = Date.now()

        generateTokenAndSetCookie(res, user._id)

        await user.save()

        res.status(200).json({
            success: true,
            message: "Logged in successfully",
            user: {
                ...user._doc,
                password: undefined,
            }
        })
    } catch (error) {
        console.log("error logging in: ", error)
        res.status(500).json({
            success: false,
            message: error.message
        })
    }
}

export const verifyEmail = async (req, res) => {
    const { code } = req.body;
    try {
        const user = await User.findOne({
            verificationToken: code,
            verificationTokenExpires: { $gt: Date.now()}
        });

        if(!user) return res.status(400).json({message: "Invalid or expired verification code"})

        user.isVerified = true;
        user.verificationToken = undefined;
        user. verificationTokenExpires = undefined;

        res.status(200).json({message: "User successfully verified"})
    } catch (error) {
        console.log("Error verifying user", error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const forgotPassword = async (req, res) => {
    const { email } = req.body;
    try {
        const user = await User.findOne({email})
        if(!user) return res.status(404).json({message: "User not found"})

        const resetToken = crypto.randomBytes(20).toString("hex")
        const resetTokenExpiresAt = Date.now() + 1 * 60 * 60 * 1000;

        user.resetPasswordToken = resetToken;
        user.resetPasswordExpires = resetTokenExpiresAt;

        await user.save()
        
        res.status(200).json({success: true, message: "Passowrd reset link sent to your email"})
    } catch (error) {
        console.log(error)
        res.status(500).json({message: "Internal server error"})
    }
}

export const resetPassword = async (req, res) => {
    const { token } = req.params;
    const { password } = req.body;

    try {
       const user = await User.findOne({
          resetPasswordToken: token,
          resetPasswordExpires: { $gt: Date.now()}
       })

       if(!user) return res.status(400).json({message: "Invalid or expired reset token"})

       //update password
       const hashedPassword = await bcryptjs.hash(password, 10)

       user.password = hashedPassword;
       user.resetPasswordToken = undefined;
       user.resetPasswordExpires = undefined;

       await user.save()

       res.status(200).json({message: "Password changed successfully"})
    } catch (error) {
       console.log(error)
       res.status(500).json({message: "Internal server error"})
    }
}