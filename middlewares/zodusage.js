//for better input validation zod is used
const express=require("express");
const z=require("zod");
const app = express();
app.use(express.json());
const schema = z.string().email();
app.post("/",function(req,res){
    const email=req.body.email;
    const validation=schema.safeParse(email);
    if(!validation.success){
        res.send("incorrect input");
        return;
    }
    res.send("your email is " + email);
})



app.listen(3001);
