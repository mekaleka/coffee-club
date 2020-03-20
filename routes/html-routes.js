var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {
  app.get("/coffeehouses/:id", async function(req, res) {
    let coffeeHouse = await db.CoffeeHouse.findOne({
      where: { id: req.params.id },
      include: [db.Review]
    });
    coffeeHouse.Reviews.forEach((review, index) => {
      db.User.findOne({
        where: { id: review.UserId }
      }).then(User => {
        coffeeHouse.Reviews[index].user = User;
        if (index === coffeeHouse.Reviews.length - 1) {
          res.json(coffeeHouse);
        }
      });
    });
  });
};
