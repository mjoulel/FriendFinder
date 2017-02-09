// Marie Laborde
// 2/9/17
// Week 13 - Friend Finder

//Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");

var app = express();			// Sets up the Express App

// Sets up the Express app to handle data parsing
app.use(bodyParser.json());

// Basic route that sends the user first to the AJAX Page
app.get("/api/friends", function(req, res) {
  res.sendFile(path.join(__dirname, "api-friends.html"));
});

// Handle incoming survey results & compatibility logic - takes in JSON input
app.post("/api/friends", function(req, res) {
  var friends = {
  "name":"Ahmed",
  "photo":"https://media.licdn.com/mpr/mpr/shrinknp_400_400/p/6/005/064/1bd/3435aa3.jpg",
  "scores":[
     5,
     1,
     4,
     4,
     5,
     1,
     2,
     5,
     4,
     1
   ];
}

  var newcharacter = req.body;
  newcharacter.routeName = newcharacter.name.replace(/\s+/g, "").toLowerCase();

  console.log(newcharacter);

  characters.push(newcharacter);

  res.json(newcharacter);
});
