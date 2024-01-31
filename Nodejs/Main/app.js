const http = require("http");

const express = require("express");

const app = express();

app.use((req, res, next)=>{
    console.log("Inside the first middleware");
    next();
});
app.use((req, res, next)=>{
    console.log("Inside another middleware");
    res.send(`<h1>Salam from express.js</ht>`);
})

const server = http.createServer(app);
server.listen(3000);
