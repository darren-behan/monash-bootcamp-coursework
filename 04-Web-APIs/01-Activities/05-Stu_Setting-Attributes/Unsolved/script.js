// * Open `index.html` and familiarize yourself with the structure of the HTML.

// * Inside of your provided `script.js` complete the following: 

//   * Give a `src` and `alt` attribute to the 3 provided `img` tags.

//   * Give a `href` attribute to the 3 provided `a` tags.`

//   * Add styles via `setAttribute` to make the page look decent. Recommended: margins and padding.

var imgEl = document.querySelectorAll("img");

for (var i = 0; i < imgEl.length; i++) {
  imgEl[i].setAttribute("src", "images/image_1.jpg");
}

// imgEl[0].setAttribute("src", "images/image_1.jpg");
// imgEl[0].setAttribute("alt", "christine");
// imgEl[1].setAttribute("src", "images/image_2.jpg");
// imgEl[1].setAttribute("alt", "christine");
// imgEl[2].setAttribute("src", "images/image_3.jpg");
// imgEl[2].setAttribute("alt", "christine");

var aTag = document.querySelectorAll("a");

for (var i = 0; i < aTag.length; i++) {
  aTag[i].setAttribute("href", "https://google.com");
}

// aTag[0].setAttribute("href", "https://google.com");
// aTag[1].setAttribute("href", "https://google.com");
// aTag[2].setAttribute("href", "https://google.com");