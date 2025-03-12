import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

export default function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isProfileVisible, setIsProfileVisible] = useState(false); // State for profile visibility
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  const handleProfileToggle = () => {
    setIsProfileVisible(!isProfileVisible); // Toggle profile visibility
  };

  return (
    <Router>
      <div>
        {/* <button onClick={handleProfileToggle}>Toggle Profile</button> */} {/* Button to toggle profile */}
        {isProfileVisible && <Profile />} {/* Conditionally render Profile */}

        {/* HomePage now controls popups dynamically */}
        <HomePage 
          setShowLogin={setShowLogin} 
          setShowSignup={setShowSignup} 
          setIsProfileVisible={setIsProfileVisible} 
        />


        {/* Conditional popups for Login and Signup */}
        {showLogin && <LoginPage closeModal={() => setShowLogin(false)} />}
        {showSignup && <SignupPage closeModal={() => setShowSignup(false)} />}

        <Routes>
          <Route path="/dashboard" element={<Dashboard setIsProfileVisible={setIsProfileVisible} />} />

          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
