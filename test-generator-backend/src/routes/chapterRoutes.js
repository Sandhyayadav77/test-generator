const express = require('express');
const router = express.Router();
const Chapter = require('../models/Chapter');

// Route to get all chapters
router.get('/', async (req, res) => {
  try {
    const chapters = await Chapter.find();
    res.json(chapters);
  } catch (error) {
    console.error('Error getting chapters:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new chapter
router.post('/', async (req, res) => {
  try {
    const { name, subject, class } = req.body;
    const newChapter = new Chapter({ name, subject, class });
    await newChapter.save();
    res.status(201).json(newChapter);
  } catch (error) {
    console.error('Error creating chapter:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define other routes for chapters here

module.exports = router;
