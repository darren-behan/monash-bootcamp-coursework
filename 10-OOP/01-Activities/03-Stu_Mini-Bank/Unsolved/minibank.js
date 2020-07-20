function MiniBank(balance) {
  this.balance = balance;
  this.statement = [balance];
  this.getBalance = function() {
    return this.balance;
  },
  this.printBalance = function() {
    console.log(`Balance: ${this.getBalance()}`);
  },
  this.setBalance = function(value) {
    this.balance = value;
  },
  this.updateStatement = function(number) {
    this.statement.push(number);
  },
  this.getStatement = function() {
    return this.statement;
  },
  this.printStatement = function() {
    for (value of this.statement) {
      console.log(value + "\n");
    }
  },
  this.deposit = function(value) {
    this.updateStatement(value);
    this.setBalance(value);
  },
  this.withdraw = function() {
    updateStatement(number);
    this.setBalance(value);
  }
}

const bank = new MiniBank(1000);
bank.printBalance();

