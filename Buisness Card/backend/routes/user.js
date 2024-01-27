const express= require('express');
const {User} = require('../database/db')
const {userSchema} = require("../types/userValidation")

const router = express.Router();


router.post("/setInfo" , async (req,res)=>{

    const data = req.body;
    const userValidation = userSchema.safeParse(req.body);
    if(!userValidation.success){
        return res.status(411).json({
            
            msg: "Incorrect input "
        })
    }
    const cUser= await User.findOne({
        username: data.username
    })
    if(cUser){
        return res.status(411).json({
            msg: "Incorrect input / User already exist"
        })
    }
    const user = await User.create({
        username: req.body.username,
        name: req.body.name,
        description: req.body.description,
        information: req.body.information,
        linkedin: req.body.linkedin,
        twitter: req.body.twitter
        

    })
    res.json({
        msg: "User created successfully"
    })

})
router.get("/routerChecking",(req,res)=>{
    res.json({
        msg: "hi i am here"
    })
})

module.exports=router;