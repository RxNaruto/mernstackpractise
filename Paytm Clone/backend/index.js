const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index')
const userRouter = require('./routes/user')

app.use(cors());
const app = express();
app.use(express.json());


const router = express.Router();
router.use("/api/v1",rootRouter);
router.use("/user",userRouter);

module.exports=router;