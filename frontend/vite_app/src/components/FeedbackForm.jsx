import { useState } from "react";

const FeedbackForm = () => {
  const [feedback, setFeedback] = useState({
    name: "",
    email: "",
    feedbackType: "",
    message: "",
    rating: 1,
    // featureCategory: "",
    // easeOfUse: "",
    // wouldRecommend: "",
  });

  const handleChange = (e) => {
    setFeedback({ ...feedback, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await fetch("http://localhost:5000/api/feedback", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(feedback),
      });

      if (response.ok) {
        alert("Feedback submitted successfully!");
        setFeedback({
          name: "",
          email: "",
          feedbackType: "",
          message: "",
          rating: 1,
          // featureCategory: "",
          // easeOfUse: "",
          // wouldRecommend: "",
        });
      } else {
        alert("Failed to submit feedback. Try again.");
      }
    } catch (error) {
      console.error("Error:", error);
      alert("Error submitting feedback.");
    }
  };

  return (
    <div>
      <h2>Student Feedback Form</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" name="name" value={feedback.name} onChange={handleChange} placeholder="Your Name" required />

        <input type="email" name="email" value={feedback.email} onChange={handleChange} placeholder="Your Email" required />

        <select name="feedbackType" value={feedback.feedbackType} onChange={handleChange} required>
          <option value="">Select Feedback Type</option>
          <option value="positive">Positive</option>
          <option value="negative">Negative</option>
          <option value="suggestion">Suggestion</option>
        </select>

        <textarea name="message" value={feedback.message} onChange={handleChange} placeholder="Your Feedback" required />

        <label>Rating:</label>
        <input type="number" name="rating" min="1" max="5" value={feedback.rating} onChange={handleChange} required />

        <label>Feature Category:</label>
        {/* <select name="featureCategory" value={feedback.featureCategory} onChange={handleChange} required>
          <option value="">Select Feature</option>
          <option value="mock-tests">Mock Tests</option>
          <option value="speaking-simulator">Speaking Simulator</option>
          <option value="essay-evaluation">Essay Evaluation</option>
          <option value="vocabulary-builder">Vocabulary Builder</option>
          <option value="study-materials">Study Materials</option>
          <option value="general-feedback">General Feedback</option>
        </select> */}

        {/* <label>Ease of Use:</label>
        <select name="easeOfUse" value={feedback.easeOfUse} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="easy">Easy</option>
          <option value="moderate">Moderate</option>
          <option value="difficult">Difficult</option>
        </select> */}

        {/* <label>Would you recommend?</label>
        <select name="wouldRecommend" value={feedback.wouldRecommend} onChange={handleChange}>
          <option value="">Select Option</option>
          <option value="yes">Yes</option>
          <option value="no">No</option>
        </select> */}

        <button type="submit">Submit Feedback</button>
      </form>
    </div>
  );
};

export default FeedbackForm;
