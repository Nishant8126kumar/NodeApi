// var mongo = require('mongodb').MongoClient
// var url = "mongodb://localhost:27017/";

const MongoClient = require('mongodb').MongoClient;
const url = "mongodb://localhost:27017";
var _db;
try {
  module.exports = {
    connectToServer: function () {
      MongoClient.connect(url, { useUnifiedTopology: true }, function (err, client) {
        _db = client.db('EmployeeDetails');
        // return callback( err );
      });
    },
    getDb: function () {
      return _db;
    }
  };
}
catch (e) {
  console.log("Some Exception Are Occured=:" + e.message);
}

