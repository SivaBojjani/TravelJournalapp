import React from "react";
import { useNavigate } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn, username, handleLogout, setShowLogin, setShowSignup }) {
  const navigate = useNavigate();

  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-container">
          <img src="/travel.png" alt="Travel Journal Logo" className="logo" />
        </div>
        {isLoggedIn && (
          <nav className="nav-buttons">
            <button className="nav-btn" onClick={() => navigate("/")}>Home</button>
            <button className="nav-btn" onClick={() => navigate("/maps")}>Maps</button>
            <button className="nav-btn" onClick={() => navigate("/new")}>What's New!</button>
            <button className="nav-btn" onClick={() => navigate("/profile")}>Profile</button>
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
    </header>
  );
}
