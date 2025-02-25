const mongoose = require('mongoose');

// Define the UserFeedback schema
const UserFeedbackSchema = new mongoose.Schema({
    name: { type: String, required: true },
    email: { type: String, required: true },
    message: { type: String, required: true },
    rating: { type: Number, required: true },
    feedbackType: { type: String, required: true }
}, { timestamps: true });

// Creating the UserFeedback model based on the schema
const UserFeedback = mongoose.model('UserFeedback', UserFeedbackSchema);

module.exports = UserFeedback;
