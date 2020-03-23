// Requiring our models and passport as we've configured it
var db = require("../models");
var passport = require("../config/passport");

module.exports = function(app) {
    // Using the passport.authenticate middleware with our local strategy.
    // If the user has valid login credentials, send them to the members page.
    // Otherwise the user will be sent an error
    app.post("/api/login", passport.authenticate("local"), function(req, res) {
        // Sending back a password, even a hashed password, isn't a good idea
        res.json({
            email: req.user.email,
            id: req.user.id
        });
    });

    // Route for signing up a user. The user's password is automatically hashed and stored securely thanks to
    // how we configured our Sequelize User Model. If the user is created successfully, proceed to log the user in,
    // otherwise send back an error
    app.post("/api/signup", function(req, res) {
        db.User.create({
                email: req.body.email,
                password: req.body.password
            })
            .then(function() {
                res.redirect(307, "/api/login");
            })
            .catch(function(err) {
                res.status(401).json(err);
            });
    });

    // Route for logging user out
    app.get("/logout", function(req, res) {
        req.logout();
        res.redirect("/");
    });

    // Route for getting some data about our user to be used client side
    app.get("/api/user_data", function(req, res) {

        // db.User.find({ id: 2 }).then(function(data) {
        //     // db.Coffeehouse.find({}).then(function(coffee){
        //     res.render("user-profile", { userdata: data })
        // })

        // })
        // if (!req.user) {
        //     // The user is not logged in, send back an empty object
        //     res.json({});
        // } else {
        //     // Otherwise send back the user's email and id
        //     // Sending back a password, even a hashed password, isn't a good idea
        //     res.json({
        //         email: req.user.email,
        //         id: req.user.id
        //     });
        // }
    });

    app.post("/api/review", function(req, res) {
        console.log(req.body);
        db.Review.create({
            comment: req.body.comment,
            rating: req.body.rating,
            CoffeeHouseId: req.body.CoffeeHouseId,
            UserId: req.body.UserId
        }).then(newReview => {
            res.json(newReview);
        });
    });

    app.get("/api/coffehouse", function(req, res) {
        db.CoffeeHouse.findAll().then(function(dbCoffeehous) {
            res.json(dbCoffeHouse);
        });
    });

    //   db.Reviews.findAll({
    //     where: {
    //       CoffeeHouseId = req.params.chid
    //     }
    //   }).then(function(dbReviews) {
    //     res.json(dbReviews);
    //   })

    // })

    // app.get("api/user/:userid", function (req, res) {

    //   db.Reviews.findAll({
    //     where: {
    //       UserId = req.params.userid
    //     }
    //   }).then(function(dbReviews) {
    //     res.json(dbReviews);
    //   })

    // })


};