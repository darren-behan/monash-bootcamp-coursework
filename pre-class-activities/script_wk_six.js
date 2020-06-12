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

