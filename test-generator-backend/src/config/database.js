// config/database.js
const mongoose = require('mongoose');
const uri = "mongodb+srv://shivanifilms.i0yf7sg.mongodb.net/"
mongoose
  .connect(uri, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log('Connected to MongoDB');
  })
  .catch((error) => {
    console.error('MongoDB connection error:', error);
  });

  module.exports = mongoose;


