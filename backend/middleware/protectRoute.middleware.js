import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";
import { User } from "../models/user.model.js";

export const protectRoute = asyncHandler(async(req,res,next)=>{
    const token = req.cookies.jwt;
    if(!token){
        throw new ApiError(401, "unauthorised request");
    }

    const decodedToken = jwt.verify(token, process.env.JWT_SECRET);
    if(!decodedToken){
        throw new ApiError(401,"invalid token");
    }

    const user = await User.findById(decodedToken.userID).select("-password");

    if(!user){
        throw new ApiError(404,"user not found");
    }
    req.user = user;
    next();
})
