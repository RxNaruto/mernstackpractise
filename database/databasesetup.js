const express= require('express');
const app=express();
app.use(express.json());
const mongoose =require('mongoose');
app.listen(3001);


mongoose.connect(
    "mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/",
  );

  const UserSchema= new mongoose.Schema({
    username : String,
    password : String

});

const User = mongoose.model('User',UserSchema);

app.get('/users',async function(req,res){
    const response=await User.find({});
    res.json({
        response
    })
})
app.post('/signup', async function(req,res){
    const username = req.body.username;
    const password = req.body.password;

    await User.create({
        username,
        password
    })
    res.json({
        msg:"user created successfully"
    })
})