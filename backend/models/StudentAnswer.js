const mongoose = require("mongoose");

const studentAnswerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: "User", // Reference to the user model
        required: true, // Tie the answer to a user
    },
    questionNum: {
        type: Number,
        required: true, // Link to the question number
    },
    answer: {
        type: String,
        required: true, // The student's answer
    },
    subject: {
        type: String,
        enum: ['reading', 'listening', 'writing', 'speaking'],
        required: true, // Subject of the question (Reading, Writing, etc.)
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const StudentAnswer = mongoose.model("StudentAnswer", studentAnswerSchema);

module.exports = StudentAnswer;
