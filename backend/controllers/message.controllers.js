import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {Message} from "../models/message.model.js"


export const sendMessage = asyncHandler(async(req,res)=>{
    const {message} = req.body;

    if(!message){
        throw new ApiError(400, "message is required to send")
    }
    const {id} = req.params;
    if(!id){
        throw new ApiError(400, "receiver id is required")
    }

})