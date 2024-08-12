import jwt from "jsonwebtoken";

export const generateTokenAndSetCookie = (userID, res) => {
    try {
        const token = jwt.sign({ userID }, process.env.JWT_SECRET, {
            expiresIn: "15d"
        });
        res.cookie("jwt", token, {
            maxAge: 15 * 24 * 60 * 60 * 1000, // 15 days
            httpOnly: true,  // Prevent XSS attacks
            sameSite: "strict", // Prevent CSRF attacks
            secure: process.env.NODE_ENV === "production", // Use secure in production
        });
    } catch (error) {
        throw new Error("Failed to generate token and set cookie");
    }
}

