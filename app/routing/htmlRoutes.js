// Marie Laborde
// 2/7/17
// Week 13 - Friend Finder

//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();			// Sets up the Express App

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/survey", function(req, res) {
  res.sendFile(path.join(__dirname, "survey.html"));
});

app.get("/home", function(req, res) {
  res.sendFile(path.join(__dirname, "home.html"));
});

