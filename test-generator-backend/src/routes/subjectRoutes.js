const express = require('express');
const router = express.Router();
const Subject = require('../models/Subject');

// Route to get all subjects
app.get('/get-subjects', async (req, res) => {
  try {
    const subjects = await Subject.find({});
    res.json(subjects);
  } catch (error) {
    console.error('Error fetching subjects:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Route to create a new subject
router.post('/', async (req, res) => {
  try {
    const { name } = req.body;
    const newSubject = new Subject({ name });
    await newSubject.save();
    res.status(201).json(newSubject);
  } catch (error) {
    console.error('Error creating subject:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
});

// Define other routes for subjects here, such as updating or deleting subjects

module.exports = router;
