// const mongoose = require("mongoose");
import mongoose , {Schema} from "mongoose" ;

const answerSchema = new Schema({
  userId: { type: String, required: true },
  module: { type: String, required: true },
  questionId: { type: String, required: true },
  answer: { type: String, required: true },
  submittedAt: { type: Date, default: Date.now }
});

const Answer = mongoose.model("Answer", answerSchema);

module.exports = Answer;
