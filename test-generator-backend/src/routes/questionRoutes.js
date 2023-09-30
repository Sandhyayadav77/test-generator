const express = require('express');
const router = express.Router();
const Question = require('../models/Question');

// Route to get all questions
router.get('/', async (req, res) => {
  try {
    const questions = await Question.find();
    res.json(questions);
  } catch (error) {
    console.error('Error getting questions:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new question
router.post('/', async (req, res) => {
  try {
    const { text, chapter } = req.body;
    const newQuestion = new Question({ text, chapter });
    await newQuestion.save();
    res.status(201).json(newQuestion);
  } catch (error) {
    console.error('Error creating question:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define other routes for questions here

module.exports = router;
