import { User } from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";

export const getUserForSidebar = asyncHandler(async(req,res)=>{
    const loggedInUserId = req.user._id

    const filtersUsers = await  User.find({_id:{$ne:loggedInUserId}}).select("-password")

    if(!filtersUsers){
        throw new ApiError(500, "users not found");
    }

    res.status(201)
    .json(new ApiResponse(201, filtersUsers, "get all user successfully"))
})