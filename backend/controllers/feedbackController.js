const UserFeedback = require("../models/UserFeedback");

const submitFeedback = async (req, res) => {
    try {
        const { name, email, message, rating, feedbackType } = req.body;

        // Input Validation
        if (!name || !email || !message || !rating || !feedbackType) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Creating a new feedback entry
        const newFeedback = new UserFeedback({ name, email, message, rating, feedbackType });

        // Saving feedback to MongoDB
        await newFeedback.save();
        return res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error("Error saving feedback:", error); // More detailed logging
        return res.status(500).json({ error: `Failed to save feedback. Error: ${error.message}` }); // Return error message to client
    }
};

module.exports = { submitFeedback };
