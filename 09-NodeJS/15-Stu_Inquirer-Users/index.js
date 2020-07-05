var inquirer = require("inquirer");

inquirer
  .prompt([
    {
      type: "input",
      message: "What is your name?",
      name: "name"
    },
    {
      type: "input",
      message: "What languages do you know?",
      name: "language"
    },
    {
      type: "input",
      message: "What is your preferred method of communciation?",
      name: "method"
    }
  ])
  .then(function(response) {
    console.log(response[0].name);
    console.log(response[1].name);
    console.log(response[2].name);
  });