// Import MySQL connection.
var connection = require("../config/connection.js");


connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  };
  console.log('connected as id ' + connection.threadId);
});


// Object for all our SQL statement functions.
var orm = {
  //selectAll()
  selectAll: function(cb) {
    var queryString = "SELECT * FROM burgers";
    
    connection.query(queryString, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
  
  //insertOne()
  insertOne: function(burger_name, cb) {
    var queryString = "INSERT INTO burgers SET ?";

    connection.query(queryString, {
      burger_name: burger_name,
      devoured: false,
      date: timestamp
    }, function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  },
 
  //updateOne()
  updateOne: function(burgerId, cb) {
    var queryString = "UPDATE burgers SET ? WHERE ?";

    connection.query(queryString, [{devoured: true},{id: burgerId}], function(err, result) {
      if (err) {
        throw err;
      }
      cb(result);
    });
  }
};

// Export the orm object for the model (burger.js).
module.exports = orm;// Import MySQL connection.
