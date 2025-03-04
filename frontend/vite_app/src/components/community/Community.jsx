import React, { useState } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./community.css";

// Inline UI components that were previously imported
const ToastProvider = ({ children }) => {
  return <div className="toast-provider">{children}</div>;
};

const ToastViewport = React.forwardRef((props, ref) => {
  return <div ref={ref} className="toast-viewport" {...props} />;
});

const Toast = React.forwardRef(({ className, variant = "default", ...props }, ref) => {
  const variantClass = variant === "destructive" ? "toast-destructive" : "toast-default";
  
  return (
    <div
      ref={ref}
      className={`toast ${variantClass} ${className || ""}`}
      {...props}
    />
  );
});

const ToastClose = React.forwardRef(({ className, ...props }, ref) => {
  return (
    <button
      ref={ref}
      className={`toast-close ${className || ""}`}
      {...props}
    >
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="close-icon">
        <line x1="18" y1="6" x2="6" y2="18"></line>
        <line x1="6" y1="6" x2="18" y2="18"></line>
      </svg>
    </button>
  );
});

const ToastTitle = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={`toast-title ${className || ""}`} {...props} />;
});

const ToastDescription = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={`toast-description ${className || ""}`} {...props} />;
});

// ToastContext for storing and managing toasts
const ToastContext = React.createContext({
  toasts: [],
  addToast: () => {},
  dismissToast: () => {},
  removeToast: () => {},
});

const useToast = () => {
  const context = React.useContext(ToastContext);
  if (!context) {
    throw new Error("useToast must be used within a ToastProvider");
  }
  return context;
};

const ToastContextProvider = ({ children }) => {
  const [toasts, setToasts] = useState([]);

  const addToast = (toast) => {
    setToasts((prev) => [...prev, { id: Math.random().toString(), ...toast }]);
  };

  const dismissToast = (id) => {
    setToasts((prev) => prev.map((t) => (t.id === id ? { ...t, dismissed: true } : t)));
  };

  const removeToast = (id) => {
    setToasts((prev) => prev.filter((t) => t.id !== id));
  };

  return (
    <ToastContext.Provider value={{ toasts, addToast, dismissToast, removeToast }}>
      {children}
    </ToastContext.Provider>
  );
};

const Toaster = () => {
  const { toasts } = useToast();

  return (
    <ToastProvider>
      {toasts.map(({ id, title, description, action, ...props }) => (
        <Toast key={id} {...props}>
          <div className="toast-content">
            {title && <ToastTitle>{title}</ToastTitle>}
            {description && <ToastDescription>{description}</ToastDescription>}
          </div>
          {action}
          <ToastClose />
        </Toast>
      ))}
      <ToastViewport />
    </ToastProvider>
  );
};

// Tooltip components
const TooltipProvider = ({ children }) => {
  return <div className="tooltip-provider">{children}</div>;
};

const Tooltip = ({ children, open, defaultOpen, onOpenChange }) => {
  const [isOpen, setIsOpen] = useState(defaultOpen || false);
  
  const handleOpenChange = (open) => {
    setIsOpen(open);
    onOpenChange?.(open);
  };

  const contextValue = {
    open: open !== undefined ? open : isOpen,
    onOpenChange: handleOpenChange,
  };

  return (
    <div className="tooltip-root" data-state={contextValue.open ? "open" : "closed"}>
      {React.Children.map(children, (child) => {
        return React.isValidElement(child)
          ? React.cloneElement(child, { ...contextValue })
          : child;
      })}
    </div>
  );
};

const TooltipTrigger = React.forwardRef(({ className, ...props }, ref) => {
  return <div ref={ref} className={`tooltip-trigger ${className || ''}`} {...props} />;
});

const TooltipContent = React.forwardRef(({ className, sideOffset = 4, ...props }, ref) => {
  return (
    <div
      ref={ref}
      className={`tooltip-content ${className || ''}`}
      style={{ '--side-offset': `${sideOffset}px` }}
      {...props}
    />
  );
});

// Sonner toast component
const Sonner = ({ position = "bottom-right", className, ...props }) => {
  return (
    <div
      className={`sonner ${position} ${className || ''}`}
      {...props}
    />
  );
};

// Custom QueryClient implementation (simplified)
const QueryClient = function() {
  this.queries = new Map();
  this.mutations = new Map();
  
  this.getQueryData = (queryKey) => {
    return this.queries.get(JSON.stringify(queryKey))?.data;
  };
  
  this.setQueryData = (queryKey, data) => {
    const stringifiedKey = JSON.stringify(queryKey);
    const existing = this.queries.get(stringifiedKey);
    this.queries.set(stringifiedKey, { ...existing, data });
    return data;
  };
};

