import React from "react";
import PropTypes from "prop-types";
import "./practice.css";

const Header = ({ title }) => (
  <header className="header">
    <div className="headerTitle">{title}</div>
    <nav className="headerNav">
      <div>Practice Tests</div>
      <div className="headerNavItem">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/7b8e4d378efb0b70ff2772658d14202d586f97c3ee6c442971e7555cb4df18a2?apiKey=87aa91620a9b427788914d3789c308bf&"
          alt=""
          className="headerNavIcon"
        />
        <div>Resources</div>
      </div>
      <div className="headerNavItem">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/2fbd5d16cf2a0141f3888351e6aa1bbdb4b2ad8e1fc1ed698a561bb6e20a2dce?apiKey=87aa91620a9b427788914d3789c308bf&"
          alt=""
          className="headerNavIcon"
        />
        <div>Community</div>
      </div>
    </nav>
    <button className="signInButton">Sign In</button>
  </header>
);

const PracticeSection = ({ title, description, iconSrc }) => (
  <div className="practiceSection">
    {iconSrc && <img src={iconSrc} alt="" className="practiceSectionIcon" />}
    <div className="practiceSectionTitle">{title}</div>
    <div className="practiceSectionDescription">{description}</div>
    <button className="startPracticeButton">Start Practice</button>
  </div>
);

// Prop validation
PracticeSection.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  iconSrc: PropTypes.string,
};

const Footer = () => (
  <footer className="footer">
    <div className="footerContent">
      <div className="footerMainSection">
        <div className="footerTitle">IELTS Master</div>
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
  const practiceSections = [
    {
      title: "Reading",
      description: "Practice academic and general reading passages with timed tests",
      iconSrc: "",
    },
    {
      title: "Writing",
      description: "Improve your writing skills with task 1 and task 2 practice",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/e924b3fb2ddf3e475cdee1ceb40422e1d55bcb42cc6d58875dec55baf29d10b1?apiKey=87aa91620a9b427788914d3789c308bf&",
    },
    {
      title: "Listening",
      description: "Enhance your listening comprehension with various audio tests",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/0dafb30347fdae2a8025c9b40c846fe97456ecb53900f78e58a1110127138ad0?apiKey=87aa91620a9b427788914d3789c308bf&",
    },
    {
      title: "Speaking",
      description: "Practice speaking tasks and get feedback on your performance",
      iconSrc:
        "https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/9da3a61130095107ec216c4fc24559d88143d8d1e345b0a65378e2dd78b247dc?apiKey=87aa91620a9b427788914d3789c308bf&",
    },
  ];

  return (
    <div className="container">
      <Header title="IELTS Master" />
      <main className="main">
        <h1 className="mainTitle">Practice Tests</h1>
        <p className="mainDescription">Choose a section below to start practicing</p>
        <div className="practiceSections">
          {practiceSections.map((section, index) => (
            <PracticeSection key={index} {...section} />
          ))}
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default IELTSMaster;
