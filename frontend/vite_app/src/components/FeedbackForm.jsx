import React, { useState } from "react";
import axios from "axios";

const FeedbackForm = () => {
    const [feedback, setFeedback] = useState({
        name: "",
        email: "",
        message: "",
        rating: "",
        feedbackType: "",
    });

    const [error, setError] = useState("");  // To display error messages

    const handleChange = (e) => {
        setFeedback({ ...feedback, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setError(""); // Clear previous errors

        // Validate rating (between 1 and 5)
        if (feedback.rating < 1 || feedback.rating > 5) {
            setError("Rating must be between 1 and 5.");
            return;
        }

        // Validate email format
        const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        if (!emailPattern.test(feedback.email)) {
            setError("Please enter a valid email.");
            return;
        }

        try {
            await axios.post("http://localhost:5000/api/feedback", feedback);
            alert("Feedback submitted successfully!");
            setFeedback({ name: "", email: "", message: "", rating: "", feedbackType: "" });
        } catch (error) {
            console.error("Error:", error);
            setError("Failed to submit feedback. Please try again.");
        }
    };

    return (
        <form onSubmit={handleSubmit}>
            {error && <p style={{ color: "red" }}>{error}</p>}  {/* Display error message */}
            <input
                type="text"
                name="name"
                value={feedback.name}
                onChange={handleChange}
                placeholder="Your Name"
                required
            />
            <input
                type="email"
                name="email"
                value={feedback.email}
                onChange={handleChange}
                placeholder="Your Email"
                required
            />
            <textarea
                name="message"
                value={feedback.message}
                onChange={handleChange}
                placeholder="Your Message"
                required
            />
            <input
                type="number"
                name="rating"
                value={feedback.rating}
                onChange={handleChange}
                placeholder="Rating (1-5)"
                required
                min="1"
                max="5"
            />
            <select
                name="feedbackType"
                value={feedback.feedbackType}
                onChange={handleChange}
                required
            >
                <option value="">Select Type</option>
                <option value="positive">Positive</option>
                <option value="negative">Negative</option>
                <option value="suggestion">Suggestion</option>
            </select>
            <button type="submit">Submit Feedback</button>
        </form>
    );
};

export default FeedbackForm;
