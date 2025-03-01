import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import "./auth-styles.css";

function AuthPage() {
  const [activeTab, setActiveTab] = useState("signin");
  const [showSignInPassword, setShowSignInPassword] = useState(false);
  const [showSignUpPassword, setShowSignUpPassword] = useState(false);

  return (
    <div className="auth-container">
      <div className="auth-card">
        <div className="auth-header">
          <div className="logo">
                  <div className="ielts">IELTS</div>
                  <div className="master">Master</div>
              </div>
          <h1 className="auth-title">Welcome to IELTS Preparation</h1>
          <p className="auth-subtitle">
            Your journey to IELTS success starts here
          </p>
        </div>

        <div className="auth-tabs">
          <button
            className={`auth-tab ${activeTab === "signin" ? "active" : ""}`}
            onClick={() => setActiveTab("signin")}
          >
            Sign In
          </button>
          <button
            className={`auth-tab ${activeTab === "signup" ? "active" : ""}`}
            onClick={() => setActiveTab("signup")}
          >
            Sign Up
          </button>
        </div>

        {activeTab === "signin" ? (
          <form className="auth-form">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input">
                <input
                  type={showSignInPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  placeholder="Enter your password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowSignInPassword(!showSignInPassword)}
                >
                  {showSignInPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="form-footer">
              <div className="remember-me">
                <input type="checkbox" id="remember" name="remember" />
                <label htmlFor="remember">Remember me</label>
              </div>
              <Link to="/forgot-password" className="forgot-password">
                Forgot password?
              </Link>
            </div>

            <button type="submit" className="auth-button">
              Sign In
            </button>
          </form>
        ) : (
          <form className="auth-form">
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="firstName">First Name</label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  placeholder="First name"
                  required
                />
              </div>
              <div className="form-group">
                <label htmlFor="lastName">Last Name</label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  placeholder="Last name"
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="signupEmail">Email</label>
              <input
                type="email"
                id="signupEmail"
                name="email"
                placeholder="Enter your email"
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="signupPassword">Password</label>
              <div className="password-input">
                <input
                  type={showSignUpPassword ? "text" : "password"}
                  id="signupPassword"
                  name="password"
                  placeholder="Create a password"
                  required
                />
                <button
                  type="button"
                  className="password-toggle"
                  onClick={() => setShowSignUpPassword(!showSignUpPassword)}
                >
                  {showSignUpPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
              <p className="password-hint">Must be at least 8 characters</p>
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                placeholder="Confirm your password"
                required
              />
            </div>

            <div className="terms-checkbox">
              <input type="checkbox" id="terms" name="terms" required />
              <label htmlFor="terms">
                I agree to the{" "}
                <Link to="/terms" className="terms-link">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link to="/privacy" className="terms-link">
                  Privacy Policy
                </Link>
              </label>
            </div>

            <button type="submit" className="auth-button">
              Create Account
            </button>
          </form>
        )}

        <div className="auth-divider">
          <span>OR</span>
        </div>

        <div className="social-login">
          <button className="social-button google">
            <img
              src="/placeholder.svg?height=20&width=20"
              alt="Google"
            />
            Continue with Google
          </button>
          <button className="social-button facebook">
            <img
              src="/placeholder.svg?height=20&width=20"
              alt="Facebook"
            />
            Continue with Facebook
          </button>
        </div>
      </div>
    </div>
  );
}

export default AuthPage;
