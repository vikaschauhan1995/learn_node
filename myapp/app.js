var express = require('express');
var app = express();

var router= express.Router();
router.get('/',function(req,res,next){
	next();
});
app.use(router);





app.listen(3000, function () {
 console.log('Example app listening on port 3000!')
});

/*
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