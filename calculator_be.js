// const express = require('express');
// const app = express();

// app.get("/",function(req,res){
//     const a = req.query.a;
//     const b = req.query.b;

//     const c = parseInt(a)+parseInt(b);
//     res.send("The sum of the given numbers is "+c);
// })

// app.listen(3000);

const express = require('express');
const app = express();

app.get("/calculate", function (req, res) {
  const a = req.query.a;
  const b = req.query.b;

  const c = parseInt(a) + parseInt(b);
  res.send("The sum of the given numbers is " + c);
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
