var todoInput = document.querySelector("#todo-text");
var todoForm = document.querySelector("#todo-form");
var todoList = document.querySelector("#todo-list");
var todoCountSpan = document.querySelector("#todo-count");

var todos = ["Learn HTML", "Learn CSS", "Learn JavaScript"];

function renderToDo() {
  for (var i = 0; i < todos.length; i++) {
    var todo = todos[i];
    var childHTML = document.createElement("li");
    childHTML.innerHtml = todo;
    todoList.appendChild(childHTML);
  }
}

renderToDo();