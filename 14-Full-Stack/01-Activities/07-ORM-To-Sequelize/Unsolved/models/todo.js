// Create a Todo model with columns for "text" (DataTypes.STRING), and "complete" (DataTypes.BOOLEAN).

module.exports = function(sequelize, DataTypes) {
  const model = sequelize.define("Todo", {
    test: DataTypes.STRING,
    complete: DataTypes.BOOLEAN,
  });

  return model;
}