var express = require("express");
var router = express.Router();
var db = require("../models");
// index
router.get ("/", function(req, res){
db.CoffeHouse.findAll({
    include:[db.Review]

}).then(function(dbCoffehouse){
    res.render("index",{coffe_data:dbcoffeehouse})
})

})

