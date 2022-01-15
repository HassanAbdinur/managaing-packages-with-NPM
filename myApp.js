var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    res.json(
        { "message": "Hello json" }
    );
});

 module.exports = app;