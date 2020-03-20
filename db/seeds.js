const db = require("../models");

db.sequelize.sync({force: true}).then(function(){
  db.CoffeeHouse.bulkCreate([
    {
      name: "Peixotto",
      address: "7246 Ojai Dr. Palmdale, CA",
      bio: "From our crops to your cup"
    },
    {
      name: "Starbucks",
      address: "7246 Ojai Dr. Palmdale, CA",
      bio: "From our crops to your cup"
    },
    {
      name: "Coffee Spot",
      address: "7246 Ojai Dr. Palmdale, CA",
      bio: "From our crops to your cup"
    }
  ]);
})