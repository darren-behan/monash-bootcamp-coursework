const Vehicle = require("./vehicle");

class Car extends Vehicle {
  constructor(id, numberOfWheels, sound, color, numberOfPassengers) {
    super(id, numberOfWheels, sound)

      this.color = color;
      this.numberOfPassengers = numberOfPassengers;
  }

  checkPassengers() {
    if (this.numberOfPassengers >= 4) {
      console.log("Max passengers is 4");
    }
  }
}

const car = new Car(1, 4, "loud", "red", 5);
console.log(car);
car.checkPassengers();
car.useHorn();