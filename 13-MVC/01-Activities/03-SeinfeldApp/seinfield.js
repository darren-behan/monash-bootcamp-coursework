
// /cast
// /coolness-chart
// /attitude-chart/:att

// Dependencies
const express = require("express");
const mysql = require("mysql");

// Create express app instance.
const app = express();

// Set the port of our application
// process.env.PORT lets the port be set by Heroku
const PORT = process.env.PORT || 8080;

// MySQL DB Connection Information (remember to change this with our specific credentials)
const connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Andrew1312",
  database: "seinfeld"
});

// Initiate MySQL Connection.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Routes
app.get("/cast", function(req, res) {
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM seinfeld.actors", function(err, result) {
    if (err) throw err;
    
    let html = "<h1> Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (let i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p></li>";
      html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";
    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

app.get("/coolness-chart", function(req, res) {
  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query("SELECT * FROM seinfeld.actors ORDER BY coolness_points", function(err, result) {
    if (err) throw err;
    
    let html = "<h1> Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p></li>";
      html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";
    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

app.get("/attitude-chart/:att", function(req, res) {

  // If the main route is hit, then we initiate a SQL query to grab all records.
  // All of the resulting records are stored in the variable "result."
  connection.query(`SELECT * FROM seinfeld.actors WHERE actors.attitude = "${req.params.att}"`, function(err, result) {
    if (err) throw err;
    
    let html = "<h1> Actors </h1>";

    // Here we begin an unordered list.
    html += "<ul>";

    // We then use the retrieved records from the database to populate our HTML file.
    for (var i = 0; i < result.length; i++) {
      html += "<li><p> ID: " + result[i].id + "</p>";
      html += "<p>School: " + result[i].name + " </p></li>";
      html += "<p>Coolness Points: " + result[i].coolness_points + " </p></li>";
      html += "<p>Attitude: " + result[i].attitude + " </p></li>";
    }

    // We close our unordered list.
    html += "</ul>";
    // Finally we send the user the HTML file we dynamically created.
    res.send(html);
  });
});

// Start our server so that it can begin listening to client requests.
app.listen(PORT, function() {
  // Log (server-side) when our server has started
  console.log("Server listening on: http://localhost:" + PORT);
});
