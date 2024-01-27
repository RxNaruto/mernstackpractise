const express= require('express');
const {User} = require('../database/db')
const {userSchema} = require("../types/userValidation")

const router = express.Router();


router.post("/setInfo" , async (req,res)=>{

    const body = req.body;
    const userValidation = userSchema.safeParse(body);
    if(!userValidation.success){
        return res.status(411).json({
            msg: "Incorrect input / User already exist"
        })
    }
    const cUser= await User.findOne({
        username: body.username
    })
    if(cUser){
        return res.status(411).json({
            msg: "Incorrect input / User already exist"
        })
    }
    const nUser = await User.create({
        username: body.username,
        name: body.name,
        description: body.description,
        information: body.information,
        linkedin: body.linkedin,
        twitter: body.twitter
        

    })
    res.json({
        msg: "User created successfully"
    })

})

module.exports=router;