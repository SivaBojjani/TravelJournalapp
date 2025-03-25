import React, { useState } from "react";
import Header from "./Header";
import Navbar from "./Navbar";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Footer from "./Footer";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false);
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header 
          isLoggedIn={isLoggedIn} 
          handleLogout={() => {
            setIsLoggedIn(false);
            setIsProfileVisible(false);
          }} 
          setShowLogin={setShowLogin} 
          setShowSignup={setShowSignup} 
        />
        
        {/* Conditionally render Navbar only for logged-in users */}
        {isLoggedIn && <Navbar />}

        <div className="app-content">
          <Routes>
            <Route 
              path="/" 
              element={
                isLoggedIn ? 
                  <Navigate to="/dashboard" replace /> : 
                  <HomePage 
                    setIsLoggedIn={setIsLoggedIn} 
                    setShowLogin={setShowLogin} 
                    setShowSignup={setShowSignup} 
                  />
              } 
            />
            <Route 
              path="/dashboard" 
              element={
                isLoggedIn ? 
                  <Dashboard setIsProfileVisible={setIsProfileVisible} /> : 
                  <Navigate to="/" />
              } 
            />
            <Route 
              path="/profile" 
              element={
                isLoggedIn ? 
                  <Profile /> : 
                  <Navigate to="/" />
              } 
            />
            <Route 
              path="/login" 
              element={
                !isLoggedIn ? 
                  <LoginPage 
                    closeModal={() => setShowLogin(false)} 
                    setIsLoggedIn={setIsLoggedIn} 
                  /> : 
                  <Navigate to="/dashboard" />
              } 
            />
            <Route 
              path="/signup" 
              element={
                !isLoggedIn ? 
                  <SignupPage 
                    closeModal={() => setShowSignup(false)} 
                    setIsLoggedIn={setIsLoggedIn} 
                  /> : 
                  <Navigate to="/dashboard" />
              } 
            />
          </Routes>
        </div>

        {/* Conditionally render Profile if not using route */}
        {isProfileVisible && <Profile />}

        <Footer isLoggedIn={isLoggedIn} />

        {/* Modal versions for login/signup */}
        {showLogin && 
          <LoginPage 
            closeModal={() => setShowLogin(false)} 
            setIsLoggedIn={setIsLoggedIn} 
          />
        }
        {showSignup && 
          <SignupPage 
            closeModal={() => setShowSignup(false)} 
            setIsLoggedIn={setIsLoggedIn} 
          />
        }
      </div>
    </Router>
  );
}