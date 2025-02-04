const Answer = require("../models/Answer");

const submitAnswer = async (req, res) => {
  try {
    const { userId, module, questionId, answer } = req.body;

    // Input validation: ensure required fields are provided
    if (!userId || !module || !questionId || !answer) {
      return res.status(400).json({ error: "User ID, module, question ID, and answer are required" });
    }

    // Create and save the answer to the database
    const newAnswer = new Answer({
      userId,
      module,
      questionId,
      answer
    });

    await newAnswer.save();

    res.status(201).json({
      message: "Answer submitted successfully!",
      data: newAnswer
    });
  } catch (error) {
    console.error("Error saving answer:", error);
    res.status(500).json({ error: "Error saving answer", details: error.message });
  }
};

module.exports = { submitAnswer };
