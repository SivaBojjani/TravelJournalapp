import React, { useState } from "react";
import { motion } from "framer-motion";
import "./HomePage.css";
import "./LoginSignup.css";

export default function HomePage() {
  const [showLogin, setShowLogin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);

  return (
    <div className="homepage">
      {/* Header Section */}
      <header className="header">
        <h1 className="title">Travel Journal</h1>
        <p className="subtitle">Travel. Document. Relive.</p>
        <div className="auth-buttons">
          <button className="btn login" onClick={() => setShowLogin(true)}>Login</button>
          <button className="btn signup" onClick={() => setShowSignup(true)}>Sign Up</button>
        </div>
      </header>
      
      {/* Dashboard Section */}
      <main className="dashboard">
        <h2 className="section-title">Your Travel Dashboard</h2>
        <div className="cards">
          <motion.div whileHover={{ scale: 1.05 }} className="card new-entry">
            <h3>New Journal Entry</h3>
            <p>Start documenting your next adventure.</p>
            <button className="btn" style={{color:"black"}}>Create Entry</button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="card view-entries">
            <h3>View Past Journals</h3>
            <p>Relive your best moments. </p>
            <button className="btn" style={{color:"black"}}>View Entries</button>
          </motion.div>
          
          <motion.div whileHover={{ scale: 1.05 }} className="card explore">
            <h3>Explore Destinations</h3>
            <p>Find inspiration for your next trip.</p>
            <button className="btn" style={{color:"black"}}>Discover</button>
          </motion.div>
        </div>
      </main>
      
      {/* Footer */}
      <footer className="footer">
        <p>About | Help | <a href="https://www.linkedin.com/in/siva-bojjani" target="_blank" rel="noopener noreferrer">LinkedIn</a></p>
      </footer>
      
      {/* Login Popup */}
      {showLogin && (
        <div className="popup-overlay" onClick={() => setShowLogin(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Login</h2>
            <input type="text" placeholder="Username" />
            <input type="password" placeholder="Password" />
            <button className="btn" onClick={() => setShowLogin(false)}>Login</button>
            <p onClick={() => { setShowSignup(true); setShowLogin(false); }}>Don't have an account? Sign Up</p>
          </div>
        </div>
      )}
      
      {/* Signup Popup */}
      {showSignup && (
        <div className="popup-overlay" onClick={() => setShowSignup(false)}>
          <div className="popup" onClick={(e) => e.stopPropagation()}>
            <h2>Sign Up</h2>
            <input type="text" placeholder="Username" />
            <input type="email" placeholder="Email" />
            <input type="password" placeholder="Password" />
            <select>
              <option>Select Country</option>
              <option>USA</option>
              <option>India</option>
              <option>UK</option>
            </select>
            <button className="btn" onClick={() => setShowSignup(false)}>Sign Up</button>
            <p onClick={() => { setShowLogin(true); setShowSignup(false); }}>Already have an account? Login</p>
          </div>
        </div>
      )}
    </div>
  );
}