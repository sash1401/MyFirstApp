var express = require('express');
var app = express();
let request = require('request');
// define routes here..

var bodyParser = require("body-parser");
app.use(bodyParser.urlencoded({ extended: false }));

app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});

app.get('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    console.log(name);
    request({
        method: 'GET',
        url: '',
        headers: {}
    },function(error,response,body){
        console.log("Response body ",body)
        res.status(200).send(body);
        res.send(body);
    })
    
    
});

var server = app.listen(8080, function () {
    console.log('Node server is running..');
});