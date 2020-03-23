var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {
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

    res.render("user-profile");
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
