const express = require('express');
const cors = require('cors');
const rootRouter = require('./routes/index');
const userRouter = require('./routes/user');
const accountRouter = require('./routes/account');

app.use(cors());
const app = express();
app.use(express.json());
app.listen(3000);

const router = express.Router();
router.use("/api/v1",rootRouter);
router.use("/user",userRouter);
router.use("/account",accountRouter);

module.exports=router;