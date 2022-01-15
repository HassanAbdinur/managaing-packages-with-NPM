const { json } = require('body-parser');
var express = require('express');
var app = express();
var bGround = require('fcc-express-bground');
require('dotenv').config();

app.get("/", (req, res) => {
    res.sendFile(__dirname + "/views/index.html");
  });

app.use("/public", express.static(__dirname + "/public"));

app.get("/json", (req, res) => {
    console.log(process.env.MESSAGE_STYLE, " <= message style");
    if (process.env.MESSAGE_STYLE  === "uppercase") {
        res.json(
            { "message": "HELLO JSON" }
        );
    } else {
        res.json(
            { "message": "Hello json" }
        );
    }
});

 module.exports = app;