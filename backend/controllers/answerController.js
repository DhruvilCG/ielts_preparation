const Answer = require("../models/Answer");

const submitAnswer = async (req, res) => {
  try {
    const { questionId, answer } = req.body;

    // Create a new answer document
    const newAnswer = new Answer({
      questionId,
      answer
    });

    // Save the answer to the database
    await newAnswer.save();

    res.status(201).json({ message: "Answer submitted successfully!" });
  } catch (err) {
    console.error("Error submitting answer:", err);
    res.status(500).json({ error: "Failed to submit answer" });
  }
};

// New function for updating an answer with logging
const updateAnswer = async (req, res) => {
  try {
    const { questionId, answer } = req.body;

    // Log the incoming request data
    console.log("Request body:", req.body); // Logs the request body

    // Check if both questionId and answer are provided
    if (!questionId || !answer) {
      return res.status(400).json({ error: "Both questionId and answer are required" });
    }

    // Find the answer by questionId and update it
    const updatedAnswer = await Answer.findOneAndUpdate(
      { questionId }, // Find answer by questionId
      { answer }, // Update the answer field
      { new: true } // Return the updated document
    );

    // If no answer found, return 404
    if (!updatedAnswer) {
      return res.status(404).json({ error: "Answer not found" });
    }

    res.status(200).json({ message: "Answer updated successfully!" });
  } catch (err) {
    console.error("Error updating answer:", err);
    res.status(500).json({ error: "Failed to update answer" });
  }
};

module.exports = { submitAnswer, updateAnswer };
