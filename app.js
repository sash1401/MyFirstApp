var express = require('express');
var app = express();
let request = require('request');
var bodyParser = require("body-parser");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(__dirname + '/public'));


app.get('/', function (req, res) {
    res.sendFile(__dirname + '/index.html');
});


app.post('/submit-student-data', function (req, res) {
    var name = req.body.firstName + ' ' + req.body.lastName;
    var submitAction ='';
    if( req.body.submitAction =="Register")
        submitAction="Registered"
    else
        submitAction="Updated"
    console.log("url is : ",process.env.URL);
    console.log("name"+name);
    console.log("dept:"+req.body.department)
    console.log(JSON.stringify(req.body))
  
    request(
        {
        method: 'POST',
        url: process.env.URL,
        headers:{},
        body: JSON.stringify(req.body)
    
        },
        function(error,response,body){
        console.log("Response.body",response.body);
        console.log("error",error)
        if(body.errorMessage==null|| body.errorMessage=='' ){
            res.send("<h2>The Student "+name+ " is "+submitAction+" successfully</h2>");
            
        }else{
            res.send("Error Occured.Please try again ")
            
        }
    })
});



var server = app.listen(8080, function () {
    console.log('Node server is running..');
});