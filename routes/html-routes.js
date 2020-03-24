var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

async function allCoffeeHouses(){
    return db.CoffeeHouse.findAll();
}

module.exports = function(app) {
    app.get("/",  function(req, res) {

        // if no user is signed in render the index view
        allCoffeeHouses().then(function(data){
            if (!req.user) {
                return res.render("index", {
                    coffeeshops: data.map(shop => shop.toJSON()),
                    user:req.user
                });
            }
            res.render("coffeeshops", {
                coffeeshops: data.map(shop => shop.toJSON()),
                user:req.user
            });
        })

    });

    app.get("/signup", function(req, res) {
        res.render("signup");
    });

    app.get("/shop/:id", function(req, res) {
        allCoffeeHouses().then(function(dbCoffeeHouses) {
            db.CoffeeHouse.findOne({
                where: {
                    id: req.params.id
                },
                include: [db.Review]
            }).then(function(dbCoffeHouse) {
                res.render("coffeehouse", {
                    ...dbCoffeHouse.toJSON(),
                    coffeeshops: dbCoffeeHouses.map(shop => shop.toJSON()),
                    user:req.user
                });
            });
        });
    });

    app.get("/profile/:id", function(req, res) {
        allCoffeeHouses().then(function (dbCoffeeHouses) {
            db.User.findOne({
                where: {
                    id: req.params.id
                }
            }).then(function(dbUser) {
                res.render("user-profile", {
                    profile: dbUser.toJSON(),
                    user: req.user,
                    coffeeshops: dbCoffeeHouses.map(shop => shop.toJSON())
                });
            });
        })

    });
};
