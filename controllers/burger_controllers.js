var express = require("express");
var router = express.Router();

//import the model (burger.js) to use its database functions
var burger = require("../models/burger.js");

//create all the routes and set up logic within those routes required
router.get("/", function(req, res){
    burger.all(function(data){
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        res.render("index", hbsObject);
    });
});

router.post("/burgers", function(req, res){
    burger.insertOne([
        'burger_name'
    ],[
        req.body.burger_name
    ], function(data){
        res.redirect('/');
    });
});

router.put("/burgers/:id", function(req, res){
    var condition = "id = " + req.params.id;

    console.log("condition", condition);

    burger.updateOne({
        devoured: true
    }, condition, function(data){
        res.redirect('/');
    });


    burger.delete(condition, function (result){
        if(result.affectedRows == 0){
            return res.status(404).end();
        } else {
            res.status(200).end();
        }
    });
});

//export routes for server.js to use
module.exports = router;