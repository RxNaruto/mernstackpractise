//to create

const UserSchema= new mongoose.Schema({
    username : String,
    password : String

});

const User = mongoose.model('User',UserSchema);

//this is how user will put data in database
User.create({
    username: req.body.username,
    password: req.body.password
});

//this is how user will read data
User.findById("1");
User.findOne({
    username: "naruto@gmail.com"
})
User.find({
    username: "sasuke@gmail.com"
})

User.updateOne(
    { "id": "1"}
    { $push: { purchasedCourses: courseId}}
)