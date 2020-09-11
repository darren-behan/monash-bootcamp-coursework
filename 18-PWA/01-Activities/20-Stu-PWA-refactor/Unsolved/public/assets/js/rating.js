export function updateRating(event) {
  const [id, , rating] = event.currentTarget.getAttribute("for").split("-");
  fetch(`http://localhost:3000/api/images/${id}`, {
    method: "PUT",
    body: JSON.stringify({ rating }),
    headers: {
      "Content-Type": "application/json"
    }
  }).then(function() {
    loadImages();
  });

}