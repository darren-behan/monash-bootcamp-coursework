var incEl = document.getElementById("increment");
var decEl = document.getElementById("decrement");
var countEl = document.getElementById("count");

var count = 0;

incEl.addEventListener("click", function() {
  document.getElementById("count").innerHTML = count++;
  console.log(document.getElementById("count").innerHTML = count++)
})

decEl.addEventListener("click", function() {
  document.getElementById("count").innerHTML = count--;
  console.log(document.getElementById("count").innerHTML = count--)
})