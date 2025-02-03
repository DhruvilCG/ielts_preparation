const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  questionId: { type: String, required: true },
  answer: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now },
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
