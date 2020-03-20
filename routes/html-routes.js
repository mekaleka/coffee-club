var isAuthenticated = require("../config/middleware/isAuthenticated");
var db = require("../models");

module.exports = function(app) {


app.get("/", function (req, res) {
    res.render("index")
});


app.get("/coffeehouse", function (req, res) {
    res.render("coffeehouse")
});

app.get("/profile", function (req, res) {
    res.render("user-profile");
})

app.get("/user/", function (req, res) {

    res.render("view-user")
})


};
