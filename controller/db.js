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

var query = Article.find({});

query.then(function(doc){
  var data = {
    articles: doc
  }
  console.log('rendering pages');
  // console.log(data);
});

var save = new Promise (function (resolve, reject, obj) {
  if (obj) {
    for (var i = 5; i >= 0; i--) {
      console.log(i);
    }
    resolve("done with loop");
  } else {
    reject("error: no objec to save to db");

  }
});

var name = "eliot";
save
.then(function(name){
  console.log("resolved the promise");
})
.catch(function(err){
  console.log(err);
});


// module.exports = db;