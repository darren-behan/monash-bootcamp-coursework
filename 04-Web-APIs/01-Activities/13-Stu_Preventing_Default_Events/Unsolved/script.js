// Event Listener
// Add values from input to calculate tip and new total

var calcTip = document.querySelector("#submit");
var mealTotal = document.querySelector("total-amount");
var tipTotal = document.querySelector("tip-percent");
var newAmount = document.querySelector("new-total");

function sumTotal(x, y) {
  return parseFloat(x) + parseFloat(y);
}

function addTip(event){
  event.preventDefault();

  var total = mealTotal.value;
  var tip = tipTotal.value;
  var newTotal = sumTotal(total, tip);

  document.querySelector("#new-total").textContent = newTotal.toFixed(2);
  console.log(newTotal);
}

calcTip.addEventListener("click", addTip);