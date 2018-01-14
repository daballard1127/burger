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
router.post("api/burger", function(request, result) {
    burger.create([
        "burger_name", "devoured"
    ], [
        request.body.burger_name, request.body.devoured
    ], function(result) {
        res.json({ id: result.insertId });
    });
});
// Edit whether the burger is eaten or not
router.put("/api/cats/:id", function(req, res) {
    var condition = "id = " + req.params.id;
  
    console.log("condition", condition);
  
    burger.update({
      devoured: req.body.devoured
    }, condition, function(result) {
      if (result.changedRows == 0) {
        // If no rows were changed, then the ID must not exist, so 404
        return res.status(404).end();
      } else {
        res.status(200).end();
      }
    });
});

// Export routes for server.js to use.
module.exports = router;
