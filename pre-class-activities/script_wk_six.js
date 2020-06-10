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

// instructors solution

