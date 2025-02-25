const express = require('express');
const { submitFeedback } = require('../controllers/feedbackController'); // Adjust path as needed

const router = express.Router();

// POST route to handle feedback submission
router.post('/submit', submitFeedback);

module.exports = router;
