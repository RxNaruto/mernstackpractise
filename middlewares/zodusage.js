//for better input validation zod is used
const express=require("express");
const z=require("zod");
const app = express();
app.use(express.json());
const schema = z.string();
app.post("/",function(req,res){
   
    const validation=schema.safeParse(req.body.pass);
    if(!validation.success){
        res.send("incorrect input");
        return;
    }
    res.send("your email is " + pass);
})



app.listen(3001);
