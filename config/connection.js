// *********************************************************************************
// CONNECTION.JS - THIS FILE INITIATES THE CONNECTION TO MYSQL
// *********************************************************************************

// Requiring mysql package
var mysql = require("mysql");
var connection;
if (process.env.JAWSDB_URL){
  connection = mysql.createConnection(process.env.JAWSDB_URL);
}else{
  connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'burgers_db'
  });
};

// Setting up our connection information
// var source = {
//   localhost: {
//     port: 3306,
//     host: "localhost",
//     user: "root",
//     password: "",
//     database: "burgers_db"
//   }
// };


// Creating our connection
// var connection = mysql.createConnection(source.localhost);


Connecting to the database.
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

// Exporting our connection
connection.connect();
module.exports = connection;

// Used standard connection js code to connect to burgers database
