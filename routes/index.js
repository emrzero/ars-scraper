var express = require('express');
var router = express.Router();


var controller = require('../controller/controller.js');

router.get('/', controller.dbRetrieve);

module.exports = router;