var fs = require("fs");

// append to log.txt, append to index 2, callback function to log error, console.log success if processed successfully
fs.appendFile("log.txt", "\n" + process.argv[2], function (err) {
  if (err) throw err;
  console.log("Saved!");
});
