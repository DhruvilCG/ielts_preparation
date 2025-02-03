// backend/routes/ieltsRoutes.js

const express = require("express");
const router = express.Router();
const { getReading, getListening, getWriting, getSpeaking } = require("../controllers/ieltsController");

router.get("/reading", getReading);   // Should match /api/ielts/reading
router.get("/listening", getListening);  // Should match /api/ielts/listening
router.get("/writing", getWriting);  // Should match /api/ielts/writing
router.get("/speaking", getSpeaking);  // Should match /api/ielts/speaking

module.exports = router;
