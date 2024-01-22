const express = require('express');
const userRouter = express("./user");
const router = express.Router();


router.use("/user",userRouter);

module.exports =router;
