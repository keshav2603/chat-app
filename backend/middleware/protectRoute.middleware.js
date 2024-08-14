import jwt from "jsonwebtoken";
import { asyncHandler } from "../utils/asyncHandler.js";
import { ApiError } from "../utils/ApiError.js";

export const protectRoute = asyncHandler(async(req,res,next)=>{
    
})