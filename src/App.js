import React, { useState } from "react"; // Importing useState for managing form visibility
import Header from "./Header"; // Importing Header component
import Navbar from "./Navbar"; // Importing Navbar component

import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom"; // Import Navigate for redirection

import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import Footer from "./Footer"; // Removed ContactForm import

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // State for profile visibility
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <div className="app-container">
        <Header 
          isLoggedIn={isLoggedIn} 
          handleLogout={() => setIsLoggedIn(false)} 
          setShowLogin={setShowLogin} 
          setShowSignup={setShowSignup} 
        />
        
        {/* Conditionally render Navbar only for logged-in users */}
        {isLoggedIn && <Navbar />}

        {/* Conditionally render Profile */}
        {isProfileVisible && <Profile />}

        <div className="app-content">
          {/* Routes for navigation */}
          <Routes>
            <Route 
              path="/" 
              element={<HomePage 
                setIsLoggedIn={setIsLoggedIn} 
                setShowLogin={setShowLogin} 
                setShowSignup={setShowSignup} 
                setIsProfileVisible={setIsProfileVisible} 
              />} 
            />
            <Route 
              path="/dashboard" 
              element={isLoggedIn ? 
                <Dashboard setIsProfileVisible={setIsProfileVisible} /> : 
                <Navigate to="/login" />} 
            />
            <Route path="/profile" element={<Profile />} />
            {!isLoggedIn && 
              <Route 
                path="/login" 
                element={<LoginPage 
                  closeModal={() => setShowLogin(false)} 
                  setIsLoggedIn={setIsLoggedIn} 
                />} 
              />
            }
            {!isLoggedIn && 
              <Route 
                path="/signup" 
                element={<SignupPage 
                  closeModal={() => setShowSignup(false)} 
                  setIsLoggedIn={setIsLoggedIn} 
                />} 
              />
            }
          </Routes>
        </div>

        {/* Footer appears only once here */}
        <Footer isLoggedIn={isLoggedIn} />

        {/* Conditional modals for Login and Signup */}
        {showLogin && 
          <LoginPage 
            closeModal={() => setShowLogin(false)} 
            setIsLoggedIn={setIsLoggedIn} 
          />}
        {showSignup && 
          <SignupPage 
            closeModal={() => setShowSignup(false)} 
            setIsLoggedIn={setIsLoggedIn} 
          />}
      </div>
    </Router>
  );
}
