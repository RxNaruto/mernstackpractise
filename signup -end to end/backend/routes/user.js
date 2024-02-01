const express = require("express");
const {User} = require("../database/db");
const router = express.Router();

router.post("/signup",async (req,res)=>{
    const userBody = req.body;

    const existingUser = await User.findOne({
        username: req.body.username
    })
    if(existingUser){
        res.status(411).json({
            msg: "User already exist"
        })
    }
    const user = await User.create({
        username:req.body.username,
        password: req.body.password,
        firstName:req.body.firstName,
    })

    if(user){
        res.json({
            msg:"user created successfully"
        })
    }
    else{
        res.status(500).json({
            msg: "internal server error"
        })
    }
})

module.exports = router;