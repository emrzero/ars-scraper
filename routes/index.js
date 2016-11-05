var express = require('express');
var router = express.Router();


var controller = require('../controller/controller.js');

router.get('/', controller.init);

router.post('/api/newnote/:id', function(req, res){
  controller.saveNote(req.params.id, req.body, res);
});

router.post('/api/deletenote/:nid', function(req, res) {
  controller.deleteNote(req.params.nid, res);
});

router.get('/articles', controller.articles);

module.exports = router;