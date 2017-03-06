var express = require('express');
var app = express();

function mw1(req,res,next){
	next();
}
function mw2(req,res,next){
	next();
}
var r1 = express.Router();
r1.get('/',function(req,res,next){
	next();
})
var r2 = express.Router();
r2.get('/',function(req,res,next){
	next();
})
var subApp = express();
subApp.get('/',function(req,res,next){
	next();
})
app.use(mw1,[mw2,r1,r2],subApp);





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