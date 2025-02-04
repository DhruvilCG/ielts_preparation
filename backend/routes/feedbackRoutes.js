const express = require("express");
const router = express.Router();
const { submitFeedback, updateFeedback } = require("../controllers/feedbackController");

// POST request for submitting feedback
router.post("/feedback", submitFeedback);

// PUT request for updating feedback
router.put("/feedback/:id", updateFeedback);

module.exports = router;
