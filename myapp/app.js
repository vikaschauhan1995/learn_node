function errorHandler(err,req,res,next){
	if(res.headersSent){
		return next(err)
	}
	res.status(500)
	res.render('error',{error:err})
}



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