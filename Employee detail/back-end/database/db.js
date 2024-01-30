const mongoose = require("mongoose");

mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/Employee");

const UserSchema = new mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String,
    department: String
})

const User = mongoose.model('User',UserSchema);


module.exports={
    User

}