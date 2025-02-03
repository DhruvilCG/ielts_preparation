const express = require("express");
const router = express.Router();
const { getReading, getListening, getWriting, getSpeaking } = require("../controllers/ieltsController");

router.get("/reading", getReading);
router.get("/listening", getListening);
router.get("/writing", getWriting);
router.get("/speaking", getSpeaking);

module.exports = router;
