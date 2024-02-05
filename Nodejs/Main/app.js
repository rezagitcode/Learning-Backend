const express = require("express");

const app = express();
app.use("/",(req, res, next) => {
  console.log("in the first middleware",req.url);
  next();
});
app.use("/dr",(req, res, next) => {
  console.log("in the another middleware",req.url);
});

app.listen(3000);
