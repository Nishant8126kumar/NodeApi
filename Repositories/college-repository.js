var monog = require('mongodb').MongoClient;

var url = "mongodb://localhost:27017"

var db;

try {
    module.exports = {
        connectToDatabase: function () {
            monog.connect(url, { useUnifiedTopology: true }, function (err, client) {
                if (err) {
                    throw err
                }
                else {
                    db = client.db("EmployeeDetails")
                }
            })
        },
        getDb: function () {
            return db;
        }
    }
}
catch (e) {

}


// async function getData() {
//     monog.connect(url, { useUnifiedTopology: true }, function (err, db) {
//         if (err) {
//             throw err;
//         }
//         else {
//             var dbo = db.db("EmployeeDetails")
//             dbo.collection("Salary").find({}).toArray(function (err, result) {
//                 if (err) {
//                     throw err
//                 }
//                 else {
//                     console.log(result);
//                 }
//             })
//         }
//     })
// }
// getData();