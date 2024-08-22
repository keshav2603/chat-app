import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {Message} from "../models/message.model.js"
import { User } from "../models/user.model.js";
import {Conversation} from "../models/conversation.model.js"

export const sendMessage = asyncHandler(async(req,res)=>{
    const {message} = req.body;

    if(!message){
        throw new ApiError(400, "message is required to send")
    }
    const {id:receiverId} = req.params;
    if(!receiverId){
        throw new ApiError(400, "receiver id is required")
    }
    const senderId = req.user._id;
    const receiver = await User.findById(receiverId);
    if(!receiver){
        throw new ApiError(404,"receiver does not found");
    }
    let conversation =await Conversation.findOne({
        participants:{$all:[senderId,receiverId]}
    })
    if(!conversation){
        conversation = await Conversation.create({
            participants:[senderId, receiverId],
        })
    }
    const newMessage= await Message.create({
        senderId,
        receiverId,
        message
    })
    
    if(!newMessage){
        throw new ApiError(500,"error while creating a message");
    }
    conversation.messages.push(newMessage._id);


    // sockit.io functionality have to do later
    await conversation.save();

    res.status(201)
    .json(new ApiResponse(201, newMessage,"message send sucessfully"
    ))
});

export const getMessage = asyncHandler(async(req, res)=>{
    const {id: userToChatId} = req.params
    const senderId = req.user._id;

    const conversation = await Conversation.findOne({
        participants:{$all:[senderId,userToChatId]}
    }).populate("messages")

    if(!conversation){
        res.status(200).
        json(new ApiResponse(200,[],"start new conversation"));
    }

    res.status(201)
    .json(new ApiResponse(201,conversation.messages, "message fetch successfully"))

})