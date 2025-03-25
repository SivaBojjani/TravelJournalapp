import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./Header.css";

export default function Header({ isLoggedIn, handleLogout }) {
  const [isShrunk, setIsShrunk] = useState(false);

  const handleScroll = () => {
    if (window.scrollY > 50) {
      setIsShrunk(true);
    } else {
      setIsShrunk(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header className={`header ${isShrunk ? "shrink" : ""}`}>
      <div className="left-section">
        <div className="logo-container">
          <Link to="/">
            <img src="/travel.png" alt="Travel Journal Logo" className="logo" />
          </Link>
        </div>
        {isLoggedIn && (
            <nav className="nav-buttons">
            </nav>
        )}
      </div>
      <div className="center-section">
        <h1 className="title">Travel Journal</h1>
        <p className="subtitle">Travel. Document. Relive.</p>
      </div>
      <div className="right-section">
        <div className="auth-buttons">
          {isLoggedIn ? (
            <button className="btn logout" onClick={handleLogout}>Logout</button>
          ) : null}
        </div>
      </div>
    </header>
  );
}