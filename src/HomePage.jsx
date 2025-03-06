import React, { useState, useEffect } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Main from "./Main";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import "./LoginSignup.css"; // Ensure you have this file for popup styling

export default function HomePage() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  useEffect(() => {
    const storedUser = localStorage.getItem("loggedInUser");
    if (storedUser) {
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    setIsLoggedIn(false);
  };

  return (
    <>
      <Header
        isLoggedIn={isLoggedIn}
        handleLogout={handleLogout}
        setShowLogin={() => {
          setShowLogin(true);
          setShowSignup(false);
        }}
        setShowSignup={() => {
          setShowSignup(true);
          setShowLogin(false);
        }}
      />
      <Main isLoggedIn={isLoggedIn} />
      <Footer />

      {/* Login Popup */}
      {showLogin && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowLogin(false)}>×</button>
            <LoginPage switchToSignup={() => {
              setShowLogin(false);
              setShowSignup(true);
            }} />
          </div>
        </div>
      )}

      {/* Signup Popup */}
      {showSignup && (
        <div className="popup-overlay">
          <div className="popup">
            <button className="close-btn" onClick={() => setShowSignup(false)}>×</button>
            <SignupPage switchToLogin={() => {
              setShowSignup(false);
              setShowLogin(true);
            }} />
          </div>
        </div>
      )}
    </>
  );
}
