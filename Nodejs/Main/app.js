const express = require("express");

const app = express();
app.use('/',(req, res, next)=>{
    console.log("Inside first middleware",req.url);
    next();
});
app.use('/product',(req, res, next)=>{
    console.log("Inside product",req.url);
    res.send(`<h1>This is product page</h1>`);
});
app.use('/',(req, res, next)=>{
    console.log("Inside another middleware",req.url);
    res.send(`<h1>Salam from express.js</h1>`);
});

app.listen(3000);
