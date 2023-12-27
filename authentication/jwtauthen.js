const { ALL } = require("dns");
const express=require("express");
const jwt=require("jsonwebtoken");
const jwtpassword="12345";

const app=express();
app.use(express.json());

const ALL_USERS = [
    {
        username: "naruto@gmail.com",
        password: "123",
        name: "naruto",
    },
    {
        username: "sasuke@gmail.com",
        password: "123",
        name: "sasuke",
    },
    {
        username: "gara@gmail.com",
        password: "123",
        name: "garar",
    },
];
function userExists(username,password){
    let userExist=false;
    for(let i=0;i<ALL_USERS.length;i++){
        if(ALL_USERS[i].username==username && ALL_USERS[i].password==password){
            userExist=true;
        }
    }
    return userExist;
}
app.post("/signin",function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    if(!userExists(username,password)){
        return res.status(403).json({
            msg: "user does not exist",
        });
    }
    var token = jwt.sign({username: username},jwtpassword);
    return res.json({
        token,
    })
})




app.get("/users",function(req,res){
    const token = req.headers.authorization;
    try{
    const decoded=jwt.verify(token,jwtpassword);
    const username=decoded.username;
    
    res.json({
       users: ALL_USERS
    })
}
catch(err){
    return res.status(403).json({
        msg:"invalid token"
    })
}

});
app.listen(3001);