var maths = require("./maths");

var operation = process.argv[2];
var numOne = parseInt(process.argv[3]);
var numTwo = parseInt(process.argv[4]);

if (operation === "+") {
  console.log(maths.sum(numOne, numTwo));
} else if (operation === "-") {
  console.log(maths.difference(numOne, numTwo));
} else if (operation === "x") {
  console.log(maths.product(numOne, numTwo));
} else if (operation === "/") {
  console.log(maths.quotient(numOne, numTwo));
}