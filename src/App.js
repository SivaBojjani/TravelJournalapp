import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./HomePage";
import Dashboard from "./Dashboard";
import Profile from "./Profile";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";

export default function App() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <Router>
      <div>
        {/* HomePage now controls popups dynamically */}
        <HomePage 
          setShowLogin={setShowLogin} 
          setShowSignup={setShowSignup} 
        />

        {/* Conditional popups for Login and Signup */}
        {showLogin && <LoginPage onClose={() => setShowLogin(false)} />}
        {showSignup && <SignupPage onClose={() => setShowSignup(false)} />}

        <Routes>
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/profile" element={<Profile />} />
        </Routes>
      </div>
    </Router>
  );
}
