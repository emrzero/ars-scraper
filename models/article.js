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
  },
  timestamps: {
    type: Date
  },
  notes: [{
    type: Schema.Types.ObjectId,
    ref: 'Note'
  }]
});

var Article = mongoose.model('Article', ArticleSchema);

module.exports = Article;