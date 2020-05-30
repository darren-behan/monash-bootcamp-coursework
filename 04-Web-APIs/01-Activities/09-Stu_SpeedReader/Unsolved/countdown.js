var oElem = document.getElementById("my_box");

var nIntervId;
 
function changeColor() {
  nIntervId = setInterval(flashText, 1000);
}

function flashText() {
  oElem.style.color = oElem.style.color == 'red' ? 'blue' : 'red';
}

function stopTextColor() {
  clearInterval(nIntervId);
}