import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar"; // Navigation Bar
import LandingPage from "./components/LandingPage";
import Practice from "./components/Practice";
import ReadingTest from "./components/ReadingTest";
import WritingTest from "./components/WritingTest";
import FeedbackForm from "./components/FeedbackForm";

function App() {
  return (
    <Router>
      <Navbar /> {/* Navigation Bar */}
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/practice" element={<Practice />} />
        <Route path="/reading-test" element={<ReadingTest />} />
        <Route path="/writing-test" element={<WritingTest />} />
        <Route path="/feedback" element={<FeedbackForm />} />
      </Routes>
    </Router>
  );
}

export default App;
