const mongoose = require("mongoose");

const correctAnswerSchema = new mongoose.Schema({
    questionNum: {
        type: Number,
        required: true, // Which question the answer is for
    },
    correctAnswer: {
        type: String,
        required: true, // The correct answer for the question
    },
    subject: {
        type: String,
        enum: ['reading', 'listening', 'writing', 'speaking'],
        required: true, // Subject of the question
    },
});

const CorrectAnswer = mongoose.model("CorrectAnswer", correctAnswerSchema);

module.exports = CorrectAnswer;
