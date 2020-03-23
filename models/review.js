module.exports = function(sequelize, DataTypes) {
  var Review = sequelize.define("Review", {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true
    },
    comment: {
      type: DataTypes.STRING,
      allowNull: false
    },
    rating: {
      type: DataTypes.INTEGER,
      allowNull: false
    }
  });

  // Review.associate = function(models) {
    //   Review.belongsTo(models.User, {
      //     foreignKey: {
        //       allowNull: false
        //     }
        //   });
        
        //   Review.belongsTo(models.CoffeeHouse, {
          //     foreignKey: {
            //       alllowNull: false
  //     }
  //   });
  
  return Review;
};
