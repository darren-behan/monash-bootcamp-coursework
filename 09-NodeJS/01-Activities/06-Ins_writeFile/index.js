var fs = require("fs");

// write to log.txt, apply to index 2, callback function to log error, console.log success if processed successfully
fs.writeFile("log.txt", process.argv[2], function(err) {

  if (err) {
    return console.log(err);
  }

  console.log("Success!");

});
