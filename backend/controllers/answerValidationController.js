const CorrectAnswer = require("../models/CorrectAnswer");
const StudentAnswer = require("../models/StudentAnswer");

const validateAnswer = async (req, res) => {
    try {
        const { questionNum, subject, studentAnswerId } = req.body;

        // Find the student's answer from the database
        const studentAnswer = await StudentAnswer.findById(studentAnswerId);

        if (!studentAnswer) {
            return res.status(404).json({ error: "Answer not found" });
        }

        // Find the correct answer from the database
        const correctAnswer = await CorrectAnswer.findOne({ questionNum, subject });

        if (!correctAnswer) {
            return res.status(404).json({ error: "Correct answer not found for this question" });
        }

        // Check if the student's answer is correct
        const isCorrect = studentAnswer.answer === correctAnswer.correctAnswer;

        if (isCorrect) {
            return res.status(200).json({ message: "Correct answer!" });
        } else {
            return res.status(200).json({ message: "Incorrect answer. Try again." });
        }
    } catch (error) {
        console.error("Error validating answer:", error);
        res.status(500).json({ error: "Failed to validate answer. Please try again." });
    }
};

module.exports = { validateAnswer };