// Custom QueryClientProvider
const QueryClientProvider = ({ client, children }) => {
  const clientContext = React.createContext(client);
  return (
    <clientContext.Provider value={client}>
      {children}
    </clientContext.Provider>
  );
};

// NotFound Component
const NotFound = () => {
  const location = { pathname: window.location.pathname };

  React.useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="not-found">
      <div className="not-found-content">
        <h1 className="not-found-title">404</h1>
        <p className="not-found-message">Oops! Page not found</p>
        <a href="/" className="not-found-link">
          Return to Home
        </a>
      </div>
    </div>
  );
};

// Navbar Component
const Navbar = () => {
  return (
    <header className="navbar">
      <div className="logo">IELTS Prep</div>
      <nav className="nav-links">
        <a className="nav-link" href="#">Home</a>
        <a className="nav-link" href="#">Community</a>
        <a className="nav-link" href="#">Practice Tests</a>
        <a className="nav-link" href="#">
          <div className="link-with-icon">
            Resources
            <svg className="icon" width="12" height="8" viewBox="0 0 12 8" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M1 1.5L6 6.5L11 1.5" stroke="black" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>
        </a>
        <a className="nav-link sign-in-button" href="#">Sign In</a>
      </nav>
    </header>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-main">
          <div className="footer-brand">
            <div className="footer-logo">IELTS Prep</div>
            <p className="footer-description">
              Join our community of IELTS test-takers to share study tips,
              practice together, and get support on your IELTS journey.
            </p>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">Learn</div>
            <a className="footer-link" href="#">Practice Tests</a>
            <a className="footer-link" href="#">Speaking</a>
            <a className="footer-link" href="#">Writing</a>
            <a className="footer-link" href="#">Reading</a>
          </div>
          <div className="footer-links-column">
            <div className="footer-links-title">Company</div>
            <a className="footer-link" href="#">About</a>
            <a className="footer-link" href="#">Careers</a>
            <a className="footer-link" href="#">Contact</a>
          </div>
        </div>
      </div>
      <div className="footer-divider"></div>
      <div className="footer-copyright">
        <div className="copyright-symbol">c</div>
        <div className="copyright-text">IELTS Prep Community 2023</div>
      </div>
    </footer>
  );
};

// Community Header Component
const CommunityHeader = ({ activeTab, onTabChange }) => {
  return (
    <div className="community-header">
      <h1 className="community-title">Community</h1>
      <div className="community-tabs">
        <button
          className={`tab-button ${activeTab === "Forums" ? "active-tab" : ""}`}
          onClick={() => onTabChange("Forums")}
        >
          Discussion Forums
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
      <div className="tab-divider"></div>
    </div>
  );
};

