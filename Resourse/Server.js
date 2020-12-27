var http = require('http');
var route = require('./AdminResourse')
var express = require('express')
var bodyparse = require('body-parser')
var database = require('../Repositories/Connection')
// var businessData = require('../Repositories/college-repository')
var routerClg = require('../Resourse/College-resourse')
var ejs = require('ejs')
//var middleware=require('./AdminResourse')
var app = express();
const port = 4000;
app.use(bodyparse.urlencoded({ extended: true }))
app.use(bodyparse.json())
app.use('/admin', route)
app.use('/iimt', routerClg)
app.set('view engine', 'ejs')
// app.use(function(req,res,next)
// {
//     console.log("Current URL is=:"+req.originalUrl);

// })
var server = http.createServer(app);

server.listen(port, function (err, result) {
    if (err) {
        throw err
    }
    else {

        console.log("Server Listen This Port=:" + port);
    }
    database.connectToServer()
})