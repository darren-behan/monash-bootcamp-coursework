// Create your HTML Page via DOM Methods here!

var tagH1 = document.createElement("h1");
tagH1.textContent = "This is a h1 tag.";
document.body.appendChild(tagH1);
document.body.children[1].style.textAlign = "center";

var tagH2 = document.createElement("h2");
tagH2.textContent = "This is a h2 tag.";
document.body.appendChild(tagH2);
document.body.children[2].style.textAlign = "center";

var imgEl = document.createElement("img");
document.body.appendChild(imgEl);
imgEl.setAttribute(
  "src",
  "../../05-Stu_Setting-Attributes/Unsolved/images/image_1.jpg"
);