// Forum Post Component
const ForumPost = ({ title, author, time, content }) => {
  const [liked, setLiked] = useState(false);
  const [likes, setLikes] = useState(0);

  const handleLike = () => {
    if (liked) {
      setLikes(likes - 1);
    } else {
      setLikes(likes + 1);
    }
    setLiked(!liked);
  };

  return (
    <div className="forum-post">
      <div className="post-title">{title}</div>
      <div className="post-meta">
        <div className="post-author">{author}</div>
        <div className="post-time">{time}</div>
      </div>
      <div className="post-content">{content}</div>
      <div className="post-actions">
        <button
          className={`action-button ${liked ? "liked" : ""}`}
          onClick={handleLike}
        >
          <svg
            className="action-icon"
            width="21"
            height="19"
            viewBox="0 0 21 19"
            fill={liked ? "rgba(140, 40, 255, 1)" : "none"}
            stroke={liked ? "rgba(140, 40, 255, 1)" : "black"}
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M18.3387 2.54938C17.9568 2.16412 17.5024 1.85956 17.0023 1.65173C16.5021 1.4439 15.9672 1.33716 15.4267 1.33716C14.8863 1.33716 14.3514 1.4439 13.8512 1.65173C13.351 1.85956 12.8967 2.16412 12.5147 2.54938L11.4997 3.57438L10.4847 2.54938C9.71056 1.76958 8.66312 1.33731 7.57273 1.33731C6.48234 1.33731 5.4349 1.76958 4.66073 2.54938C3.8866 3.32917 3.45751 4.38492 3.45751 5.48438C3.45751 6.58383 3.8866 7.63958 4.66073 8.41938L5.67573 9.44438L11.4997 15.3194L17.3237 9.44438L18.3387 8.41938C18.7201 8.03547 19.0214 7.57851 19.2269 7.07537C19.4325 6.57223 19.5381 6.03387 19.5381 5.48988C19.5381 4.94589 19.4325 4.40752 19.2269 3.90438C19.0214 3.40125 18.7201 2.94429 18.3387 2.56038V2.54938Z"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Like {likes > 0 && `(${likes})`}
        </button>
        <button className="action-button">
          <svg
            className="action-icon"
            width="19"
            height="19"
            viewBox="0 0 19 19"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.9997 12.6667C17.9997 13.1382 17.8112 13.5903 17.4736 13.9279C17.1361 14.2654 16.6839 14.4538 16.2123 14.4538H5.06231L1.33301 18.1831V3.3103C1.33301 2.83873 1.52153 2.38658 1.85909 2.04903C2.19664 1.71148 2.64879 1.52296 3.12036 1.52296H16.2123C16.6839 1.52296 17.1361 1.71148 17.4736 2.04903C17.8112 2.38658 17.9997 2.83873 17.9997 3.3103V12.6667Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Reply
        </button>
        <button className="action-button">
          <svg
            className="action-icon"
            width="23"
            height="20"
            viewBox="0 0 23 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.9697 18.7739C11.9697 18.7739 1.90625 13.5239 1.90625 7.18057C1.90713 6.15648 2.2149 5.15874 2.78932 4.32289C3.36374 3.48704 4.17368 2.85394 5.11063 2.50657C6.04758 2.15919 7.06618 2.11407 8.03022 2.37744C8.99425 2.6408 9.85724 3.19999 10.4997 3.98557L11.9697 5.84057L13.4397 3.98557C14.0822 3.19999 14.9452 2.6408 15.9092 2.37744C16.8732 2.11407 17.8918 2.15919 18.8288 2.50657C19.7657 2.85394 20.5757 3.48704 21.1501 4.32289C21.7245 5.15874 22.0323 6.15648 22.0332 7.18057C22.0332 13.5239 11.9697 18.7739 11.9697 18.7739Z"
              stroke="black"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          Save
        </button>
      </div>
    </div>
  );
};

// Study Group Card Component
const StudyGroupCard = ({ title, members, frequency, targetBand }) => {
  return (
    <div className="study-group-card">
      <div className="card-title">{title}</div>
      <div className="card-detail">
        <svg
          className="detail-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M12.75 15.75V14.25C12.75 13.4544 12.4339 12.6913 11.8713 12.1287C11.3087 11.5661 10.5456 11.25 9.75 11.25H3.75C2.95435 11.25 2.19129 11.5661 1.62868 12.1287C1.06607 12.6913 0.75 13.4544 0.75 14.25V15.75"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M6.75 8.25C8.40685 8.25 9.75 6.90685 9.75 5.25C9.75 3.59315 8.40685 2.25 6.75 2.25C5.09315 2.25 3.75 3.59315 3.75 5.25C3.75 6.90685 5.09315 8.25 6.75 8.25Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.25 15.75V14.25C17.2495 13.5853 17.0283 12.9396 16.621 12.4142C16.2138 11.8889 15.6436 11.5137 15 11.3475"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M12 2.34753C12.6453 2.51276 13.2173 2.88806 13.6257 3.41417C14.0342 3.94028 14.2559 4.58747 14.2559 5.25378C14.2559 5.92009 14.0342 6.56728 13.6257 7.09339C13.2173 7.6195 12.6453 7.9948 12 8.16003"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>{members} members</div>
      </div>
      <div className="card-detail">
        <svg
          className="detail-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 4.5V9L12 10.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>{frequency}</div>
      </div>
      <div className="card-footer">
        <div className="target-band-badge">Target: Band {targetBand}</div>
        <button className="join-button">Join</button>
      </div>
    </div>
  );
};

