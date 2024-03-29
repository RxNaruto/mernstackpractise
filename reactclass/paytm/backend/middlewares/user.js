const {JWT_SECRET} = require("./config.js");
const jwt = require("jsonwebtoken");

const authmiddleware=(req,res,next)=>{
    const authHeader = req.headers.authorization;

    if(!authHeader || authHeader.startsWith('Bearer')){
        return res.status(403).json({

        })
    }
    const token  = authHeader.split(' ')[1];

    try{
        const decoded = jwt.verify(token,JWT_SECRET);

        if(decode.userId){
            req.userId = decoded.userId;
            next();
        }
        else{
            return res.status(403).json({});
        }

        }catch(err){
            return res.status(403).json({});
    }
};

module.exports={
    authmiddleware
}