const express = require('express');
const zod = require('zod');
const router = express.Router;
const {Users} = require("../database/db");
const { JWT_SECRET } = require('../config');
const { authMiddleware } = require('../middlewares');

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

const updateSchema = zod.object({
    password: zod.string().optional(),
    firstName: zod.string().optional(),
    lastName: zod.string().optional()
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

    await Account.create({
        userId,
        balance: 1 + Math.random() * 10000
    })
    
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

router.put("/",authMiddleware,async (req,res)=>{
    const body = req.body;
    const validation = updateSchema.safeParse(body);
    if(!validation.success){
        return res.status(411).json({
            msg: "Wrong input"
        })
    }

    await Users.updateOne(body,{
        id: req.userId
    })
    res.json({
        msg: "Updated successfully"
    })

})

router.get("/bulk" , async(req,res)=>{
    const filter = req.query.filter || " ";

    const users = await Users.find({
        $or: [{
            firstName: {
                "$regex": filter
            }
            }, { 
                lastName: {
                    "$regex": filter
                }
            }
        ]
    })

    res.json({
        user: users.map(user => ({
            username: user.username,
            firstName: user.firstName,
            lastName: user.lastName,
            _id: user._id
        }))
    })
})

module.exports=router;