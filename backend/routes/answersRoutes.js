const express = require("express");
const router = express.Router();
const { submitAnswer } = require("../controllers/answersController");

// POST request for submitting a single answer
router.post("/answers", submitAnswer);

module.exports = router;
