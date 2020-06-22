// Write a function that takes an array of integers as an input and outputs the first duplicate.

function attemptOne(inputArray) {
  var obj = {};
  for (var i = 0; i < inputArray.length; i++) {
    var number = inputArray[i];
    if (obj[number] === undefined) {
      obj[number] = 1;
    } else {
      console.log(number);
      break;
    }
  }
}

// Write a function that takes in a string and returns true if it’s a pangram or false otherwise.
// Pangram: a sentence that contains every letter in the alphabet.

// Ex:
// Input: “Watch Jeopardy, Alex Trebek’s fun TV quiz game”
// Output: true

// Input: “Five hexing wizard bots jump quickly”
// Output: true

// Input: “JavaScript is the best”
// Output: false

// write a function that accept 1 input (a string)
// the function will return a boolean

function attemptOne(myString) {
	var lowerString = myString.toLowerCase();
	// 	declare all of the possible character that we need to check
	var allCharacters = "abcdefghijklmnopqrstuvxyw";

	// 	loop through each character
	for (var char of allCharacters) {
		// check if the possible character is included in the string
		if (!lowerString.includes(char)) {
			// even if one of them is not in , then it's wrong
			return false;
		}
	}

	// 	If the return false doesn't run, it means that all characters is in the string
	return true;
}

// true
console.log(attemptOne("Watch Jeopardy Alex Trebek’s fun TV quiz game"));
// true
console.log(attemptOne("Five hexing wizard bots jump quickly"));
// false
console.log(attemptOne("JavaScript is the best"));

// Without running the code, determine what the following code will output and why:

var a = 1;
function outer() {
  var a = 2;
  function inner() {
    a++;
    console.log(2, a); // => NaN => hoisting => var a; is defined in line 63 before a++ and is undefined
    var a = 5;
  }
  console.log(1, a); // => 2 from line 61
  inner();
}
outer();
console.log(3, a); // => 1 from line 59