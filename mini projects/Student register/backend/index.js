const express = require("express");
const cors = require("cors");
const app =express();
const userRouter = require("./routes/user");

app.use(express.json());
app.use(cors());


app.use("/user",userRouter);
app.listen(3000);