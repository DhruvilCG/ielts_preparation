const express = require('express');
const router = express.Router();
const ieltsControllers = require("../controllers/ieltsController");

// Route to get random Reading entry
router.get('/ielts/reading', ieltsControllers.getReading);

// Route to get random Listening entry
router.get('/ielts/listening', ieltsControllers.getListening);

// Route to get random Writing entry
router.get('/ielts/writing', ieltsControllers.getWriting);

// Route to get random Speaking entry
router.get('/ielts/speaking', ieltsControllers.getSpeaking);

// Route to add a reading entry
router.post('/reading', ieltsControllers.addReading);

module.exports = router;
