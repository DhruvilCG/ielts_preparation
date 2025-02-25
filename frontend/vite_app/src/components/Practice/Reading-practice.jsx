import { ArrowLeft, Book, Clock, Trophy, CheckCircle2 } from "lucide-react";
import "./practice.css";

const ReadingPractice = () => {
  return (
    <div className="container">
      <div className="content">
        <button className="back-button">
          <ArrowLeft className="h-4 w-4" />
          Back to Practice Modules
        </button>

        <div className="header">
          <h1>IELTS Reading Practice</h1>
          <p>Enhance your reading skills with our comprehensive practice tests</p>
        </div>

        <div className="stats-grid">
          <div className="card stat-card">
            <div className="icon-wrapper amber">
              <Trophy className="h-6 w-6" />
            </div>
            <div className="stat-info">
              <p>Average Score</p>
              <p>7.5</p>
            </div>
          </div>

          <div className="card stat-card">
            <div className="icon-wrapper purple">
              <CheckCircle2 className="h-6 w-6" />
            </div>
            <div className="stat-info">
              <p>Tests Completed</p>
              <p>24</p>
            </div>
          </div>

          <div className="card stat-card">
            <div className="icon-wrapper green">
              <Clock className="h-6 w-6" />
            </div>
            <div className="stat-info">
              <p>Hours Practiced</p>
              <p>48</p>
            </div>
          </div>
        </div>

        <div className="practice-grid">
          {[
            {
              title: "Academic Reading Test 1",
              difficulty: "Medium",
              time: "60 minutes",
              questions: "40 questions",
              topics: ["Science", "History", "Environment"],
            },
            {
              title: "Academic Reading Test 2",
              difficulty: "Hard",
              time: "60 minutes",
              questions: "40 questions",
              topics: ["Technology", "Society", "Education"],
            },
            {
              title: "Academic Reading Test 3",
              difficulty: "Advanced",
              time: "60 minutes",
              questions: "40 questions",
              topics: ["Psychology", "Architecture", "Economics"],
            },
          ].map((test) => (
            <div key={test.title} className="card test-card">
              <div className="test-header">
                <div className="test-title">
                  <Book className="h-5 w-5" />
                  <h3>{test.title}</h3>
                </div>
                <span className="badge">{test.difficulty}</span>
              </div>

              <div className="test-info">
                <div>
                  <Clock className="h-4 w-4" />
                  {test.time}
                </div>
                <div>
                  <CheckCircle2 className="h-4 w-4" />
                  {test.questions}
                </div>
              </div>

              <div className="topics">
                {test.topics.map((topic) => (
                  <span key={topic} className="topic-badge">
                    {topic}
                  </span>
                ))}
              </div>

              <button className="start-button">
                Start Practice
              </button>
            </div>
          ))}
        </div>

        <div className="materials-section">
          <h2>Premium Study Materials</h2>
          <div className="practice-grid">
            {[
              {
                title: "Reading Skills Masterclass",
                description: "Learn advanced reading techniques from IELTS experts",
                duration: "2 hours",
                level: "All Levels",
              },
              {
                title: "Vocabulary Builder",
                description: "Essential academic vocabulary for high scores",
                duration: "1.5 hours",
                level: "Intermediate",
              },
              {
                title: "Speed Reading Course",
                description: "Improve your reading speed and comprehension",
                duration: "3 hours",
                level: "Advanced",
              },
            ].map((material) => (
              <div key={material.title} className="card">
                <h3>{material.title}</h3>
                <p>{material.description}</p>
                <div className="test-info">
                  <span>{material.duration}</span>
                  <span>{material.level}</span>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="success-card">
          <h2>Success Stories</h2>
          <p>Join thousands of successful students who achieved their target IELTS scores</p>
          <div className="success-stats">
            <div className="success-stat">
              <p>94%</p>
              <p>Students improved their scores</p>
            </div>
            <div className="success-stat">
              <p>8.0+</p>
              <p>Average band score achieved</p>
            </div>
            <div className="success-stat">
              <p>94%</p>
              <p>Practice tests completed</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ReadingPractice;