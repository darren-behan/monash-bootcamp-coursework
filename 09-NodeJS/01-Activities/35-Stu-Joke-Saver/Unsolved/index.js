const fs = require("fs");
const util = require("util");
const axios = require("axios");

const appendFileAsync = util.promisify(fs.appendFile);
const readFileAsync = util.promisify(fs.readFile);

const config = { headers: { accept: "application/json" } };

axios.get("https://icanhazdadjoke.com/", config).then(function (res) {
  const joke = res.data.joke;
  const jokesFile = "jokes.txt"

  fs.appendFile(jokesFile, joke + "\n", function () {
    console.log("success");
  });
});
