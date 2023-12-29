const express=require('express');
const app=express();
app.use(express.json());
app.listen(3000);
let requestCount=0;
app.use((req,res,next)=>{
    requestCount++;
    next();
  });
  app.get('/user',function(req, res) {
    res.status(200).json({ name: 'john' });
  });
  
  app.post('/user', function(req, res) {
    res.status(200).json({ msg: 'created dummy user' });
  });
  
  app.get('/requestCount', function(req, res) {
    res.status(200).json({ requestCount });
  });