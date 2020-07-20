const rolePlayingGame = function(name, profession, age, strength, HitPoints) {
  this.name = name;
  this.profession = profession;
  this.age = age;
  this.strength = strength;
  this.HitPoints = HitPoints;
  function PrintStats() {
    console.log(this.name, this.profession, this.age, this.strength, this.HitPoints);
  }
  this.levelUp = function() {
    this.age++;
    this.strength += 5;
    this.HitPoints += 25;
  }
}

rolePlayingGame.prototype.attack = function(character) {
  this.HitPoints -= character.strength;
}

rolePlayingGame.prototype.isAlive = function() {
  if (this.HitPoints > 0) {
    console.log("alive");
  } else {
    console.log("dead");
  }
}