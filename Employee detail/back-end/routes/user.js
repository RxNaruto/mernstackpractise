const express = require("express");
const { userSchema } = require("../types/user");
const { User } = require("../database/db");
const router= express.Router();


router.post("/register",async (req,res)=>{
    const userBody = req.body;
    const userValidation = userSchema.safeParse(userBody);
    if(!userValidation.success){
    
        return res.status(411).json({
            
            msg: "Wrong input"
        })
    }
    const newUser = await User.create({
        username:req.body.username,
        password: req.body.password,
        firstName:req.body.firstName,
        lastName: req.body.lastName,
        department: req.body.department
    })
    if(newUser){
        res.status(200).json({
            msg: "User created Successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "Internal Server error"
        })
    }


})

module.exports =router;