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

  const schoolData=mongoose.model("School Data", {
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
    const number =req.body.rollno;
    const validuser = userschema.safeParse(username);
    const validpass = passschema.safeParse(password);
    const validemail=emailschema.safeParse(email);
    const validnum=numberschema.safeParse(number);
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
    
 
    
})
app.post("/students/signup", userMiddleware, async function (req, res) {
 
      const newstudent = await students.create({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
        rollno: req.body.number,
      });
  
      // Link the student to a specific schoolData entry
      const schoolDataId = req.body.schoolDataId; // Assuming you provide the schoolDataId in the request
      const schoolDataEntry = await schoolData.findById(schoolDataId);
  
      if (schoolDataEntry) {
        newstudent.schoolData.push(schoolDataEntry._id);
        await newstudent.save();
      } else {
        return res.status(404).json({
          msg: "School Data not found",
        });
      }
  
      res.json({
        msg: "student registered successfully",
      });
    
  });
app.get("/admin/users",adminauthMiddleware,async function(req,res){

    const response = await students.find({});
    res.json({
        response: response
    })
})

app.post("/admin/schoolData",adminauthMiddleware,async function(req,res){
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

app.get("/students/data/:objectId" ,  async function(req,res){
    const objectId=req.params.objectId;
    const response=await schoolData.findById(objectId);
    console.log(response);
        res.json({
            response: response
        })
    
})
app.get("/students/userdata/:objectId", async function (req, res) {
    try {
      const objectId = req.params.objectId;
      const response = await students
        .findById(objectId)
        .populate('schoolData');
      
      res.json({
        response: response,
      });
    } catch (error) {
      console.error(error);
      res.status(500).json({
        error: "Internal Server Error",
      });
    }
  });
  