var express = require('express');
var app = express();
let request = require('request');
// define routes here..

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

/*app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(req);
    request({
        method: 'GET',
        url: '',
        headers: {}
    },function(error,response,body){
        console.log("Response body ",body)
        res.status(200).send(body);
        res.send(body);
    })
    
    
});*/

app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    request(
        {
        method: 'POST',
        url: process.env.URL,
        headers:{},
        body: JSON.stringify(req.body)
    
        },
        function(error,response,body){
        console.log("Response body ",body);
        console.log("body.errorMessage",body.errorMessage)
        if(body.errorMessage==null|| body.errorMessage=='' ){
            res.send("The Student "+name+ " is registered successfully");
            
        }else{
            res.send("Error Occured.Please try again ")
            
        }
    })
});



var server = app.listen(8080, function () {
    console.log('Node server is running..');
});