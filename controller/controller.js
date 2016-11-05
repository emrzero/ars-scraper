var async = require('async');

var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/arsdb');
mongoose.Promise = require('bluebird');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful');
});


var Article = require('../models/article.js');
var Note = require('../models/note.js');


var controller = {}

controller.scraper = require ('./promise_scraper.js');

controller.init = function(req, res) {
  console.log("running fetch");
  controller.scraper
  .then(function(data) {
    var d = data;
    controller.save(data);
  })
  .then(function() {
    console.log("retrieve db results");
    controller.dbRetrieve(req, res);
  });
}
 
controller.save = function (obj) {
  console.log("saving data with promise")
  obj.forEach(function(el) {
    var entry = new Article(el);
    entry.save(function(err, result) {
      if (err) {console.log("skipping article");}
    });

  });
  console.log("done");
}

controller.dbRetrieve = function(req, res) {
  var query = Article.find({}).populate('notes');

  query.then(function(doc){
    var data = {
      articles: doc
    }
    console.log('rendering pages');

    res.render('index', data);

  });

  
}

controller.saveNote = function(aID, noteBody, res) {
  var nID;
  noteBody.timestamp = Date.now();
  var note = new Note(noteBody);
  note.save(function(err, doc) {
    if (err) {console.log(err)}
    
    else {
      nID = doc._id;
      Article.findOneAndUpdate({"_id": aID}, {$push :{"notes": doc._id}}, function(err, result){
        if (err) {console.log(err)}
      });
      res.json(nID);
    }
  });
}

controller.deleteNote = function(nID, res) {
  Note.remove({"_id": nID}).exec(function(err, result){
    if(err){console.log(err)}
      else{
        res.send("note deleted: " + nID);
      }
  });
}


controller.articles = function(req, res) {
  var query = Article.find({}).populate('notes');

  query.then(function(doc){
    var data = {
      articles: doc
    }
    res.send(data);
  });

  
}

module.exports = controller;