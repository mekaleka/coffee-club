module.exports = function(sequelize, DataTypes) {
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
    });

    CoffeeHouse.associate = function(models) {
        CoffeeHouse.hasMany(models.Review, {
            onDelete: "cascade"
        });
    };

    return CoffeeHouse;
};