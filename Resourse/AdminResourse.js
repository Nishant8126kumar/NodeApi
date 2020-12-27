var express = require('express');
var app = express.Router();
var database = require('../Repositories/Connection')
var data = require('../Repositories/college-repository')
var adminService = require('../Service/AdminService')

//var adminService=require('../Service/AdminService')

// const middle=function(req,res,next)
// {
//     console.log("Current Url is =:"+res.originalUlr);
//     next();
// }

// app.use(function (req, res, next) {
//     console.log("Current Url=:" + req.originalUrl);
//     //console.log(res);
//     next();
// })

app.get('/', function (req, res) {

    console.log(req.query.Name);

    adminService.getAllInfo().then(data => {
        res.status(200).json({
            "Error": null,
            "data": data
        })
    })
        .catch(e => {
            console.log("Some Exception Occured");
            res.status(500).json({
                "error": e,
                "data": null
            })

        })
})
app.get('/:empName', function (req, res) {
    var userInfo = req.params.empName;

    adminService.getSpecificStudentData(userInfo).then(data => {
        res.status(200).json({
            "data": data,
            "Error": null
        })
            .catch(e => {
                console.log("Some Exception Occured");
                res.status(500).json({
                    "error": e,
                    "data": null
                })
            })
    })


    // database.getDb().collection("Fretron").findOne({ "Name": userInfo }, function (err, result) {
    //     if (err) {
    //         res.send(err)
    //     }
    //     else {
    //         res.status(200).json({
    //             "Error": null,
    //             "data": result
    //         })
    //     }
    //     //console.log(result);
    // })
    // console.log(userInfo);
})
app.post('/', function (req, res) {
    console.log(req.query);


    database.getDb().collection("Fretron").insertOne(req.body, function (err, result) {
        if (err) {
            throw err
        }
        else {
            res.status(200).json({
                "Message": "Success",
                "data": result
            })

        }
    });

    // res.status(200).json({
    //     "Message": "Welcome From Post Request Side"
    // })

})
app.delete('/:empName', function (req, res) {
    var emp = req.params.empName;
    console.log(emp);
    

    database.getDb().collection("Fretron").deleteOne({ "Name": emp }, function (err, result) {
        if (err) {
            throw err
        }
        else {
            res.status(200).json({
                "Message": "Data Delete Successfully",
                "Data": result
            })
        }
    })

    // res.status(200).json({
    //     "Message":"Welcome From Delete Method"
    // })
    //res.send("ok")
})

module.exports = app;