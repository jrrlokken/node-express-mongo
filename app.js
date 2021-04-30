"use strict";
exports.__esModule = true;
var express = require("express");
var mongoose = require("mongoose");
var app = express();
var PORT = 8080;
var url = 'mongodb://localhost:27017/test';
mongoose.connect(url, { useNewUrlParser: true, useUnifiedTopology: true, useCreateIndex: true })
    .then(function (result) { return app.listen(PORT, function () { return console.log("Server listening on port " + PORT); }); })["catch"](function (error) { return console.error(error); });
app.get('/', function (req, res) {
    res.setHeader('Content-Type', 'text/html');
    res.end('<h1>Hello, World!</h1>');
});
app.listen(PORT, function () { return console.log("Server listening on port " + PORT); });
