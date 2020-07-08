// function waitFor(seconds, cb) {
//   if (isNaN(seconds) || seconds < 1) {
//     return cb(Error("Parameter 'seconds' must be a positive number!"));
//   }

//   setTimeout(function() {
//     cb(null, "Success!");
//   }, seconds * 1000);
// }

// Refer to ./Solved/index.js file for correct answer
const fs = require("fs");

function waitFor(seconds, cb) {
  return new Promise(function(resolve, reject) {
    fs.readFile(path, encoding, function(err, data) {
      if (isNaN(seconds) || seconds < 1) {
        return reject(err("Parameter 'seconds' must be a positive number!"));
      }
    
      setTimeout(function() {
        resolve(data(null, "Success!"));
      }, seconds * 1000);
    })
  })
}


waitFor(2, function(err, msg) {
  if (err) {
    console.log(err);
    return;
  }

  console.log(msg);
})
