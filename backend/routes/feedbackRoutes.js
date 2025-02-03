const express = require("express");
const router = express.Router();
const { submitFeedback } = require("../controllers/feedbackController");

// POST route for submitting feedback
router.post("/feedback", (req, res, next) => {
    console.log("Received request to submit feedback");
    next();
}, submitFeedback);

module.exports = router;
