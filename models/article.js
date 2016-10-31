var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var ArticleSchema = new Schema ({
  title: {
    type: String,
    trim: true,
    unique: true,
    required: true
  },

  excerpt: {
    type: String
  },

  url: {
    type: String
  }
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;