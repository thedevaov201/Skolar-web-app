import jwt from "jsonwebtoken"

export const verifyToken = async (req, res, next) => {
    const token = res.cookies.token;
    if(!token) return res.status(400).json({success: false, message: "Unauthorised - no token provided"})
    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET)
        if(!decoded) return res.status(401).json({success: false, message: "Unauthorized - invalid token provided"})
        req.userId = decoded.userId;
        next()
    } catch (error) {
        console.log("Error in verify token", error)
        res.status(500).json({message: "Internal server error"})
    }
}