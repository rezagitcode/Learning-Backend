const express = require("express");

const app = express();
app.get('/favicon.ico', (req, res) => res.sendStatus(204));
app.use("/users",(req, res, next) => {
  console.log("Inside users middleware");
  res.send(`<h1>Users</h1><ul><li>User1</li><li>User2</li><li>User2</li></ul>`);
});
app.use("/",(req, res, next) => {
  console.log("Inside / ");
  res.end(`<h1>My Homepage</h1>`);
});

app.listen(3000);
