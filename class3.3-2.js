const express = require("express");
const app = express();
app.use(express.json())
// Function will return a boolean if age of the person is more than 14 then allow for the ride
function isOldEnough(req, res, next) {
    const age = req.query.age;

    if (age && parseInt(age) >= 14) {
        next();
    } else {
        res.status(403).json({
            msg: "You are not old enough to ride"
        });
    }
}
app.use(isOldEnough);

app.get("/ride1", isOldEnough, function(req, res,next) {
    res.json({
        msg: "You have successfully booked a ride 1"
    });
});

app.get("/ride2", isOldEnough, function(req, res,next) {
    res.json({
        msg: "You have successfully booked a ride 2"
    });
});



app.listen(3000);
