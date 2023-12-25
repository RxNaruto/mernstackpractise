const express = require('express');
const app=express();
app.listen(3001);
var users=[{
    name: 'john',
    kidneys: [{
        healthy: false},{
            healthy: true
        
    }]
}]
app.get("/",function(req,res){
     const nokidneys=users[0].kidneys.length;
     res.send("the number of kidneys are"+ nokidneys);
})