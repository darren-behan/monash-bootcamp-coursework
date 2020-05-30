// array of images
// images should be inside a tags
// add eventlistener - click for the previous button and the next button
// function - if, else statement
// cycle through the array of images when the buttons are clicked
// if we get to the end, it should start over
// images should be clickable and redirect to the URL

var images = [
  “https://picsum.photos/300/200”,
  “https://picsum.photos/300/201”,
  “https://picsum.photos/300/202”,
  “https://picsum.photos/300/203”
];

var imgEl = document.querySelector(“img”)
imgEl.setAttribute(“src”,images[0]);
var prevEl = document.querySelector(“.prev”)
var nextEl = document.querySelector(“.next”)
var position = 0;
prevEl.addEventListener(“click”, function(event) {
  event.preventDefault();
  if (images[position] === 0) {
      imgEl.setAttribute(“src”,images[3]);
  } else {
      imgEl.setAttribute(“src”,images[position]);
      position--;
      console.log(images[position]);
  }
});

nextEl.addEventListener(“click”, function(event) {
  event.preventDefault();
  if (images[position] === 3) {
      imgEl.setAttribute(“src”,images[0]);
  } else {
      imgEl.setAttribute(“src”,images[position]);
      position++;
      console.log(images[position]);
  }
  // for (i = 0; i < images.length; i++)  {
  //     imgEl.setAttribute(“src”,images[i]);
  //     console.log(i);
  // }
});