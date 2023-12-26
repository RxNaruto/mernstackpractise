const express= require("express")
const app = express();
app.get("/health-checkup",function(req,res){
    const kidneyId=req.query.kidneyId;
    const username=req.headers.username;
    const password=req.headers.password;

    if(username!="naruto" || password!="naruto123"){
        res.status(403).json({
            msg:"you are not authorized user"
        });
        return;
    }
    if(kidneyId!=1 && kidneyId!=2){
        res.status(403).json({
            msg:"wrong input",
        });
        return;
    }
    res.send("your heart is healthy");
});
app.listen(8080);