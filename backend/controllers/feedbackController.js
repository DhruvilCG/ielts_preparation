const UserFeedback = require("../models/userFeedback");

const submitFeedback = async (req, res) => {
    console.log("Received feedback:", req.body); // Log the incoming feedback data
    try {
        const { name, email, message, rating, feedbackType } = req.body;

        if (!name || !email || !message || !rating || !feedbackType) {
            return res.status(400).json({ error: "All fields are required" });
        }

        const newFeedback = new UserFeedback({ name, email, message, rating, feedbackType });
        await newFeedback.save();
        res.status(201).json({ message: "Feedback submitted successfully!" });
    } catch (error) {
        console.error("Error saving feedback:", error);
        res.status(500).json({ error: "Failed to save feedback. Please try again." });
    }
};

const updateFeedback = async (req, res) => {
    try {
        const { id } = req.params;
        const updates = req.body;
        const updatedFeedback = await UserFeedback.findByIdAndUpdate(id, updates, { new: true });

        if (!updatedFeedback) return res.status(404).json({ error: "Feedback not found" });
        res.status(200).json(updatedFeedback);
    } catch (error) {
        console.error("Error updating feedback:", error);
        res.status(500).json({ error: "Failed to update feedback" });
    }
};

module.exports = { submitFeedback, updateFeedback };
