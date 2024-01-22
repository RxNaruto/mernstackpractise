const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/paytm")

const userSchema = mongoose.Schema({
    username: String,
    password: String,
    firstName: String,
    lastName: String
    
})

const User = mongoose.model('user',userSchema);

module.export={
    User
}