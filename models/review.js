module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    body: {
      type: DataTypes.TEXT,
      allowNull: false
    }
  });

  Review.associate = function(models) {
    Review.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });

    Review.belongsTo(models.CoffeeHouse, {
      foreignKey: {
        alllowNull: false
      }
    });
  };

  return Review;
};
