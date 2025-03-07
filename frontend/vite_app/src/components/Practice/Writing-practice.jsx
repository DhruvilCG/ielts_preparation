import { ArrowLeft, Book, Clock, Trophy, CheckCircle2 } from "lucide-react";
import "./practice.css";
import { Link } from "react-router-dom";

const WritingPractice = () => {
    return (
        <div className="container">
            <div className="content">
                <Link to="/practice" style={{ textDecoration: "none", color: "inherit" }}>
                    <button className="back-button" >
                        <ArrowLeft className="h-4 w-4" />
                        Back to Practice Modules
                    </button>
                </Link>

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

                <div className="writing-practice-container" style={{ display: "flex" , gap: "20px" , paddingBottom: "50px" }}>
                    {/* Academic Writing Test 1 */}
                    <div className="card test-card">
                        <div className="test-header">
                            <div className="test-title">
                                <Book className="h-5 w-5" />
                                <h3>Academic Writing Test 1</h3>
                            </div>
                            <span className="badge">Medium</span>
                        </div>
                        <div className="test-info">
                            <div>
                                <Clock className="h-4 w-4" />
                                20 minutes
                            </div>
                            <div>
                                <CheckCircle2 className="h-4 w-4" />
                                Expert evaluation included
                            </div>
                        </div>
                        <div className="topics">
                            <span className="topic-badge">Data Interpretation</span>
                            <span className="topic-badge">Process Description</span>
                            <span className="topic-badge">Chart Analysis</span>
                        </div>

                        <Link to="/practice/writing-practice/test">
                        <button className="start-button">Start Writing</button>
                        </Link>
                        
                    </div>

                    {/* Academic Writing Test 2 */}
                    <div className="card test-card">
                        <div className="test-header">
                            <div className="test-title">
                                <Book className="h-5 w-5" />
                                <h3>Academic Writing Test 2</h3>
                            </div>
                            <span className="badge">Hard</span>
                        </div>
                        <div className="test-info">
                            <div>
                                <Clock className="h-4 w-4" />
                                20 minutes
                            </div>
                            <div>
                                <CheckCircle2 className="h-4 w-4" />
                                Expert evaluation included
                            </div>
                        </div>
                        <div className="topics">
                            <span className="topic-badge">Environment</span>
                            <span className="topic-badge">Education</span>
                            <span className="topic-badge">Technology</span>
                        </div>
                        <button className="start-button">Start Writing</button>
                    </div>

                    {/* Academic Writing Test 3 */}
                    <div className="card test-card">
                        <div className="test-header">
                            <div className="test-title">
                                <Book className="h-5 w-5" />
                                <h3>Academic Writing Test 3</h3>
                            </div>
                            <span className="badge">Advanced</span>
                        </div>
                        <div className="test-info">
                            <div>
                                <Clock className="h-4 w-4" />
                                20 minutes
                            </div>
                            <div>
                                <CheckCircle2 className="h-4 w-4" />
                                Expert evaluation included
                            </div>
                        </div>
                        <div className="topics">
                            <span className="topic-badge">Formal Letters</span>
                            <span className="topic-badge">Semi-formal Letters</span>
                            <span className="topic-badge">Informal Letters</span>
                        </div>
                        <button className="start-button">Start Writing</button>
                    </div>
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

export default WritingPractice;