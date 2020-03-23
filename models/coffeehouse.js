module.exports = function(sequelize, DataTypes) {
  var CoffeeHouse = sequelize.define("CoffeeHouse", {
    id:{
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
      allowNull: false
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    address: {
      type: DataTypes.STRING,
      allowNull: false
    }
  });

  CoffeeHouse.associate = function(models) {
    CoffeeHouse.hasMany(models.Review, {
      onDelete: "cascade"
    });
  };

    return CoffeeHouse;
};
