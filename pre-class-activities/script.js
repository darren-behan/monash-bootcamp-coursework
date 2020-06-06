console.log("I've loaded");

// Write a function that takes in  a string and outputs the *first* occurrence of a character that does not repeat itself in that string

// Examples:
// Input: "the quick brown fox jumps over the calm kitten quietly"
// Output: "b"

// Input: "this hat is the greatest!"
// Output: "g"

// Input: "what a wonderful day it has been!"
// Output: "o"

// create an empty array
singleChar = [];

// create a function
function returnFirstCharOccurrence(string) {
  // create a loop
  for (var i = 0; i < string.length; i++) {
    // store individual string characters
    singleChar = string[i];
    console.log(singleChar);
    // create a condition to identify first occurrence of a character that does not repeat itself in that string
  }
}

// Pseudocode:
// loop through each characters of the input
// for each character, loop through the rest of the string to see whether that character are the same
// the very first time we see the same character from the second loop, return

function attempt1(input) {
  for (var i = 0; i < input.length; i++) {
    var firstChar = input.charAt(i);
    for (var j = i + 1; j < input.length; j++) {
      var secondChar = input.charAt(j);
      if (firstChar === secondChar) {
        return firstChar;
      }
    }
  }
}

// feedback: loop inside loop is quite bad. Imagine running a super long string. It will kiil the performance

function attempt2(input) {
  for (var i = 0; i < input.length; i++) {
    var firstChar = input.charAt(i);
    // search for the next input index of the firstChar
    // we use i + 1 because we want to search from the current position onward
    // because if not, then it might return us the current index
    var nextIndexOfChar = input.indexOf(firstChar, i+1);
    // indexOf will return -1 if it can't find
    if (nextIndexOfChar !== -1) {
      return firstChar;
    }
  }
}