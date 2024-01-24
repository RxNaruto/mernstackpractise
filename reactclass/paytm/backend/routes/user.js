const express = require('express');
const router = express.Router();
const zod = require("zod");
const {User} = require("../database/db");
const JWT_SECRET = require('../config');



router.post("/signup",)

const signupSchema = zod.object({
    username: String(),
    password: String(),
    firstName: String(),
    lastName: String()

})
app.use("api/v1",mainRouter);

app.post("/signup",async(req,res)=>{
    const body = req.body;
    const {success} = signupSchema.safeParse(body);

    if(!success){
        return res.json({
            msg: "Username already Taken /incorrect input"
        })
    }
    const user = User.findOne({
        username: body.username
    })
    if(user._id){
        return res.json({
            msg:"Email already taken / Incorrect input"
        })
    }

    const newuser = await User.createOne(body);
    const token = jwt.sign({
        userId: newuser._id
    },JWT_SECRET);
    res.json({
        msg: "The user created succesfully",
        token: token
    })

})

module.exports = router;
