var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  /*res.render('index', { title: 'Express' });*/
  res.render('index', { title: 'this is title', message: 'this is message!' })
});

module.exports = router;
