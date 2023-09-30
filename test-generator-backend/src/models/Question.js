// models/Question.js
const mongoose = require('mongoose');

const questionSchema = new mongoose.Schema({
  text: {
    type: String,
    required: true,
  },
  chapter: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Chapter', // Reference to the Chapter model
    required: true,
  },
  // You can add more fields specific to a question here if needed
});

module.exports = mongoose.model('Question', questionSchema);
