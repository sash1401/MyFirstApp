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
    var dept = req.body.dept;
    console.log(req.body.firstName);
    console.log(req.body.lastName);
    console.log(dept);
    request({
        method: 'GET',
        url: '',
        headers: {}
    },function(error,response,body){
        console.log("Response body ",body)
        res.status(200).send(body);
        res.send(body);
    })
    if(res.status==200)
        res.sendFile(__dirname + '/result.html');
    else
        res.send("Error Occured.Please try again ")

});



var server = app.listen(8080, function () {
    console.log('Node server is running..');
});