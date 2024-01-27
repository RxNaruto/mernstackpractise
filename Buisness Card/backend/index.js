const express = require('express');
const uesrRouter = require('./routes/user');

const router = express.Router();

router.use("/user",uesrRouter);

module.exports=router;