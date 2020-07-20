const dogs = {
  raining: true,
  noise: "woof!",
  makeNoise: function() { 
    if (this.raining === true) {
      console.log(this.noise);
    }
  }
}

const cats = {
  raining: false,
  noise: "Meow!",
  makeNoise: function () { 
    if (cats.raining === false) {
      console.log(dogs.noise);
    }
  }
}

console.log(dogs.makeNoise());
console.log(cats.makeNoise());

