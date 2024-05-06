const express = require("express");

const app = express();

let numnerOfRequests = 0;
function calculateRequests(req,res,next){
    numnerOfRequests++;
console.log(numnerOfRequests);
next();
}
app.use(express.json())
app.use(calculateRequests)
app.get("/health-checkup",function(req,res){
    res.json({
        msg:"hi there"
    })
});

app.listen(3000);