var express = require('express');
var app = express();

app.route('/events')
.all(function(req,res,next){

})
.get(function(req,res,next){
	res.json()
})
.post(function(req,res,next){
	//maybe add a new event..
})




app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
});

/*
var express = require('express')
var app = express();


app.get('/', function (req, res) {
console.log(req, res);
 res.send('Hello World!')
})

app.get('/abc', function (req, res) {
console.log(req, res);
 res.send('Hello World!2')
})

app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
});*/