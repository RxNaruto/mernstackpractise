const express = require("express");
const router = express.Router();
const {userSchema} = require("../types/user");
const {User} = require("../database/db");
router.post("/signup",async(req,res)=>{
    const userBody = req.body;
    const userValidation = userSchema.safeParse(userBody);
    if(!userValidation.success){
        return res.status(411).json({
            msg: "Incorrect input"
        })
    }
    const existingUser = await User.findOne({
        username: userBody.username
    });
    
    if(!existingUser.success){
        return res.status(411).json({
            msg: "User already exist"
        })
    }

    const newUser = await User.create({
        username: userBody.username,
        password: userBody.password,
        name: userBody.name,
        rollno: userBody.rollno,
        branch: userBody.branch
    })
    res.json({
        msg: "User created successfully"
    })

})



module.exports=router;