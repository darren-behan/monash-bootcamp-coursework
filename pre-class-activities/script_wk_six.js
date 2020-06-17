// Outputs average of all numbers

var numbers = [10, 20, 15];
var total = 0;

averageNum();

function averageNum () {
  for (var i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  average = total / numbers.length;
  console.log(average);
}

var sample = function(){
  var a = b = 3;
  console.log(a);
  console.log(b);
}
sample();

console.log("Is a defined?", typeof a !== undefined);
console.log("Is b defined?", typeof b !== undefined);

// Function that takes in an input and returns true if it's an integer and false otherwise

function solution(input) {
  // use typeof and compare to number(integer) => not correct
  var type = typeof input;
  console.log('way 1: ', type === "number");
  // Number.isInteger => correct
  console.log('way 2: ', Number.isInteger(input));
  // parseInt => compare result => correct
  console.log('way 3: ', parseInt(input) === input);
}

solution(7);
solution("7");
solution(4.3);