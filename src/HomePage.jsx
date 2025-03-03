import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import { motion } from "framer-motion";
import "./HomePage.css";
import "./LoginSignup.css";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [username, setUsername] = useState("");

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setUsername(storedUser);
      setIsLoggedIn(true);
      document.querySelector(".homepage").classList.add("logged-in");
    }
  }, []);

  const handleSignup = () => {
    const signupUsername = document.getElementById("signup-username").value;
    const signupEmail = document.getElementById("signup-email").value;
    const signupPassword = document.getElementById("signup-password").value;

    if (signupUsername && signupEmail && signupPassword) {
      localStorage.setItem("user", JSON.stringify({ signupUsername, signupPassword }));
      setShowSignup(false);
      setShowLogin(true);
    } else {
      alert("Please fill in all fields.");
    }
  };

  const handleLogin = () => {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && loginUsername === storedUser.signupUsername && loginPassword === storedUser.signupPassword) {
      localStorage.setItem("loggedInUser", loginUsername);
      setUsername(loginUsername);
      setIsLoggedIn(true);
      setShowLogin(false);
      document.querySelector(".homepage").classList.add("logged-in");
    } else {
      alert("Invalid username or password.");
    }
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
    setUsername("");
    document.querySelector(".homepage").classList.remove("logged-in");
  };

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <div className="left-section">
          <div className="logo-container">
            <img src="/travel.png" alt="Travel Journal Logo" className="logo" />
          </div>
          {isLoggedIn && (
            <nav className="nav-buttons">
              <button className="nav-btn">Home</button>
              <button className="nav-btn">Maps</button>
              <button className="nav-btn">What's New!</button>
              <Link to="/profile">
                <button className="nav-btn">Profile</button>
              </Link>
            </nav>
          )}
        </div>

        <div className="center-section">
          <h1 className="title">Travel Journal</h1>
          <p className="subtitle">Travel. Document. Relive.</p>
        </div>

        <div className="right-section">
          <div className="auth-buttons">
            {!isLoggedIn ? (
              <>
                <button className="btn login" onClick={() => setShowLogin(true)}>Login</button>
                <button className="btn signup" onClick={() => setShowSignup(true)}>Sign Up</button>
              </>
            ) : (
              <button className="btn logout" onClick={handleLogout}>Logout</button>
            )}
          </div>
        </div>
      </header><br /><br /><br /><br />
      <br />
      <br />

      {/* Dashboard Section */}
      <main className="dashboard">
        <h2 className="section-title">Welcome to Travel Journal</h2>
        <p className="description">Describe your moments! 😊</p>

        {isLoggedIn && (
          <div className="cards">
            <motion.div whileHover={{ scale: 1.05 }} className="card new-entry">
              <h3>New Journal Entry</h3>
              <p>Start documenting your next adventure.</p>
              <button className="btn create-btn">Create Entry</button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="card view-entries">
              <h3>View Past Journals</h3>
              <p>Relive your best moments.</p><br />
              <button className="btn view-btn">View Entries</button>
            </motion.div>

            <motion.div whileHover={{ scale: 1.05 }} className="card explore">
              <h3>Explore Destinations</h3>
              <p>Find inspiration for your next trip.</p>
              <button className="btn explore-btn">Discover</button>
            </motion.div>
          </div>
        )}
      </main><br /><br /><br />

      {/* Footer */}
      <footer className="footer">
        <p>
          About | Help |{" "}
          <a href="https://www.linkedin.com/in/siva-bojjani" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
          <a href="https://github.com/SivaBojjani" target="_blank" rel="noopener noreferrer">GitHub</a> |
        </p>
      </footer>

      {/* Login Popup */}
      {showLogin && (
        <div className="popup-overlay" onClick={() => setShowLogin(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <input id="login-username" type="text" placeholder="Username" />
            <input id="login-password" type="password" placeholder="Password" />
            <button className="btn login-btn" onClick={handleLogin}>Login</button>
            <p className="switch-link" onClick={() => { setShowSignup(true); setShowLogin(false); }}>
              Don't have an account? <span>Sign Up</span>
            </p>
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {showSignup && (
        <div className="popup-overlay" onClick={() => setShowSignup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <input id="signup-username" type="text" placeholder="Username" />
            <input id="signup-email" type="email" placeholder="Email" />
            <input id="signup-password" type="password" placeholder="Password" />
            <select>
              <option>Select Country</option>
              <option>USA</option>
              <option>India</option>
              <option>UK</option>
            </select>
            <button className="btn signup-btn" onClick={handleSignup}>Sign Up</button>
            <p className="switch-link" onClick={() => { setShowLogin(true); setShowSignup(false); }}>
              Already have an account? <span>Login</span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
}
