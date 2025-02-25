import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation Bar
import LandingPage from "./components/LandingPage";
import Practice from "./components/Practice";
import ReadingTest from "./components/ReadingTest";
import WritingTest from "./components/WritingTest";
import FeedbackForm from "./components/FeedbackForm";
import ReadingPracticeTest from "./components/Practice/Reading-practice.jsx";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation Bar */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/reading-practice" element= {<ReadingPracticeTest />} />
        <Route path="/reading-practice/test" element={<ReadingTest />} />
        <Route path="/writing-practice/test" element={<WritingTest />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
