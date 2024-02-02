const mongoose = require('mongoose');

mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/Student");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    name: String,
    rollno: String,
    branch: String
});

const User = mongoose.model("user",UserSchema);

module.exports={
    User
}