// models/Class.js
const mongoose = require('mongoose');

const classSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  // You can add more fields specific to a class here if needed
});

module.exports = mongoose.model('Class', classSchema);
