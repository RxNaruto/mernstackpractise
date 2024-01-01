const express =require('express');
const z =require('zod');
const app=express();
const mongoose=require('mongoose');
app.use(express.json());
app.listen(3000);

mongoose.connect(
    "mongodb+srv://naruto:jVSNMMGwfSVPzHXV@cluster0.78poq1d.mongodb.net/",
  );

const admin = mongoose.model("admin", {
    
    username: String,
    password: String,
  });

const students = mongoose.model("students", {
    
    username: String,
    password: String,
    email: String,
    rollno: String,
    schoolData:[{
        type:mongoose.Schema.Types.ObjectId,
        ref:'schoolData'
    }]

  });

  const schoolData=mongoose.model("schoolData", {
    class: String,
    classIncharge: String,
    subjects: Object,
    CR: String,
    HouseName: String

    


    
  })
//the app has 4 routes two for admin 1. where admin can signup 
//2. admin can see all the students 
//3. students can signup
//4. student can see their class and subject detail

const userschema=z.string();
const passschema = z.string().min(8);
const emailschema= z.string().email();
const rollnoschema=z.string(4);

function adminMiddleware(req,res,next){
    const username= req.body.username;
    const password= req.body.password;
    const validuser = userschema.safeParse(username);
    const validpass = passschema.safeParse(password);
    if(!validuser.success || !validpass.success){
        res.json({
            msg:"wrong input"
        })
    }
    else{
        next();
    }
    
}

function userMiddleware(req,res,next){
    const username= req.body.username;
    const password= req.body.password;
    const email=req.body.email;
    const rollno =req.body.rollno;
    const validuser = userschema.safeParse(username);
    const validpass = passschema.safeParse(password);
    const validemail=emailschema.safeParse(email);
    const validnum=rollnoschema.safeParse(rollno);
    if(!validuser.success || !validpass.success || !validemail.success || !validnum.success){
        res.json({
            msg:"wrong input"
        })
    }
    else{
        next();
    }
    
}
function adminauthMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    
    admin.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authorized"
            })
        }
    })
}
function userauthMiddleware(req,res,next){
    const username=req.headers.username;
    const password=req.headers.password;
    
    students.findOne({
        username: username,
        password: password
    })
    .then(function(value){
        if(value){
            next();
        }
        else{
            res.status(403).json({
                msg:"you are not authorized"
            })
        }
    })
}

app.post("/admin/signup", adminMiddleware, async function(req,res){
   
    const newadmin = await admin.create({
        username: req.body.username,
        password: req.body.password
    })

    res.json({
        msg: "admin created successful"
    })
    //admin endpoint working fine
 
    
})
app.post("/students/signup", userMiddleware, async function(req,res){
   
    const newstudent = await students.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        rollno:req.body.rollno,
    })

    res.json({
        msg: "student registered successfully"
    })
})
//student signup working perfectly

app.get("/admin/allusers",adminauthMiddleware,async function(req,res){

    const response = await admin.find({});
    res.json({
        response: response
    })
})
//admin authentication working fine

app.post("/admin/addschoolData",adminauthMiddleware,async function(req,res){
    const newdetail = await schoolData.create({
        class: req.body.class,
        classIncharge: req.body.classIncharge,
        subjects: req.body.subjects,
        CR: req.body.cr,
        HouseName: req.body.HouseName
    })

    res.json({
        msg: "Data added successfully"
    })
})
//add school data end point working fine

app.get("/students/userdata/" , userauthMiddleware, async function(req,res){
    const response = await students.find({}).populate('schoolData',' -_id class classIncharge subjects CR HouseName');
    res.json({
        response:response
    })
    
    
})