var express = require('express');
var router = express.Router();

var bodyParser = require('body-parser');



var controller = require('../controller/controller.js');

router.get('/', function(req, res){
  res.send('Hello World');
  controller.fetch();
});

module.exports = router;