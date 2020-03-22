module.exports = function(sequelize, DataTypes) {
<<<<<<< HEAD
    var CoffeeHouse = sequelize.define("CoffeeHouse", {
        name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        bio: {
            type: DataTypes.STRING,
            allowNull: false
        },
        address: {
            type: DataTypes.STRING,
            allowNull: false
        }
=======
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
>>>>>>> 8c4c99f9ff72f2b755032f76a27bbcfb39cd993e
    });

<<<<<<< HEAD
    CoffeeHouse.associate = function(models) {
        CoffeeHouse.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return CoffeeHouse;
};
=======
  return CoffeeHouse;
};


>>>>>>> 8c4c99f9ff72f2b755032f76a27bbcfb39cd993e
