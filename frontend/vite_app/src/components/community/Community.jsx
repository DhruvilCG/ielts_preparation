import React, { useState } from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import { Toaster } from "./UI/toaster.jsx";
import { Toaster as Sonner } from "./UI/toaster.jsx";
import { TooltipProvider } from "./UI/tooltip.jsx";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import "./community.css";

// Navbar Component 
const Navbar = () => {
  return (
    <nav className="navbar">
      <Link to="/" className="logo">
        IELTS Master
      </Link>
      <div className="nav-links">
        <Link to="/" className="nav-link">
          Practice Tests
        </Link>
        <Link to="/" className="nav-link link-with-icon">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/7b8e4d378efb0b70ff2772658d14202d586f97c3ee6c442971e7555cb4df18a2?placeholderIfAbsent=true"
            className="icon"
            alt="Resources icon"
          />
          <span>Resources</span>
        </Link>
        <Link to="/" className="nav-link link-with-icon">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/2fbd5d16cf2a0141f3888351e6aa1bbdb4b2ad8e1fc1ed698a561bb6e20a2dce?placeholderIfAbsent=true"
            className="icon"
            alt="Community icon"
          />
          <span>Community</span>
        </Link>
      </div>
      <button className="sign-in-button">
        Sign In
      </button>
    </nav>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">
              IELTS Master
            </div>
            <div className="footer-description">
              Your trusted companion for IELTS preparation.
              <br />
              Achieve your target score with our comprehensive <br />
              study resources.
            </div>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">RESOURCES</div>
            <Link to="/" className="footer-link">
              Practice Tests
            </Link>
            <Link to="/" className="footer-link">
              Study Materials
            </Link>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">SUPPORT</div>
            <Link to="/" className="footer-link">
              Help Center
            </Link>
            <Link to="/" className="footer-link">
              Contact Us
            </Link>
          </div>
        </div>
      </div>
      <div className="footer-divider" />
      <div className="footer-copyright">
        <div className="copyright-symbol">
          C
        </div>
        <div className="copyright-text">
          2024 IELTS Master. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

// Community Header Component
const CommunityHeader = ({ activeTab, onTabChange }) => {
  return (
    <header className="community-header">
      <h1 className="community-title">
        Community
      </h1>
      <div className="community-tabs">
        <button
          className={`tab-button ${activeTab === "Forums" ? "active-tab" : ""}`}
          onClick={() => onTabChange("Forums")}
        >
          Forums
        </button>
        <button
          className={`tab-button ${activeTab === "Study Groups" ? "active-tab" : ""}`}
          onClick={() => onTabChange("Study Groups")}
        >
          Study Groups
        </button>
        <button
          className={`tab-button ${activeTab === "Events" ? "active-tab" : ""}`}
          onClick={() => onTabChange("Events")}
        >
          Events
        </button>
      </div>
      <div className="tab-divider" />
    </header>
  );
};

// Forum Post Component
const ForumPost = ({ title, author, timeAgo, content, likes, comments }) => {
  const [likeCount, setLikeCount] = useState(likes);
  const [isLiked, setIsLiked] = useState(false);

  const handleLike = () => {
    if (isLiked) {
      setLikeCount(likeCount - 1);
    } else {
      setLikeCount(likeCount + 1);
    }
    setIsLiked(!isLiked);
  };

  return (
    <article className="forum-post">
      <h3 className="post-title">{title}</h3>
      <div className="post-meta">
        <div className="post-author">{author}</div>
        <div className="post-time">
          . <span>{timeAgo}</span>
        </div>
      </div>
      <p className="post-content">
        {content}
      </p>
      <div className="post-actions">
        <button
          className={`action-button like-button ${isLiked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/370cd3f80f701d504eedea06fabc9e951d5dc2e23defe0f66b3d0e83d8b076e5?placeholderIfAbsent=true"
            className="action-icon"
            alt="Like"
          />
          <span>{likeCount}</span>
        </button>
        <div className="action-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/ecff699c658fe34513029ce8fffa629ae114cd776b7aa2f45b1f38838995fc6e?placeholderIfAbsent=true"
            className="action-icon"
            alt="Comment"
          />
          <span>{comments}</span>
        </div>
        <button className="action-button">
          <img
            src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/fcea095ebf0999f0ea3e6316691507acdd1b04cddb87dab9f967b3ef0b5adb64?placeholderIfAbsent=true"
            className="action-icon"
            alt="Share"
          />
          <span>Share</span>
        </button>
      </div>
    </article>
  );
};

// Study Group Card Component
const StudyGroupCard = ({ title, members, schedule, focus, targetBand }) => {
  return (
    <div className="study-group-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/7a3c94c8fa5fdfac13e1e92f7498f65402c9a9a2dcdd070dfb454de7aa515cdd?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Members"
        />
        <div>{members}</div>
      </div>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/805320457c3753f9215a81d5212684dbdd1fc248537cf2d45c2e1acb4b970fc1?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Schedule"
        />
        <div>{schedule}</div>
      </div>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/6cd44494ed0d12a18d64e7321dc924c28705b98c53ea197ee45d78c4ee2a269e?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Focus"
        />
        <div>{focus}</div>
      </div>
      <div className="card-footer">
        <div className="target-band-badge">
          {targetBand}
        </div>
        <button className="join-button">
          Join Group
        </button>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, date, time, location, attendance }) => {
  return (
    <div className="event-card">
      <h3 className="card-title">{title}</h3>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/805320457c3753f9215a81d5212684dbdd1fc248537cf2d45c2e1acb4b970fc1?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Date"
        />
        <div>{date}</div>
      </div>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/2ea6e4ad6fa853595913fb53787518169ccd45a5f77b5c8b00a07839b0a1397a?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Time"
        />
        <div>{time}</div>
      </div>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/6cd44494ed0d12a18d64e7321dc924c28705b98c53ea197ee45d78c4ee2a269e?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Location"
        />
        <div>{location}</div>
      </div>
      <div className="card-detail">
        <img
          src="https://cdn.builder.io/api/v1/image/assets/87aa91620a9b427788914d3789c308bf/7a3c94c8fa5fdfac13e1e92f7498f65402c9a9a2dcdd070dfb454de7aa515cdd?placeholderIfAbsent=true"
          className="detail-icon"
          alt="Attendance"
        />
        <div>{attendance}</div>
      </div>
      <button className="rsvp-button">
        RSVP
      </button>
    </div>
  );
};

// Discussion Forums Component
const DiscussionForums = () => {
  return (
    <section className="forums-section">
      <div className="section-header">
        <h2 className="section-title">
          Discussion Forums
        </h2>
        <button className="new-post-button">
          New Post
        </button>
      </div>

      <ForumPost
        title="How I Achieved Band 8 in Writing"
        author="Sarah Chen"
        timeAgo="2 hours ago"
        content="After months of practice, I finally achieved my target score. Here's my detailed study plan and the reso..."
        likes={45}
        comments={23}
      />

      <ForumPost
        title="Speaking Part 2 : Best Strategies"
        author="James Wilson"
        timeAgo="5 hours ago"
        content="In this post, I'll share my top tips for the cue card section and how to extend your answers effectively..."
        likes={32}
        comments={15}
      />

      <ForumPost
        title="Reading Section Time Management"
        author="Maria Garcia"
        timeAgo="1 hours ago"
        content="Struggling with finishing the reading section on time? Here's my proven approach to managing those ..."
        likes={28}
        comments={19}
      />
    </section>
  );
};

// Study Groups Component
const StudyGroups = () => {
  return (
    <section className="study-groups-section">
      <div className="section-header">
        <h2 className="section-title">
          Study Groups
        </h2>
        <button className="create-group-button">
          Create Group
        </button>
      </div>

      <div className="card-container">
        <div className="card-column">
          <StudyGroupCard
            title="IELTS Academic Writing Group"
            members="25 members"
            schedule="Every Tuesday, 7 PM GMT"
            focus="Task 1 & 2 Writing Practice"
            targetBand="Band 7-8 Target"
          />
        </div>
        <div className="card-column">
          <StudyGroupCard
            title="Speaking Practice Partners"
            members="18 members"
            schedule="Daily, Flexible Hours"
            focus="Speaking Mock Tests"
            targetBand="Band 6-7 Target"
          />
        </div>
        <div className="card-column">
          <StudyGroupCard
            title="Reading Speed Champions"
            members="15 members"
            schedule="Weekends, 10 AM GMT"
            focus="Speed Reading Techniques"
            targetBand="Band 7+ Target"
          />
        </div>
      </div>
    </section>
  );
};

// Upcoming Events Component
const UpcomingEvents = () => {
  return (
    <section className="events-section">
      <div className="section-header">
        <h2 className="section-title">
          Upcoming Events
        </h2>
        <button className="create-event-button">
          Create Event
        </button>
      </div>

      <div className="card-container">
        <div className="card-column">
          <EventCard
            title="IELTS Writing Workshop"
            date="March 15, 2024"
            time="2:00 PM - 4:00 PM GMT"
            location="Online (Zoom)"
            attendance="45/50 attending"
          />
        </div>
        <div className="card-column">
          <EventCard
            title="Speaking Mock Test Session"
            date="March 18, 2024"
            time="10:00 AM - 12:00 PM GMT"
            location="Online (Discord)"
            attendance="28/30 attending"
          />
        </div>
        <div className="card-column">
          <EventCard
            title="IELTS Exam Strategy Webinar"
            date="March 20, 2024"
            time="3:00 PM - 5:00 PM GMT"
            location="Online (Zoom)"
            attendance="85/100 attending"
          />
        </div>
      </div>
    </section>
  );
};

// Main Index Component
const Index = () => {
  const [activeTab, setActiveTab] = useState("Forums");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="app-container">
      <Navbar />

      <main className="main-content">
        <CommunityHeader activeTab={activeTab} onTabChange={handleTabChange} />

        {activeTab === "Forums" && <DiscussionForums />}
        {activeTab === "Study Groups" && <StudyGroups />}
        {activeTab === "Events" && <UpcomingEvents />}

        {/* Always show these sections regardless of active tab */}
        <StudyGroups />
        <UpcomingEvents />
      </main>

      <Footer />
    </div>
  );
};

// Root Community Component
const queryClient = new QueryClient();

const Community = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="*" element={<div>Page Not Found</div>} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default Community ;