// models/Subject.js
const mongoose = require('mongoose');

const subjectSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    unique: true, // Ensures each subject name is unique
  },
});

module.exports = mongoose.model('Subject', subjectSchema);
