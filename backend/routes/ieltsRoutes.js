const express = require('express');
const router = express.Router();
const ieltsControllers = require("../controllers/ieltsController");

// Route to get random Reading entry
router.get('/reading', ieltsControllers.getReading);

// Route to get random Listening entry
router.get('/listening', ieltsControllers.getListening);

// Route to get random Writing entry
router.get('/writing', ieltsControllers.getWriting);

// Route to get random Speaking entry
router.get('/speaking', ieltsControllers.getSpeaking);

// Route to add a reading entry
router.post('/reading', ieltsControllers.addReading);

// POST route for submitting answers (user feedback)
router.post('/answers', ieltsControllers.submitAnswer);

module.exports = router;
