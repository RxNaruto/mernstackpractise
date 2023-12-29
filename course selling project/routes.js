const express = require('express');
const app=express();
app.use(express.json());
app.listen(3000);
const admin=[];
app.post('/signup', (req, res) => {
    // Implement admin signup logic
    const admin = req.body.username;
    const pass = req.body.password;
    const newadmin={
        username: admin,
        password: pass
    }
    res.json({
        msg: "Admin Created Succesfully"
    })
});
const course=[];
app.post('/courses', (req, res) => {
    // Implement course creation logic
    const username=req.headers.username;
    const password=req.headers.password;
    const coursetitle=req.body.title;
    const coursedescription=req.body.description
    const courseprice=req.body.price;
    const img=req.body.imglink;

    const newcourse={
        title: coursetitle,
        description:coursedescription,
        price:courseprice,
        imglink:img
    }
    course.push(newcourse);
    res.json({
        msg: "Course created successful"
    })
});

app.get('/courses',  (req, res) => {
    // Implement fetching all courses logic
    const username=req.headers.username;
    const password=req.headers.password;
    res.json({
        course
    })
    
});
