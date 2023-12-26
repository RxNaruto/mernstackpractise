//middlewares is used to check authentication
//http server where there are 4 routes
//get route for user to check no. of kidneys he has and their health
//post route to add a new kidney
//put user can replace a kidney and make it healthy
//delete to delete the kidney

const express = require('express');

const app = express();
app.listen(3001);

users = [{
    name: "naruto",
    kidney: [{ healthy: true }, { healthy: true }, { healthy: false }, { healthy: true },]
}];

function userMiddleware(req, res, next) {
    if (username != "naruto" || password != "123") {
        res.status(403).json({
            msg: "You are not authorized user",
        });
    }
    else {
        next();
    }
};
app.get("/", function (req, res) {
    const kidneys = users[0].kidney;
    const numberOfKidney = kidneys.length;
    let numberOfHealthyKidneys = 0;
    for (let i = 0; i < numberOfKidney; i++) {
        if (kidneys[i].healthy) {
            numberOfHealthyKidneys++;
        }
    }
    const numberofunhealthykidney = numberOfKidney - numberOfHealthyKidneys;

    res.json({
        numberOfKidney,
        numberOfHealthyKidneys,
        numberofunhealthykidney,
    })
});
// for post request to work it is necessary to put this thing
app.use(express.json());
app.post("/", userMiddleware,function (req, res) {
    const ishealthy = req.body.ishealthy;
    users[0].kidney.push({
        healthy: ishealthy
    })
    res.json({
        msg: "done!",
    })

})


app.put("/", function (req, res) {
    for (let i = 0; i < users[0].kidney.length; i++) {
        users[0].kidney[i].healthy = true;
    }
    res.json({
        msg: "kidney update success!",
    });
})

app.delete("/", function (req, res) {
    const newkidney = [];

    for (let i = 0; i < users[0].kidney.length; i++) {
        if (users[0].kidney[i].healthy) {
            newkidney.push({
                healthy: true
            })
        }
    }
    users[0].kidney = newkidney;
    res.json({
        msg: "done!",
    })
})