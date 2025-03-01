import React from "react";
import { Link } from "react-router-dom";
import "./practice.css";

const Header = () => (
  <header className="header">
    <div className="logo">
      <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
        IELTS Master
      </Link>
    </div>
    <nav className="nav">
      <Link to="/practice">Practice Tests</Link>
      <a href="#">Resources</a>
      <a href="#">Community</a>
    </nav>
    <button className="sign-in-btn">Sign In</button>
  </header>
);

const Footer = () => (
  <footer className="footer">
    <div className="footerContent">
      <div className="footerMainSection">
        <div className="footerTitle">
          <Link to="/" style={{ textDecoration: "none", color: "inherit" }}>
            IELTS Master
          </Link>
        </div>
        <div className="footerDescription">
          Your trusted companion for IELTS preparation.
          <br />
          Achieve your target score with our comprehensive study resources.
        </div>
      </div>
      <div className="footerLinksSection">
        <div>
          <div className="footerLinkTitle">RESOURCES</div>
          <div className="footerLink">Practice Tests</div>
          <div className="footerLink">Study Materials</div>
        </div>
        <div>
          <div className="footerLinkTitle">SUPPORT</div>
          <div className="footerLink">Help Center</div>
          <div className="footerLink">Contact Us</div>
        </div>
      </div>
    </div>
    <div className="footerDivider" />
    <div className="footerCopyright">
      <div className="copyrightIcon">C</div>
      <div className="copyrightText">2024 IELTS Master. All rights reserved.</div>
    </div>
  </footer>
);

const IELTSMaster = () => {
  return (
    <div className="container">
      <Header />
      <main className="main">
        <h1 className="mainTitle">Practice Tests</h1>
        <p className="mainDescription">Choose a section below to start practicing</p>
        <div className="practiceSections">
          {/* Reading Section */}
          <div className="practiceSection">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/reading-icon.png"
              alt="Reading Icon"
              className="practiceSectionIcon"
            />
            <div className="practiceSectionTitle">Reading</div>
            <div className="practiceSectionDescription">
              Develop your reading skills with academic and general tests.
            </div>
            <Link to="/practice/reading-practice">
            <button className="startPracticeButton">Start Reading Practice</button>
            </Link>
          </div>

          {/* Writing Section */}
          <div className="practiceSection">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/writing-icon.png"
              alt="Writing Icon"
              className="practiceSectionIcon"
            />
            <div className="practiceSectionTitle">Writing</div>
            <div className="practiceSectionDescription">
              Enhance your writing skills with structured IELTS tasks.
            </div>
            <Link to="/practice/writing-practice">
            <button className="startPracticeButton">Start Writing Practice</button>
            </Link>
          </div>

          {/* Listening Section */}
          <div className="practiceSection">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/listening-icon.png"
              alt="Listening Icon"
              className="practiceSectionIcon"
            />
            <div className="practiceSectionTitle">Listening</div>
            <div className="practiceSectionDescription">
              Practice listening with real IELTS-style audio recordings.
            </div>
            <Link to="/practice/listening-practice">
            <button className="startPracticeButton">Start Listening Practice</button>
            </Link>
          </div>

          {/* Speaking Section */}
          <div className="practiceSection">
            <img
              src="https://cdn.builder.io/api/v1/image/assets/speaking-icon.png"
              alt="Speaking Icon"
              className="practiceSectionIcon"
            />
            <div className="practiceSectionTitle">Speaking</div>
            <div className="practiceSectionDescription">
              Improve fluency and pronunciation with speaking exercises.
            </div>
            <button className="startPracticeButton">Start Speaking Practice</button>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IELTSMaster;
