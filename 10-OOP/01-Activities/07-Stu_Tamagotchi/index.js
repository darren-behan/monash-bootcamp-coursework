const DigitalPal = function() {
  this.hungry = false;
  this.sleepy = false;
  this.bored = true;
  this.age = 0;
  this.outside = false;
  this.houseCondition = 100;
}

DigitalPal.prototype.feed = function() {
  if (this.hungry) {
    console.log("That was yummy!");
    this.hungry === false;
    this.sleepy === true;
  } else {
    console.log("I'm full.");
  }
}

DigitalPal.prototype.sleep = function() {
  if (this.sleepy === true) {
    console.log("Zzzzzzzz");
    this.sleepy === false;
    this.bored === true;
    increaseAge(sleep);
  } else {
    console.log("No way! I'm not tired.");
  }
}

DigitalPal.prototype.play = function() {
  if (this.bored === true) {
    console.log("Yay! Let's play!");
    this.bored === false;
    this.hungry === true;
    increaseAge(sleep);
  } else {
    console.log("Not right now. Later?");
  }
}

DigitalPal.prototype.increaseAge = function() {
  this.age += 1;
  console.log("Happy Birthday to me! I am "+age+" old!");
}

DigitalPal.prototype.bark = function() {
  console.log("Woof! Woof!");
}

DigitalPal.prototype.goOutside = function() {
  if (this.outside === false) {
    console.log("Yay! I love the outdoors!");
    this.outside === false;
    bark();
  } else {
    console.log("We're already outside though...");
  }
}

DigitalPal.prototype.goInside = function() {
  if (this.outside === true) {
    console.log("Do we have to? Fine...");
    this.outside === false;
    bark();
  } else {
    console.log("I'm already inside...");
  }
}

let dog = new DigitalPal();
let cat = new DigitalPal();

dog.feed();
dog.sleep();