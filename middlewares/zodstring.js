//for better input validation zod is used
const express=require("express");
const z=require("zod");
const app = express();
app.use(express.json());
const schema = z.string().min(8);
app.post("/",function(req,res){
    const password=req.query.pass;
    const validation=schema.safeParse(password);
    if(!validation.success){
        res.send("incorrect input");
        return;
    }
    res.send("your password is " + password);
})



app.listen(3001);
