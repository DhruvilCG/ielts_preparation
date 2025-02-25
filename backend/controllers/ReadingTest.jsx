// import React, { useState, useEffect } from 'react';
// import { Timer, BookOpen, AlertCircle, ChevronRight, CheckCircle } from 'lucide-react';

// interface Question {
//   id: number;
//   text: string;
//   options: string[];
//   correctAnswer: string;
// }

// const sampleQuestions: Question[] = [
//   {
//     id: 1,
//     text: "According to the passage, what is the main reason for urban migration?",
//     options: ["Economic opportunities", "Better education", "Healthcare facilities", "Social connections"],
//     correctAnswer: "Economic opportunities"
//   },
//   // Add more questions here...
// ];

// const ReadingTest: React.FC = () => {
//   const [timeLeft, setTimeLeft] = useState(60 * 60); // 60 minutes in seconds
//   const [currentQuestion, setCurrentQuestion] = useState(0);
//   const [answers, setAnswers] = useState<Record<number, string>>({});
//   const [isTestSubmitted, setIsTestSubmitted] = useState(false);
//   const [showConfirmSubmit, setShowConfirmSubmit] = useState(false);

//   useEffect(() => {
//     if (timeLeft > 0 && !isTestSubmitted) {
//       const timer = setInterval(() => {
//         setTimeLeft((prev) => prev - 1);
//       }, 1000);
//       return () => clearInterval(timer);
//     } else if (timeLeft === 0) {
//       handleSubmitTest();
//     }
//   }, [timeLeft, isTestSubmitted]);

//   const formatTime = (seconds: number) => {
//     const minutes = Math.floor(seconds / 60);
//     const remainingSeconds = seconds % 60;
//     return `${minutes.toString().padStart(2, '0')}:${remainingSeconds.toString().padStart(2, '0')}`;
//   };

//   const handleAnswerSelect = (questionId: number, answer: string) => {
//     setAnswers((prev) => ({
//       ...prev,
//       [questionId]: answer,
//     }));
//   };

//   const handleSubmitTest = () => {
//     setIsTestSubmitted(true);
//   };

//   const calculateScore = () => {
//     let correct = 0;
//     Object.entries(answers).forEach(([questionId, answer]) => {
//       const question = sampleQuestions.find((q) => q.id === parseInt(questionId));
//       if (question && question.correctAnswer === answer) {
//         correct++;
//       }
//     });
//     return correct;
//   };

//   return (
//     <div className="reading-test-container">
//       <div className="test-header">
//         <div className="timer">
//           <Timer className="icon" />
//           <span className={timeLeft < 300 ? 'time-critical' : ''}>
//             {formatTime(timeLeft)}
//           </span>
//         </div>
//         <div className="progress">
//           <BookOpen className="icon" />
//           <span>{currentQuestion + 1} / {sampleQuestions.length}</span>
//         </div>
//       </div>

//       <div className="test-content">
//         <div className="reading-passage">
//           <h2>Reading Passage 1</h2>
//           <div className="passage-text">
//             {/* Add your reading passage text here */}
//             <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua...</p>
//           </div>
//         </div>

//         <div className="question-section">
//           <div className="question">
//             <h3>Question {currentQuestion + 1}</h3>
//             <p>{sampleQuestions[currentQuestion].text}</p>
            
//             <div className="options">
//               {sampleQuestions[currentQuestion].options.map((option, index) => (
//                 <label key={index} className="option">
//                   <input
//                     type="radio"
//                     name={`question-${currentQuestion}`}
//                     value={option}
//                     checked={answers[sampleQuestions[currentQuestion].id] === option}
//                     onChange={() => handleAnswerSelect(sampleQuestions[currentQuestion].id, option)}
//                     disabled={isTestSubmitted}
//                   />
//                   <span>{option}</span>
//                 </label>
//               ))}
//             </div>
//           </div>

//           <div className="navigation">
//             <button
//               onClick={() => setCurrentQuestion((prev) => Math.max(0, prev - 1))}
//               disabled={currentQuestion === 0}
//               className="nav-button"
//             >
//               Previous
//             </button>
//             <button
//               onClick={() => setCurrentQuestion((prev) => Math.min(sampleQuestions.length - 1, prev + 1))}
//               disabled={currentQuestion === sampleQuestions.length - 1}
//               className="nav-button"
//             >
//               Next
//               <ChevronRight className="icon" />
//             </button>
//           </div>
//         </div>
//       </div>

//       {!isTestSubmitted && (
//         <button
//           onClick={() => setShowConfirmSubmit(true)}
//           className="submit-button"
//         >
//           Submit Test
//         </button>
//       )}

//       {showConfirmSubmit && (
//         <div className="confirm-submit">
//           <div className="confirm-dialog">
//             <AlertCircle className="icon warning" />
//             <h3>Are you sure you want to submit?</h3>
//             <p>You still have {formatTime(timeLeft)} remaining.</p>
//             <div className="confirm-actions">
//               <button onClick={() => setShowConfirmSubmit(false)} className="cancel-button">
//                 Continue Test
//               </button>
//               <button onClick={handleSubmitTest} className="submit-button">
//                 Submit Test
//               </button>
//             </div>
//           </div>
//         </div>
//       )}

//       {isTestSubmitted && (
//         <div className="results">
//           <div className="result-card">
//             <CheckCircle className="icon success" />
//             <h2>Test Completed!</h2>
//             <p>Your Score: {calculateScore()} / {sampleQuestions.length}</p>
//             <button onClick={() => window.location.reload()} className="retry-button">
//               Try Another Test
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// };

// export default ReadingTest;