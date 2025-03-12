import React from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn, handleLogout, setShowLogin, setShowSignup }) {
  return (
    <header className="header">
      <div className="left-section">
        <div className="logo-container">
          <img src="/travel.png" alt="Travel Journal Logo" className="logo" />
        </div>
        {isLoggedIn && (
          <nav className="nav-buttons">
            <Link to="/"><button className="nav-btn">Home</button></Link>
            <button className="nav-btn">Maps</button>
            <button className="nav-btn">What's New!</button>
            <Link to="/profile"><button className="nav-btn">Profile</button></Link>
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
              <button className="btn login" onClick={setShowLogin}>Login</button>
              <button className="btn signup" onClick={setShowSignup}>Sign Up</button>
            </>
          ) : (
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          )}
        </div>
      </div>
    </header>
  );
}
