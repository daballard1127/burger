var express = require("express");

var router = express.Router();

// Import the model burger.js to use its database functions.
var burger = require("../models/burger.js");

// Create all our routes and set up logic within those routes where required.
// Get routes connects to database and gets a list of burgers and renders the data using default html
router.get("/", function(request, result) {
    burger.all(function(data) {
        var hbsObject = {
            burgers: data
        };
        console.log(hbsObject);
        result.render("index", hbsObject);
    });
});
// Post routes collect burger information and adds it to the database
router.post("/", function(request, result) {
    burger.create([
        "burger_name"
    ], [
        request.body.name
    ], function() {
        result.redirect("/");
    });
});
// Edit whether the burger is eaten or not
router.put("/:id", function(request, result) {
    var condition = "id = " + request.params.id;
    console.log("condition", condition);
    // burger.update({
    //     devoured: request.body.devoured
    // }, condition, function() {
    //     result.redirect("/");
    // });
});

// Export routes for server.js to use.
module.exports = router;
