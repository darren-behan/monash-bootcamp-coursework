const Vehicle = require("./vehicle");
const Car = require("./car");

class Boat extends Vehicle {
  constructor(id, numberOfWheels, sound, crew) {
    super(id, numberOfWheels, sound, crew)

      this.crew = crew;
  }

  crewSoundOff() {
    console.log(this.crew);
  }
}

const boat = new Boat(1, 4, "loud", 4);
console.log(boat);
boat.crewSoundOff();
boat.useHorn();