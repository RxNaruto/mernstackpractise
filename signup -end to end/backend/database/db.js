const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/sign-up");

const userSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String
})

const User = mongoose.model("User",userSchema);

module.exports={
    User
}