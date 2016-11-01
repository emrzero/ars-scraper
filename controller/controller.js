// var mongojs = require('mongojs');
// var datbaseURL= 'arsdb';
// var collections = ['articles'];
// db.on('error', function(err) {
//   console.log('Datbase error: ' + err);
// });
// var db = mongojs(datbaseURL, collections);


var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/arsdb');

var db = mongoose.connection;

db.on('error', function(err) {
  console.log('Mongoose Error ', err);
});

db.once('open', function() {
  console.log('Mongoose connection successful');
});


var Article = require('../models/article.js');


var controller = {
  print : function() {
    console.log('Hello controller!');
  },
  scraper: require ('./scraper.js'),
  fetch: function() {
      this.scraper.run(function(ob) {
        var entry = new Article(ob);
        entry.save(function(err, result) {
          if (err) {
            console.log(err);
          }
          else {
            console.log(result);
          }
        });
      })
    }

}

module.exports = controller;