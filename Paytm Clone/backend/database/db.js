const mongoose = require('mongoose');
mongoose.connect("mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/paytm");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true,
        unique: true,
        trim: true,
        lowercase: true,
        minLength: 3,
        maxLength: 30

    },
    password: {
        type: String,
        required: true,
        minLength: 8,
    },
    firstName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
        maxLength: 50
    }
});

const Users = mongoose.model('User', userSchema);

module.exports={
    Users
}