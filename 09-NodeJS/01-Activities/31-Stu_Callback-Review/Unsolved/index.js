const fs = require("fs");

fs.readFile("animals.json", "utf8", function(err, data) {
  if (err) {
    throw err;
  }

  // Parse the JSON string to an object
  const animalJSON = JSON.parse(data);

  // Create two new arrays to contain the cats and dogs objects
  const dogs = [];
  const cats = [];

  for (let i = 0; i < animalJSON.length; i++) {
    const element = animalJSON[i];
    if (element.species === "dog") {
      dogs.push(element);
    } else {
      cats.push(element);
    }
  }
  console.log(dogs);
  console.log(cats);

  // below not complete -> refer to solved version
  fs.writeFile("dogs.json", JSON.stringify(dogs), function() {
    console.log("dogs.json");
  })
});
