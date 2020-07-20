class Vehicle {
  constructor(id, numberOfWheels, sound) {
    this.id = id;
    this.numberOfWheels = numberOfWheels;
    this.sound = sound;
  }

  printInfo() {
    console.log(`This vehicle has ${this.numberOfWheels} wheels`);
    console.log(`This vehicle has an id of ${this.id}`);
  }

  useHorn() {
    console.log(this.sound);
  }
}
const vehicle = new Vehicle(1, 4, "loud");
// console.log(vehicle);

module.exports = Vehicle;