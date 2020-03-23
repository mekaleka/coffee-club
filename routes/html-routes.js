var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {
<<<<<<< HEAD
    app.get("/", function(req, res) {
        db.CoffeeHouse.findAll().then(function(data) {
            res.render("index", data);
        });
    });
    app.get("/coffeehouse", function(req, res) {
        db.CoffeeHouse.findAll().then(function(data) {
            console.log(data);
            res.render("coffeehouse", {
                coffeehouse: data
            });
        });
    });

    app.get("/profile/:id", function(req, res) {
        db.User.findOne({
            where: {
                id: req.params.id
            }
        }).then(function(dbUser) {
            const userObj = {
                user: dbUser
            };
            console.log(userObj);
            res.render("user-profile", userObj);
        });

        // res.render("user-profile");
    });

    app.get("/user/:id", function(req, res) {
        db.Reviews.findAll({
            where: {
                UserId: req.params.userid
            }
        }).then(function(dbReviews) {

            const urObject = {
                userReviews: dbReviews
            };
            console.log(urObject);
            res.render("view-user");
        })
    });
};
=======
  app.get("/", function(req, res) {
    // if no user is signed in render the index view
    db.CoffeeHouse.findAll().then(function(data) {
      if (!req.user) {
        return res.render("index", {
          coffeeshops: data.map(shop => shop.toJSON())
        });
      }
      res.render("coffeeshops", {
        coffeeshops: data.map(shop => shop.toJSON())
      });
    });
  });

  app.get("/signup", function(req, res) {
    res.render("signup");
  });

  app.get("/shop/:id", function(req, res) {
    db.CoffeeHouse.findAll().then(function(dbCoffeeHouses) {
      db.CoffeeHouse.findOne({
        where: {
          id: req.params.id
        },
        include: [db.Review]
      }).then(function(dbCoffeHouse) {
        res.render("coffeehouse", {
          ...dbCoffeHouse.toJSON(),
          coffeeshops: dbCoffeeHouses.map(shop => shop.toJSON())
        });
      });
    });
  });

  app.get("/profile/:id", function(req, res) {
    db.User.findOne({
      where: {
        id: req.params.id
      }
    }).then(function(dbUser) {
      res.render("user-profile", dbUser.toJSON());
    });
  });
};
>>>>>>> e5349e76a046703d5a289e08d4aa78c86f9aa576
