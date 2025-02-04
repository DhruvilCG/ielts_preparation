const mongoose = require("mongoose");

const UserFeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, min: 1, max: 5, required: true },
    feedbackType: { type: String, enum: ['positive', 'negative', 'suggestion'], required: true },
    createdAt: { type: Date, default: Date.now }
}, { collection: "userfeedbacks" });

module.exports = mongoose.model("UserFeedback", UserFeedbackSchema);
