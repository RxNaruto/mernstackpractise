const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/paytm");

const userSchema = new Schema({
    username: String(),
    password: String(),
    firstName: String(),
    lastName: String()
})

const Users = mongoose.Schema('User', userSchema);

module.exports={
    Users
}