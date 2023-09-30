// routes/index.js
const express = require('express');
const router = express.Router();

// Import and use the route files for different resources
const subjectRoutes = require('./subjectRoutes');
const classRoutes = require('./classRoutes');
const chapterRoutes = require('./chapterRoutes');
const questionRoutes = require('./questionRoutes');

// Use the routes for each resource
router.use('/subjects', subjectRoutes);
router.use('/classes', classRoutes);
router.use('/chapters', chapterRoutes);
router.use('/questions', questionRoutes);

module.exports = router;
