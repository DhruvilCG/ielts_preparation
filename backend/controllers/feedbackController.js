const UserFeedback = require('../models/UserFeedback'); // Adjust path as needed

// Function to handle user feedback submission
const submitFeedback = async (req, res) => {
    console.log("Received feedback:", req.body); // Log to check incoming data

    try {
        // Destructuring required fields from the request body
        const { name, email, message, rating, feedbackType } = req.body;

        // Input validation: Check if any field is missing
        if (!name || !email || !message || !rating || !feedbackType) {
            return res.status(400).json({ error: "All fields are required" });
        }

        // Creating a new feedback document
        const newFeedback = new UserFeedback({
            name,
            email,
            message,
            rating,
            feedbackType
        });

        // Saving the feedback document to the database
        await newFeedback.save();

        // Responding back with success message
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error("Error saving feedback:", error); // Log the error for debugging
        res.status(500).json({ error: `Failed to save feedback. Error: ${error.message}` });
    }
};

module.exports = { submitFeedback };
