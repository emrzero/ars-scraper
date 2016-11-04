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

  scraper: require ('./scraper.js'),

  fetch: function() {
      controller.scraper.run(function(obj) {
        controller.save(obj);
      });
    },

  save: function (obj) {
      var entry = new Article(obj);
      entry.save(function(err, result) {
        if(err) {
          console.log(err)
        }
        else {
          console.log(result);
        }
    });
  },

  dbRetrieve: function(req, res) {


      Article.find({}, function(err, docs) {
        if (err) {
          console.log(err);
        }
        else {
          var data = {
            articles: docs
          }
          console.log("Now rendering page")
          res.render('index', data);
        }
      });
 
    
  }

}

module.exports = controller;