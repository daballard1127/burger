// *********************************************************************************
// orm.js - This file offers a set of easier-to-use methods for interacting with the MySQL db.
// *********************************************************************************

// Dependencies
// =============================================================
var connection = require("../config/connection.js");

// ORM
// =============================================================

var tableName = "burgers";

var orm = {

  // Here our ORM is creating a simple method for performing a query of the entire table.
  // We make use of the callback to ensure that data is returned only once the query is done.
  all: function(tableName,callback) {
    var string = "SELECT * FROM " + tableName + ";";
    console.log("Query", string);
    connection.query(string, function(err, result) {
      if (err) {
        throw err;
      }
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for performing a query of a single burgername in the table.
  // Again, we make use of the callback to grab a specific burgername from the database.
  update: function(burger_name, callback) {
    var s = "UPDATE " + tableName + "SET devoured=?"  +"where burger_name=?" ;

    connection.query(s, [burger_name], function(err, result) {
      callback(result);
    });
  },

  // Here our ORM is creating a simple method for adding burgers to the database
  
  create: function(burger_name, callback) {

    var s = "INSERT INTO " + tableName + " (burger_name, devoured, `Date`) VALUES (?,?,?)";

    connection.query(s, [burger_name, devoured, `Date`], function(err, result) {
      callback(result);
    });

  }

};

module.exports = orm;
