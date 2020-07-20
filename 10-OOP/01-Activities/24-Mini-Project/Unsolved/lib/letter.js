class Letter {
  constructor(char) {
    this.char = char;
    this.charValue = false;
  }

  toString(char) {
    if (char) {
      return char;
    } else {
      return "_";
    }
  }

  compare(char) {
    if (char === this.char) {
      this.charValue = true;
    }
  }
}

module.exports = Letter;