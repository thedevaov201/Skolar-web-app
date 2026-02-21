import { User } from "../user/user.model.js"
import bcryptjs from "bcryptjs";
import { generateTokenAndSetCookie } from "../../utils/generateTokenAndSetCookie.js";

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