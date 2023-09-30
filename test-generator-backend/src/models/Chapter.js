// models/Chapter.js
const mongoose = require('mongoose');

const chapterSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  subject: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Subject', // Reference to the Subject model
    required: true,
  },
  class: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Class', // Reference to the Class model
    required: true,
  },
  // You can add more fields specific to a chapter here if needed
});

module.exports = mongoose.model('Chapter', chapterSchema);
