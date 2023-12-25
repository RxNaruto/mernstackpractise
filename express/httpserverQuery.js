const express = require("express");
const app = express();
app.listen(3001);
function square(n){
    const ans = n*n;
    return ans;
    
}
app.get("/" ,function(req,res){
    const n = req.query.n;
    const ans = square(n);
    res.send("This is your ans " + ans);
})