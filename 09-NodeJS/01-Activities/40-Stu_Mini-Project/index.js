// fs is a Node standard library package for reading and writing files
var fs = require("fs");
var inquirer = require("inquirer");

inquirer.prompt([
  {
    type: "input",
    name: "name",
    message: "What is the your name?"
  }
]).then(function(data) {

  // write to index.html, populate input data, callback function to log error, console.log success if processed successfully
  fs.writeFile("index.html", 
    `<html>
    <body>
    <h1>${data.name}</h1>
    </body>
    </html>`,
    
    function(err) {

    if (err) {
      return console.log(err);
    }

    console.log("Success!");

  });
});