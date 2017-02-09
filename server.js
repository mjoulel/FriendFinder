// Marie Laborde
// 2/7/2017
// Week 13 - Friend Finder

// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

// The url library allows us to parse parts of the request url.
var url = require("url");
var http = require("http");
var fs = require('fs');
var server = http.createServer(handleRequest);

// Sets up the Express App
var app = express();

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.text());
app.use(bodyParser.json({ type: "application/vnd.api+json" }));

// Lets start our server
server.listen(3001, function() {
  // Callback triggered when server is successfully listening. Hurray!
  console.log("Server listening on: http://localhost:%s", 3001);
});
