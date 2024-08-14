import {User} from "../models/user.model.js";
import {ApiError} from "../utils/ApiError.js";
import {ApiResponse} from "../utils/ApiResponse.js";
import {asyncHandler} from "../utils/asyncHandler.js";
import {generateTokenAndSetCookie} from "../utils/generateToken.js";

export const signupUser = asyncHandler( async( req, res) =>{
    const {fullName, username, password, confirmPassword, gender} = req.body

    if(
        [fullName, username, password, confirmPassword, gender].some((field)=>field?.trim()==="")
    ){
        throw new ApiError(400, "all fields are required");
    }
    
    if( password !== confirmPassword){
        throw new ApiError(400, "password don't match");
    }
    const user =  await User.findOne({
        $or:[{username}]
    });
    if(user){
        throw new ApiError(400, "user already exists");
    }


    const boyProfilePic = `https://avatar.iran.liara.run/public/boy?username=${username}`;
    const girlProfilePic = `https://avatar.iran.liara.run/public/girl?username=${username}`;

    const newUser = await User.create({
        fullName,
        username,
        password,
        gender,
        profilePic: gender === "male" ? boyProfilePic : girlProfilePic
    })
    const createdUser = await User.findById(newUser._id).select("-password")
    if(!createdUser){
        throw new ApiError(500, "something went wrong while regestering a user");
    }
    generateTokenAndSetCookie(createdUser._id, res);
    
    return res.status(201)
    .json(new ApiResponse(201, createdUser, "user signup successfully"))
});

export const loginUser = asyncHandler(async(req,res)=>{
    const {username, password} = req.body

    if(!username || !password){
        throw new ApiError(400, "username and password both are required")
    }

    const user =  await User.findOne({
        $or:[{username}]
    });
    if(!user){
        throw new ApiError(404, "user not found");
    }
    const isPasswordValid = await user.isPasswordCorrect(password);
    if(!isPasswordValid){
        throw new ApiError(400, "invalid password")
    }
    generateTokenAndSetCookie(user._id, res);
    const oldUser = await User.findById(user._id).select("-password")
    res.status(201)
    .json(new ApiResponse(201, oldUser, "user login successfully"))

});

export const logoutUser =asyncHandler( async(req, res)=>{
    res.cookie("jwt", "", {maxAge:0});
    res.status(201)
    .json(new ApiResponse(201,{}, "user logout successfully"))
}) 
