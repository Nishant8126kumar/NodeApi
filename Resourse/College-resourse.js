var express = require('express');
var app = express.Router();
var clgService = require('../Service/college-service')

app.get('/', function (req, res) {
    clgService.getStudentAllDetails().then(result => {
        res.status(200).json({
            "data": result,
            "error": null
        })
    })
})

app.get('/:department', function (req, res) {
    var courseId;
    var data = req.body.department;
    console.log(data);
    if (data == "BCA") {
        courseId = "02";
    }
    else {
        courseId = "04"
    }
    console.log("Id=:" + courseId);
    clgService.getDepptStudentDetails(courseId).then(result => {
        res.status(200).json(
            {
                "data": result,
                "error": null
            }
        )
    })
})
app.post('/:newStudent', function (req, res) {
    var data = req.body;
    console.log(data);
    var data = {
        "deppt": req.body.deppt,
        "studentName": req.body.studentName,
        "studentEmail": req.body.studentEmail,
        "contactNumber": req.body.contactNumber,
        "address": req.body.contactNumber,
        "adharNumber": req.body.adharNumber
    }
    //console.log(data);

    // res.status(200).json({
    //     "message": "Welcome From Post Student Details side"
    // })
    // "studentName" : "Nishant Kumar Sharma",
    //         "contactNumber" : "8126632693",
    //         "address" : "Aligarh",
    //         "adharNumber" : "547834289"
})
app.delete('/:studentName', function (req, res) {
    res.status(200).json({
        "message": "Welcome From Student Detais Delete Side"
    })
})
module.exports = app;




