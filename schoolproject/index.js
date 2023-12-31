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
    rollno: Number,

  });
//the app has 4 routes two for admin 1. where admin can signup 
//2. admin can see all the students 
//3. students can signup
//4. student can see their class and subject detail

const userschema=z.string();
const passschema = z.string().min(8);
const emailschema= z.string().email();
const numberschema=z.string(4);

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
    const number =req.body.number;
    const validuser = userschema.safeParse(username);
    const validpass = passschema.safeParse(password);
    const validemail=emailschema.safeParse(email);
    const validnum=numberschema.safeParse(number);
    if(!validuser.success || !validpass.success || !validemail || !validnum){
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

app.post("/admin/signup", adminMiddleware, async function(req,res){
   
    const newadmin = await admin.create({
        username: req.body.username,
        password: req.body.password
    })

    res.json({
        msg: "admin created successful"
    })
    
 
    
})
app.post("/students/signup", userMiddleware, async function(req,res){
   
    const newstudent = await students.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        rollno:req.body.number,
    })

    res.json({
        msg: "student registered successfully"
    })
})
app.get("/admin/users",adminauthMiddleware,async function(req,res){

    const response = await students.find({});
    res.json({
        response: response
    })
})
