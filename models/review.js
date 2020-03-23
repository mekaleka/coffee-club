module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
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
        allowNull: false
      }
    });
  };

  return Review;
};
