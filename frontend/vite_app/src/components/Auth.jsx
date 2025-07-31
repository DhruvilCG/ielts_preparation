import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./auth-styles.css";

const AuthPage = () => {
  const [activeTab, setActiveTab] = useState("signup");
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [signInData, setSignInData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e, type) => {
    if (type === "signup") {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    } else {
      setSignInData({ ...signInData, [e.target.name]: e.target.value });
    }
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (Object.values(signUpData).some((field) => !field.trim())) {
      alert("All fields are required.");
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("https://ielts-preparation-2.onrender.com/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signUpData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Account Created Successfully!");
        setActiveTab("signin");
        setSignUpData({
          firstName: "",
          lastName: "",
          email: "",
          password: "",
          confirmPassword: "",
        });
      } else {
        alert(data.message || "SignUp failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error("SignUp Error:", error);
    }
    setLoading(false);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!signInData.email || !signInData.password) {
      alert("Email and password are required!");
      return;
    }
    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signin", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(signInData),
      });
      const data = await response.json();
      if (response.ok) {
        alert("Login Successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error("Signin Error:", error);
    }
    setLoading(false);
  };

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
            <div className="ielts">IELTS</div>
            <div className="master">Master</div>
          </div>
          <h1 className="auth-title">Welcome to IELTS Preparation</h1>
          <p className="auth-subtitle">Your journey to IELTS success starts here</p>
        </div>

        <div className="auth-tabs">
          <button className={`auth-tab ${activeTab === "signin" ? "active" : ""}`} onClick={() => setActiveTab("signin")}>
            Sign In
          </button>
          <button className={`auth-tab ${activeTab === "signup" ? "active" : ""}`} onClick={() => setActiveTab("signup")}>
            Sign Up
          </button>
        </div>

        {activeTab === "signup" ? (
          <form className="auth-form" onSubmit={handleSignUp}>
            <input type="text" name="firstName" placeholder="First Name" value={signUpData.firstName} onChange={(e) => handleInputChange(e, "signup")} className="auth-input" />
            <input type="text" name="lastName" placeholder="Last Name" value={signUpData.lastName} onChange={(e) => handleInputChange(e, "signup")} className="auth-input" />
            <input type="email" name="email" placeholder="Email" value={signUpData.email} onChange={(e) => handleInputChange(e, "signup")} className="auth-input" />
            <input type="password" name="password" placeholder="Password" value={signUpData.password} onChange={(e) => handleInputChange(e, "signup")} className="auth-input" />
            <input type="password" name="confirmPassword" placeholder="Confirm Password" value={signUpData.confirmPassword} onChange={(e) => handleInputChange(e, "signup")} className="auth-input" />
            <button type="submit" disabled={loading} className="auth-button">{loading ? "Signing Up..." : "Sign Up"}</button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignIn}>
            <input type="email" name="email" placeholder="Email" value={signInData.email} onChange={(e) => handleInputChange(e, "signin")} className="auth-input" />
            <input type="password" name="password" placeholder="Password" value={signInData.password} onChange={(e) => handleInputChange(e, "signin")} className="auth-input" />
            <button type="submit" disabled={loading} className="auth-button">{loading ? "Signing In..." : "Sign In"}</button>
          </form>
        )}

        <button className="switch-auth" onClick={() => setActiveTab(activeTab === "signup" ? "signin" : "signup")}>
          {activeTab === "signup" ? "Already have an account? Sign In" : "Don't have an account? Sign Up"}
        </button>
      </div>
    </div>
  );
};

export default AuthPage;