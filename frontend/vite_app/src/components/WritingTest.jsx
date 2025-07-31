import React, { useState, useEffect } from "react";
import "./writingTest.css";

const WritingTest = () => {
  const [writingData, setWritingData] = useState(null);
  const [task1Response, setTask1Response] = useState("");
  const [task2Response, setTask2Response] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    fetch("https://ielts-preparation-2.onrender.com/api/ielts/writing")
      .then((response) => response.json())
      .then((data) => setWritingData(data))
      .catch((error) => console.error("Error fetching writing test data:", error));
  }, []);

  const handleSubmit = () => {
    setIsSubmitted(true);
    console.log("Task 1 Response:", task1Response);
    console.log("Task 2 Response:", task2Response);
  };

  return (
    <div className="writing-test-container">
      <h1>IELTS Writing Test</h1>
      {writingData ? (
        <>
          {/* Task 1 */}
          <div className="writing-task">
            <h2>Task 1: {writingData["type-t1"]}</h2>
            <p>{writingData["question-t1"]}</p>
            <textarea
              placeholder="Write your Task 1 response here..."
              value={task1Response}
              onChange={(e) => setTask1Response(e.target.value)}
              disabled={isSubmitted}
            />
          </div>

          {/* Task 2 */}
          <div className="writing-task">
            <h2>Task 2: {writingData["type-t2"]}</h2>
            <p>{writingData["question-t2"]}</p>
            <textarea
              placeholder="Write your Task 2 response here..."
              value={task2Response}
              onChange={(e) => setTask2Response(e.target.value)}
              disabled={isSubmitted}
            />
          </div>

          {!isSubmitted && (
            <button className="submit-button" onClick={handleSubmit}>
              Submit Answers
            </button>
          )}

          {isSubmitted && <p className="confirmation">Your responses have been submitted!</p>}
        </>
      ) : (
        <p>Loading writing test...</p>
      )}
    </div>
  );
};

export default WritingTest;
