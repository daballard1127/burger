// Import the ORM 
var orm = require("../config/orm.js");

var burger = {
    all: function(callback) {
        orm.all("burgers", function(result) {
            callback(result);
            console.log("orm model ALL is working")

        });
    },
    create: function(cols, vals, callback) {
        orm.create("burgers", cols, vals, function(result) {
            callback(result);
            console.log("orm model Insert is working")
        });
    },
    update: function(objColVals, condition, callback) {
        orm.update("burgers", objColVals, condition, function(result) {
            callback(result);
            console.log("orm model UPDATE is working")
        });
    }
};
    
// Export the database functions for burgers_controller.js 
module.exports = burger;