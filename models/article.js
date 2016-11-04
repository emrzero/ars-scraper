var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
  title: {
    type: String,
    unique: true,
    required: true
  },

  excerpt: {
    type: String
  },
  author: {
    type: String
  },
  url: {
    type: String
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;