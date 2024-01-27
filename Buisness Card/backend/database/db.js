const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/BuisnessCard");

const UserSchema= new mongoose.Schema({
    username: String,
    name: String,
    description: String,
    information: String,
    linkedin: String,
    twitter: String
})

const User = mongoose.model('user',UserSchema);

module.exports={
    User

}