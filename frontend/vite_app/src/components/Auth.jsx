import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./auth-styles.css";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showPassword, setShowPassword] = useState({
    signIn: false,
    signUp: false,
  });
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const [signInData, setSignInData] = useState({ email: "", password: "" });
  const [signUpData, setSignUpData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e, type) => {
    if (type === "signin") {
      setSignInData({ ...signInData, [e.target.name]: e.target.value });
    } else {
      setSignUpData({ ...signUpData, [e.target.name]: e.target.value });
    }
  };

  const togglePasswordVisibility = (type) => {
    setShowPassword((prev) => ({ ...prev, [type]: !prev[type] }));
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    if (!signInData.email || !signInData.password) {
      alert("Please fill in all fields.");
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
        localStorage.setItem("user", JSON.stringify(data));
        alert("Login Successful!");
        navigate("/");
      } else {
        alert(data.message || "Login failed");
      }
    } catch (error) {
      alert("Network error. Please try again.");
      console.error("SignIn Error:", error);
    }
    setLoading(false);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    if (Object.values(signUpData).some((field) => field.trim() === "")) {
      alert("All fields are required.");
      return;
    }
    if (signUpData.password !== signUpData.confirmPassword) {
      alert("Passwords do not match.");
      return;
    }

    setLoading(true);
    try {
      const response = await fetch("http://localhost:5000/api/auth/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          firstName: signUpData.firstName,
          lastName: signUpData.lastName,
          email: signUpData.email,
          password: signUpData.password,
        }),
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

        {activeTab === "signin" ? (
          <form className="auth-form" onSubmit={handleSignIn}>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input type="email" name="email" placeholder="Enter your email" value={signInData.email} onChange={(e) => handleInputChange(e, "signin")} required />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input type={showPassword.signIn ? "text" : "password"} name="password" placeholder="Enter your password" value={signInData.password} onChange={(e) => handleInputChange(e, "signin")} required />
                <button type="button" className="password-toggle" onClick={() => togglePasswordVisibility("signIn")}>
                  {showPassword.signIn ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>
        ) : (
          <form className="auth-form" onSubmit={handleSignUp}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input type="text" name="firstName" placeholder="First name" value={signUpData.firstName} onChange={(e) => handleInputChange(e, "signup")} required />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input type="text" name="lastName" placeholder="Last name" value={signUpData.lastName} onChange={(e) => handleInputChange(e, "signup")} required />
              </div>
            </div>
            
            <button type="submit" className="auth-button" disabled={loading}>
              {loading ? "Creating Account..." : "Create Account"}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}

export default AuthPage;
