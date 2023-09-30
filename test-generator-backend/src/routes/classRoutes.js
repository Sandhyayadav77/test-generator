const express = require('express');
const router = express.Router();
const Class = require('../models/Class');

// Route to get all classes
router.get('/', async (req, res) => {
  try {
    const classes = await Class.find();
    res.json(classes);
  } catch (error) {
    console.error('Error getting classes:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new class
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newClass = new Class({ name });
    await newClass.save();
    res.status(201).json(newClass);
  } catch (error) {
    console.error('Error creating class:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define other routes for classes here

module.exports = router;
