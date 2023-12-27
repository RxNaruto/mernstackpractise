//for better input validation zod is used
const express=require("express");
const z=require("zod");
const app = express();

app.use(express.json())
const kidneyInput=z.literal("1").or(z.literal("2"));
app.post("/",function(req,res){
    const kidneyId=req.query.kidneyId;
    const validation=kidneyInput.safeParse(kidneyId)
    if(!validation.success){
        res.send("incorrect input");
        return;
    }
    res.send("your kidney id is"+ kidneyId);
});
app.listen(3001);
