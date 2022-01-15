var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

app.get("/", function(req, res) {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"));

 module.exports = app;