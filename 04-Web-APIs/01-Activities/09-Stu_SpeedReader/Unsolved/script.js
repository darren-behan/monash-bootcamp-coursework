var poem = "Some say the world will end in 🔥, Some say in ice. From what I’ve tasted of desire, I hold with those who favor fire. But if it had to perish twice, I think I know enough of hate. To say that for destruction ice, Is also great, And would suffice.";

// Splits sentence into words
var words = poem.split(" ");

var mainEl = document.getElementById("main");
var timerEl = document.getElementById("countdown");
var bodyEl = document.createElement("div");

// Store prompt value
var millisecondsPerWord = prompt("How many milliseconds between words would you like?");

function prepareRead() {
  // Create the countdown timer.
  var timeLeft = 5;

  var timeInterval = setInterval(function() {
    timerEl.textContent = timeLeft + " seconds remaining";
    timeLeft--;  

    if(timeLeft === 0) {
      timerEl.textContent = "";
      speedRead();
      clearInterval(timeInterval);
    }
    
  }, 1000);
}

function speedRead() {
  // Print words to the screen one at a time.
  var i = 0;

  mainEl.append(bodyEl);

  var poemInterval = setInterval(function() {
    if (words[i] === undefined) {
      clearInterval(poemInterval);
    } else {
      mainEl.textContent = words[i];
      i++;
    }
  }, millisecondsPerWord);
}

prepareRead();

// Pseudo Code:
// Split Poem into individual words array
// Store prompt in a variable
// Countdown timer begins
// Text print to screen with user input interval time