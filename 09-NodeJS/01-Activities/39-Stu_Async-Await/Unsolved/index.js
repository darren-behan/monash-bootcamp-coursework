const fs = require("fs");
const util = require("util");

const readFileAsync = util.promisify(fs.readFile);
const writeFileAsync = util.promisify(fs.writeFile);

async function combineAnimals() {
  const cat = await readFileAsync("cat.json", "UTF8");
  const dog = await readFileAsync("dog.json", "UTF8");
  const goldfish = await readFileAsync("goldfish.json", "UTF8");
  const hamster = await readFileAsync("hamster.json", "UTF8");
  try {
    console.log(cat);
    console.log(dog);
    console.log(goldfish);
    console.log(hamster);
  } catch(err) {
    console.log(err);
  }
}

combineAnimals();
