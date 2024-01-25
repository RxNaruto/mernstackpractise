const express = require('express');
const zod = require('zod');
const router = express.Router;
const {Users} = require("../database/db");
const { JWT_SECRET } = require('../config');

const userSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()

})


router.post("/signup",async (req,res,next)=>{
    const body = req.body;
    const inputValidation = userSchema.safeParse(body);
    if(!inputValidation.success){
        return res.status(411).json({
            msg:"Wrong input / user already exist"
        })

    }
   
    const checkUser= await Users.findOne({
            username: req.body.username

    })
    
    if(checkUser){
        return res.status(411).json({
            msg: "Incorrect input / user already exist"
        })
    }

    const user = await Users.create({
        username: req.body.username,
        password: req.body.password,
        firstName: req.body.firstName,
        lastName: req.body.lastName
    })
    const userId = user._id;
    const token = jwt.sign({
        userId
    },JWT_SECRET);

    res.json({
        msg: "User created succesfully",
        token: token
    })
 

})

module.exports=router;