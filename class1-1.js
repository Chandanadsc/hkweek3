const express = require("express");

const app = express();

app.get("/health-checkup", function(req, res) {
  const kidneyId = req.query.kidneyId;
  const username = req.headers.username;
  const password = req.headers.password;

  if (username !== "chandana" || password !== "pass") {
    res.status(403).json({
      msg: "User does not exist"
    });
    return;
  }

  if (kidneyId !== "1" && kidneyId !== "2") {
    res.status(411).json({
      msg: "Wrong inputs"
    });
    return;
  }

  res.send("Your kidneys are healthy!!");
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});

// dumm way of doing user auth and input validation
// If I have to create another route which has to perform simialr checks then the will repeat -- violaes DRY -"do not repeat yourself"
