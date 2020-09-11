import { createCards, createCard } from "./cardCreation";
import { updateRating } from "./rating";
import { createEl } from "./domMethods";

loadImages();

function loadImages() {
  fetch("http://localhost:3000/api/images").then((res) => res.json())
    .then((data) => createCards(data));
}