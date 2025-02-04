const mongoose = require("mongoose");

const answerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  module: { type: String, required: true },
  questionId: { type: String, required: true },
  answer: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
