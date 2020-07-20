class Character {
  constructor(name, strength, hitPoints) {
    this.name = name;
    this.strength = strength;
    this.hitPoints = hitPoints;
  }
  // method which prints all of the stats for a character
  printStats() {
    console.log(`Stats for ${this.name} are as following:`);
    console.log(`Each attack will do ${this.strength} damage.`);
    console.log(`${this.name} has ${this.hitPoints} hit points remaining!`);
    console.log("------------");
  }
  // method which determines whether or not a character's "hitPoints" are less then zero
  // and returns true or false depending upon the outcome
  isAlive(hitPoints) {

  }

  // method which takes in a second object and decreases their "hitPoints" by this character's strength
  attack(opponent) {
    // console.log which character was attacked and how much damage was dealt
    opponent.hitPoints = opponent.hitPoints - this.strength;
    // Then, change the opponent's hitPoints to reflect this
  }
}

// Create two unique characters using the "character" class
const characterOne = new Character("Rupert", 10, 5);
console.log(characterOne);
const characterTwo = new Character("Ed", 10, 5);
console.log(characterTwo);

// Create an interval that alternates attacks every 2000 milliseconds

// characterOne.attack(characterTwo);

// characterOne.printStats();
// characterTwo.printStats();
