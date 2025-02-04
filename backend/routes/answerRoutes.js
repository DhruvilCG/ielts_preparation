const express = require("express");
const router = express.Router();
const { submitAnswer, updateAnswer } = require("../controllers/answerController");

// POST route to submit an answer
router.post("/submit-answer", submitAnswer);

// PUT route to update an existing answer
router.put("/update-answer", updateAnswer);  // This is where the PUT request will be handled

module.exports = router;
