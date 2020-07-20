class Store {
  constructor(name, stock) {
    this.name = name;
    this.stock = stock;
    this.revenue = 0;
  }

  printRevenue() {
    console.log(`The revenue so far is ${this.revenue}`);
  }

  welcome() {
    console.log(`Welcome to ${this.name}!`);
  }

  processProductSale(name) {
    for (const toy of this.stock) {
      if (toy.name === name) {
        this.revenue += toy.price;
        toy.count--;
        break;
      } else {
        console.log("no more");
      }
    }
  }

  replenishStock(name, count) {
    for (const toy in this.stock) {
      if (toy.name === name) {
        toy.count += count;
        break;
      }
    }
  }
}

module.exports = Store;
