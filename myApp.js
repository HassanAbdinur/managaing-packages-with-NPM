const { json } = require('body-parser');
var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

app.use((req, res, next) => {
    console.log(req.method, req.path, req.ip);
    next();
});

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    var jsonRes = { "message": "Hello json" }
    process.env.MESSAGE_STYLE  === "uppercase" 
    ? jsonRes.message = jsonRes.message.toUpperCase() 
    : res.json(jsonRes); 
});

 module.exports = app;