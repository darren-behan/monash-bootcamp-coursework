var eventType = document.querySelector("#event-type"); 
var mouseEventsEl = document.querySelector("#click-events");
var keyEventsEl = document.querySelector("#key-events");

function toggleDisplay(event) {
  var value = event.target.value;
  if(value === "keydown") {
    mouseEventsEl.classList.add("hide");
    keyEventsEl.classList.remove("hide");
  }
  else {
    mouseEventsEl.classList.remove("hide");
    keyEventsEl.classList.add("hide");
  }
}

eventType.addEventListener("change", toggleDisplay);

var key = document.querySelector("#key");
var code = document.querySelector("#code");
var status = document.querySelector("#status");

var elements = [key, code, status];

document.addEventListener("keypress", logKey);

function logKey(event) {
  key.innerHTML = event.key;
  code.innerHTML = event.code;
  document.querySelector("#status").textContent = "KEYDOWN Event";
}

document.addEventListener("click", function(){
  document.querySelector("#target").innerHTML = event.target;
  document.querySelector("#x").innerHTML = event.x;
  document.querySelector("#y").innerHTML = event.y;
})