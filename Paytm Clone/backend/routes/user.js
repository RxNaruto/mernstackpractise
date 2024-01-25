const express = require('express');
const zod = require('zod');
const router = express.Router;
const {Users} = require("../database/db");
const { JWT_SECRET } = require('../config');

const signupSchema = zod.object({
    username: zod.string().email(),
    password: zod.string(),
    firstName: zod.string(),
    lastName: zod.string()

})
const signinSchema = zod.object({
    username: zod.string().email(),
    password: zod.string()
})


router.post("/signup",async (req,res)=>{
    const body = req.body;
    const inputValidation = signupSchema.safeParse(body);
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

router.post("/signin",async (req,res)=>{
    const body = req.body;
    const inputValidation = signinSchema.safeParse(body);
    if(!inputValidation.success){
        return res.status(411).json({
            msg: "incorrect input"
        })
    }
    const checkUser = await Users.findOne({
        username: req.body.username,
        password: req.body.password
    });

    if(checkUser){
        const token = jwt.sign({
            userId: checkUser._id
        },JWT_SECRET);

        res.json({
            token: token
        })
        return;
    }

    res.status(411).json({
        msg:"Error while logging in"
    })

})

module.exports=router;