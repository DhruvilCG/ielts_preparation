import React, { useState } from "react";
import "./Tabs.css"; // Import the CSS file for styling

export const Tabs = ({ defaultValue, children }) => {
  const [activeTab, setActiveTab] = useState(defaultValue);

  return (
    <div className="tabs">
      {React.Children.map(children, (child) =>
        React.cloneElement(child, { activeTab, setActiveTab })
      )}
    </div>
  );
};

export const TabsList = ({ children }) => {
  return <div className="tabs-list">{children}</div>;
};

export const TabsTrigger = ({ value, setActiveTab, activeTab, children }) => {
  return (
    <button
      className={`tabs-trigger ${activeTab === value ? "active" : ""}`}
      onClick={() => setActiveTab(value)}
    >
      {children}
    </button>
  );
};

export const TabsContent = ({ value, activeTab, children }) => {
  return activeTab === value ? <div className="tabs-content">{children}</div> : null;
};
