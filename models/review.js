module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    comment: {
      type: DataTypes.TE,
      allowNull: false
    },
    rating: {
      type: DataTypes.INT,
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
