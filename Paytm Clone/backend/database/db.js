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
const accountSchema = mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "Users",
        required: true
    },
    balance: {
        type: Number,
        required: true
    }
})

const Users = mongoose.model('User', userSchema);
const Account = mongoose.model('Account',accountSchema);

module.exports={
    Users,
    Account,
}