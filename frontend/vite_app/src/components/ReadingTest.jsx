import React, { useState, useEffect } from "react";
import { Timer, BookOpen, AlertCircle, ChevronRight, CheckCircle } from "lucide-react";
import "./readigTest.css";

const ReadingTest = () => {
  const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [answers, setAnswers] = useState({});
  const [isTestSubmitted, setIsTestSubmitted] = useState(false);
  const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);
  const [passages, setPassages] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/api/ielts/reading")
      .then((response) => {
        if (!response.ok) throw new Error("Failed to fetch questions");
        return response.json();
      })
      .then((data) => setPassages(data.passages || [])) // Ensure it's an array
      .catch((error) => {
        console.error("Error fetching passages:", error);
        setPassages([]); // Prevent undefined
      });
  }, []);

  useEffect(() => {
    if (timeLeft > 0 && !isTestSubmitted) {
      const timer = setInterval(() => {
        setTimeLeft((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(timer);
    } else if (timeLeft === 0) {
      handleSubmitTest();
    }
  }, [timeLeft, isTestSubmitted]);

  const formatTime = (seconds) => {
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = seconds % 60;
    return `${minutes.toString().padStart(2, "0")}:${remainingSeconds.toString().padStart(2, "0")}`;
  };

  const handleAnswerSelect = (questionId, answer) => {
    setAnswers((prev) => ({
      ...prev,
      [questionId]: answer,
    }));
  };

  const handleSubmitTest = () => {
    setIsTestSubmitted(true);
  };

  const calculateScore = () => {
    let correct = 0;
    Object.entries(answers).forEach(([questionId, answer]) => {
      const question = allQuestions.find((q) => q.question_id === questionId);
      if (question && question.correct_answer === answer) {
        correct++;
      }
    });
    return correct;
  };

  // Flatten all questions from all passages
  const allQuestions = passages.flatMap((passage) => passage.questions || []);

  return (
    <div className="reading-test-container">
      <div className="test-header">
        <div className="timer">
          <Timer className="icon" />
          <span className={timeLeft < 300 ? "time-critical" : ""}>{formatTime(timeLeft)}</span>
        </div>
        <div className="progress">
          <BookOpen className="icon" />
          <span>
            {currentQuestion + 1} / {allQuestions.length}
          </span>
        </div>
      </div>

      <div className="test-content">
        {passages.length > 0 && (
          <div className="reading-passage">
            <h2>{passages[Math.floor(currentQuestion / 13)]?.title}</h2>
            <div className="passage-text">
              <p>{passages[Math.floor(currentQuestion / 13)]?.text}</p>
            </div>
          </div>
        )}

        {allQuestions.length > 0 && (
          <div className="question-section">
            <div className="question">
              <h3>Question {currentQuestion + 1}</h3>
              <p>{allQuestions[currentQuestion].text}</p>

              <div className="options">
                {allQuestions[currentQuestion].choices
                  ? allQuestions[currentQuestion].choices.map((option, index) => (
                      <label key={index} className="option">
                        <input
                          type="radio"
                          name={`question-${currentQuestion}`}
                          value={option}
                          checked={answers[allQuestions[currentQuestion].question_id] === option}
                          onChange={() => handleAnswerSelect(allQuestions[currentQuestion].question_id, option)}
                          disabled={isTestSubmitted}
                        />
                        <span>{option}</span>
                      </label>
                    ))
                  : null}
              </div>
            </div>

            <div className="navigation">
              <button
                onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
                disabled={currentQuestion === 0}
                className="nav-button"
              >
                Previous
              </button>
              <button
                onClick={() => setCurrentQuestion((prev) => Math.min(allQuestions.length - 1, prev + 1))}
                disabled={currentQuestion === allQuestions.length - 1}
                className="nav-button"
              >
                Next
                <ChevronRight className="icon" />
              </button>
            </div>
          </div>
        )}
      </div>

      {!isTestSubmitted && (
        <button onClick={() => setShowConfirmSubmit(true)} className="submit-button">
          Submit Test
        </button>
      )}

      {showConfirmSubmit && (
        <div className="confirm-submit">
          <div className="confirm-dialog">
            <AlertCircle className="icon warning" />
            <h3>Are you sure you want to submit?</h3>
            <p>You still have {formatTime(timeLeft)} remaining.</p>
            <div className="confirm-actions">
              <button onClick={() => setShowConfirmSubmit(false)} className="cancel-button">
                Continue Test
              </button>
              <button onClick={handleSubmitTest} className="submit-button">
                Submit Test
              </button>
            </div>
          </div>
        </div>
      )}

      {isTestSubmitted && (
        <div className="results">
          <div className="result-card">
            <CheckCircle className="icon success" />
            <h2>Test Completed!</h2>
            <p>
              Your Score: {calculateScore()} / {allQuestions.length}
            </p>
            <button onClick={() => window.location.reload()} className="retry-button">
              Try Another Test
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default ReadingTest;
