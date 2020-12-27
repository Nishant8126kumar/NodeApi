var clgRepo=require('./Repositories/Connection')
var clgService=require('./Service/college-service')
var clgResourse=require('./Resourse/College-resourse')
var adminResourse=require('./Resourse/AdminResourse')

var bodyparse = require('body-parser')
// var bodyPaser=require('')

var express=require('express')
var app=express();
app.use(bodyparse.json());
app.use(bodyparse.urlencoded({extended:true}))
var htpp=require('http')
const port=4000;

app.use('/admin', adminResourse)
app.use('/iimt',clgResourse)
app.set('view engine', 'ejs')

var server=htpp.createServer(app)

server.listen(port,function(err,result){
    if(err)
    {
        console.log("Some Error Occured");
        
    }
    else{
        console.log("Server Listen This Port=:"+port);
        
    }
    clgRepo.connectToServer()
})





// https://eclipse-ee4j.github.io/jersey.github.io/documentation/latest/deployment.html#environmenmt.appmodel
// https://www.programiz.com/kotlin-programming/examples
//https://stackoverflow.com/questions/46452041/send-json-response-using-jersey-from-mongodb
//https://dagger.dev/dev-guide/
// https://data-flair.training/blogs/kafka-serialization-and-deserialization/