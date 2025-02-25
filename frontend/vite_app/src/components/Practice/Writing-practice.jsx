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
                    <h1>IELTS Writing Practice</h1>
                    <p>Enhance your writing skills with our comprehensive practice tests</p>
                </div>

                <div className="stats-grid">
                    <div className="card stat-card">
                        <div className="icon-wrapper amber">
                            <Trophy className="h-6 w-6" />
                        </div>
                        <div className="stat-info">
                            <p>Average Score</p>
                            <p>7.2</p>
                        </div>
                    </div>

                    <div className="card stat-card">
                        <div className="icon-wrapper purple">
                            <CheckCircle2 className="h-6 w-6" />
                        </div>
                        <div className="stat-info">
                            <p>Essays Writing</p>
                            <p>32</p>
                        </div>
                    </div>

                    <div className="card stat-card">
                        <div className="icon-wrapper green">
                            <Clock className="h-6 w-6" />
                        </div>
                        <div className="stat-info">
                            <p>Hours Practiced</p>
                            <p>56</p>
                        </div>
                    </div>
                </div>

                <div className="practice-grid">
                    {[
                        {
                            title: "Academic Writing Test 1",
                            difficulty: "Medium",
                            time: "20 minutes",
                            questions: "Expert evaluation included",
                            topics: ["Data Interpretation", "Process Description", "Chart Analysis"],
                        },
                        {
                            title: "Academic Writing Test 2",
                            difficulty: "Hard",
                            time: "20 minutes",
                            questions: "Expert evaluation included",
                            topics: ["Environment", "Education", "Technology"],
                        },
                        {
                            title: "Academic Writing Test 3",
                            difficulty: "Advanced",
                            time: "20 minutes",
                            questions: "Expert evaluation included",
                            topics: ["Formal Letters", "Semi-formal Letters", "Informal Letters"],
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
                                Start Writing
                            </button>
                        </div>
                    ))}
                </div>

                <div className="materials-section">
                    <h2>Premium Study Materials</h2>
                    <div className="practice-grid">
                        {[
                            {
                                title: "Essay Structure Masterclass",
                                description: "Learn how to structure your essay for maximum impact",
                                duration: "2.5 hours",
                                level: "All Levels",
                            },
                            {
                                title: "Task 1 Writing Workshop ",
                                description: "Master data interpretation and description",
                                duration: "2 hours",
                                level: "Intermediate",
                            },
                            {
                                title: "Advanced Writing Skills",
                                description: "Complex sentence structure and academic vocabulary",
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
                    <h2>Writing Success Stories</h2>
                    <p>Join our community of successful IELTS writers</p>
                    <div className="success-stats">
                        <div className="success-stat">
                            <p>92%</p>
                            <p>Achieved band 7 or higher</p>
                        </div>
                        <div className="success-stat">
                            <p>7.5+</p>
                            <p>Average Writing score</p>
                        </div>
                        <div className="success-stat">
                            <p>45K+</p>
                            <p>Essays evaluated</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ReadingPractice;