import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './LoginSignup.css';

export default function LoginPage({ closeModal, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
      
      if (!storedUser) {
        setError("No account found. Please sign up first.");
        return;
      }

      if (storedUser.username !== username) {
        setError("Username not found");
        return;
      }

      if (storedUser.password !== password) {
        setError("Incorrect password");
        return;
      }

      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } finally {
      setIsLoading(false);
    }
  };

  const handleCancel = () => {
    navigate("/");
    if (closeModal) closeModal();
  };

  return (
    <div className="container">
      <h2>Login To Your Account</h2>
      {error && <div className="error-message">{error}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>
        
        <div className="form-group password-field">
          <label htmlFor="password">Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
          <button 
            type="button" 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <div className="button-group">
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="spinner"></span> Logging in...
              </>
            ) : "Login"}
          </button>
          <button 
            type="button" 
            className="cancelbtn"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>
      
      <p className="auth-redirect">
        Don't have an account? <Link to="/signup">Sign up</Link>
      </p>
    </div>
  );
}