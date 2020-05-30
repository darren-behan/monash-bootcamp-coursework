var statusSpan = document.querySelector("#status");
var statusToggle = document.querySelector("#status-toggle");
var playButton = document.querySelector("#play");
var pauseButton = document.querySelector("#pause");
var stopButton = document.querySelector("#stop");
var minutesDisplay = document.querySelector("#minutes");
var secondsDisplay = document.querySelector("#seconds");
var workMinutesInput = document.querySelector("#work-minutes");
var restMinutesInput = document.querySelector("#rest-minutes");
var totalSeconds = 0;
var secondsElapsed = 0;
var timer;
var interval;
// PART ONE
// timer -> 1 second -> 1000
// timer in startTimer - done
// seconds -> increment seconds in timer - done
// update timer - done
// when timer done alert the user - done
function renderTimer() {
  minutesDisplay.textContent = Math.floor((totalSeconds - secondsElapsed) / 60);
  secondsDisplay.textContent = (totalSeconds - secondsElapsed) % 60;
}
function startTimer() {
  totalSeconds = workMinutesInput.value * 60;
  var timerRunningFunction = function () {
    secondsElapsed++; // -- cut off seconds ticking // 5 seconds
    renderTimer();
    if (secondsElapsed >= totalSeconds) {
      alert(" Time to rest");
      clearInterval(timer);
    }
  };
  timer = setInterval(timerRunningFunction, 1000);
}
playButton.addEventListener("click", startTimer);
//PART TWO
// - event listener on pause -- done
//   - clear timer -- done
// - event listerner on stop
//   - clear timer -- done
//   - reset seconds elapsed;
//   - reset the total seconds
var pauseFunction = function () {
  clearInterval(timer);
};
var stopFunction = function () {
  clearInterval(timer);
  secondsElapsed = 0;
  totalSeconds = workMinutesInput.value * 60;
  renderTimer();
};
pauseButton.addEventListener("click", pauseFunction);
stopButton.addEventListener("click", stopFunction);

// PART THree:
// addd event to the toggle
// clear the old timer
// reset the timer with new value of rest input