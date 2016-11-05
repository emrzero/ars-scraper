var mongoose = require('mongoose');

var Schema = mongoose.Schema;

var NoteSchema = new Schema({
  notebody: {
    type: String,
    required: true
  },
  timestamp: {
    type: Date
  }
});

var Note = mongoose.model('Note', NoteSchema);

module.exports = Note;