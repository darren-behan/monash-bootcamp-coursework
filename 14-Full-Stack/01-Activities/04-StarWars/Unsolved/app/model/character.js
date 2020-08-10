const Sequelize = require("sequelize");
const sequelize = require("../config/connection.js");

const Starwars = sequelize.define("allcharacters", {
  routeName: Sequelize.STRING,
  name: Sequelize.STRING,
  role: Sequelize.STRING,
  role: Sequelize.INTEGER,
  age: Sequelize.INTEGER,
  forcePoints: Sequelize.INTEGER
});

Starwars.sync();

module.exports = Starwars;