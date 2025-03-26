import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import './LoginSignup.css';

export default function LoginPage({ closeModal, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    setError("");
    
    const storedUser = JSON.parse(localStorage.getItem("loggedInUser"));
    
    if (!storedUser) {
      setError("No account found. Please sign up first.");
      return;
    }

    if (storedUser.username === username && storedUser.password === password) {
      setIsLoggedIn(true);
      localStorage.setItem("isLoggedIn", "true");
      navigate("/dashboard");
    } else {
      setError("Incorrect username or password");
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
        
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input 
            type="password" 
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        <div className="button-group">
          <button type="submit">Login</button>
          <button 
            type="button" 
            className="cancelbtn" 
            onClick={handleCancel}
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