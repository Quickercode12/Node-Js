// this is third-party modules access by the npm pakage
const express = require("express");

const app = express();

app.get((req, res) => {
  res.send("Hello New Developer");
});

app.listen(2000, () => {
  console.log("Your server is start at port 2000");
});
