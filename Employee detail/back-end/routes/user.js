const express = require("express");
const { userSchema } = require("../types/user");
const { User } = require("../database/db");
const jwt = require("jsonwebtoken");
const  {JWT_SECRET}  = require("../config");
const router= express.Router();


router.post("/register",async (req,res)=>{
    const userBody = req.body;
    const userValidation = userSchema.safeParse(userBody);
    if(!userValidation.success){
    
        return res.status(411).json({
            
            msg: "Wrong input"
        })
    }
    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        return res.status(411).json({
            msg: "User already exist"
        })
    }
    const user = await User.create({
        username:req.body.username,
        password: req.body.password,
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department
    })
    const userId = user._id;

    const token = jwt.sign({
        userId
    },JWT_SECRET);


    if(user){
        res.status(200).json({
            msg: "User created Successfully",
            token: token
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }


})

module.exports =router;