// Event Card Component
const EventCard = ({ title, date, time, location }) => {
  return (
    <div className="event-card">
      <div className="card-title">{title}</div>
      <div className="card-detail">
        <svg
          className="detail-icon"
          width="16"
          height="18"
          viewBox="0 0 16 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M13.25 3H2.75C1.7835 3 1 3.7835 1 4.75V15.25C1 16.2165 1.7835 17 2.75 17H13.25C14.2165 17 15 16.2165 15 15.25V4.75C15 3.7835 14.2165 3 13.25 3Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M11 1V5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5 1V5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M1 9H15"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>{date}</div>
      </div>
      <div className="card-detail">
        <svg
          className="detail-icon"
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M9 16.5C13.1421 16.5 16.5 13.1421 16.5 9C16.5 4.85786 13.1421 1.5 9 1.5C4.85786 1.5 1.5 4.85786 1.5 9C1.5 13.1421 4.85786 16.5 9 16.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M9 4.5V9L12 10.5"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>{time}</div>
      </div>
      <div className="card-detail">
        <svg
          className="detail-icon"
          width="16"
          height="20"
          viewBox="0 0 16 20"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15 8.5C15 14.1667 8 19 8 19C8 19 1 14.1667 1 8.5C1 6.51088 1.79018 4.60322 3.1967 3.1967C4.60322 1.79018 6.51088 1 8 1C9.48912 1 11.3968 1.79018 12.8033 3.1967C14.2098 4.60322 15 6.51088 15 8.5Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M8 11C9.38071 11 10.5 9.88071 10.5 8.5C10.5 7.11929 9.38071 6 8 6C6.61929 6 5.5 7.11929 5.5 8.5C5.5 9.88071 6.61929 11 8 11Z"
            stroke="black"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
        <div>{location}</div>
      </div>
      <button className="rsvp-button">RSVP</button>
    </div>
  );
};

// Discussion Forums Component
const DiscussionForums = () => {
  return (
    <section className="forums-section">
      <div className="section-header">
        <h2 className="section-title">Discussion Forums</h2>
        <button className="new-post-button">New Post</button>
      </div>
      <div className="forum-posts">
        <ForumPost
          title="How to improve speaking fluency?"
          author="Emily Chen"
          time="2 hours ago"
          content="I've been struggling with speaking fluency in the IELTS exam. Does anyone have tips for improving spontaneous speech and reducing hesitation?"
        />
        <ForumPost
          title="Writing Task 2 structure advice needed"
          author="Mohammed Al-Fayez"
          time="1 day ago"
          content="I'm confused about how to structure my Writing Task 2 essays effectively. Should I always use a 5-paragraph approach, or are there better alternatives?"
        />
        <ForumPost
          title="Reading section time management"
          author="Priya Sharma"
          time="3 days ago"
          content="I always run out of time during the reading section. How do you manage to complete all 40 questions within the 60-minute timeframe? Any specific strategies?"
        />
      </div>
    </section>
  );
};

// Study Groups Component
const StudyGroups = () => {
  return (
    <section className="study-groups-section">
      <div className="section-header">
        <h2 className="section-title">Study Groups</h2>
        <button className="create-group-button">Create Group</button>
      </div>
      <div className="card-container">
        <div className="card-column">
          <StudyGroupCard
            title="Speaking Practice Partners"
            members={8}
            frequency="Twice weekly"
            targetBand={7}
          />
        </div>
        <div className="card-column">
          <StudyGroupCard
            title="Academic Writing Workshop"
            members={12}
            frequency="Weekly"
            targetBand={7.5}
          />
        </div>
        <div className="card-column">
          <StudyGroupCard
            title="Intensive Reading Group"
            members={6}
            frequency="Three times weekly"
            targetBand={8}
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
        <h2 className="section-title">Upcoming Events</h2>
        <button className="create-event-button">Create Event</button>
      </div>
      <div className="card-container">
        <div className="card-column">
          <EventCard
            title="IELTS Writing Workshop"
            date="Sept 15, 2023"
            time="6:00 PM - 8:00 PM"
            location="Online via Zoom"
          />
        </div>
        <div className="card-column">
          <EventCard
            title="Mock Speaking Test Practice"
            date="Sept 18, 2023"
            time="5:30 PM - 7:30 PM"
            location="Online via Google Meet"
          />
        </div>
        <div className="card-column">
          <EventCard
            title="IELTS Exam Strategy Webinar"
            date="Sept 22, 2023"
            time="7:00 PM - 8:30 PM"
            location="Online via Zoom"
          />
        </div>
      </div>
    </section>
  );
};

// Index Component
const Index = () => {
  const [activeTab, setActiveTab] = useState("Forums");

  const handleTabChange = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="index-page">
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

// Main App Component
const App = () => {
  const queryClient = new QueryClient();

  return (
    <ToastContextProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Index />} />
            {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
            <Route path="*" element={<NotFound />} />
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </ToastContextProvider>
  );
};

export default App;
