import React, { useState } from "react";
import { motion } from "framer-motion";
import Profile from "./Profile"; // Import Profile component
import "./Dashboard.css";
import "./Sidebar.css"; // Sidebar styles

export default function Dashboard({ isProfileVisible, setIsProfileVisible }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Full-Screen Sidebar Navigation
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Full-Screen Sidebar Navigation */}
      <div className={`overlay ${isSidebarOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSidebar}>&times;</button>
        <div className="overlay-content">
          <a href="#" onClick={() => { setIsProfileVisible(true); }}>Profile</a> {/* Link to open profile */}

          <a href="#">About</a>
          <a href="#">Services</a>
          <a href="#">Clients</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* Menu Button to Open Sidebar */}
      <button className="dashboard-menu-btn" onClick={toggleSidebar}>☰ Menu</button>

      {/* Profile Sidebar (Right Side) */}
      {isProfileVisible && <Profile />} {/* Conditionally render Profile based on props */}

      {/* Main Dashboard Content */}
      <div id="dashboard-main">
        <div className="cards">
          <motion.div whileHover={{ scale: 1.05 }} className="card new-entry">
            <h3>New Journal Entry</h3>
            <p>Start documenting your next adventure.</p>
            <button className="btn create-btn">Create Entry</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="card view-entries">
            <h3>View Past Journals</h3>
            <p>Relive your best moments.</p>
            <button className="btn view-btn">View Entries</button>
          </motion.div>
          <motion.div whileHover={{ scale: 1.05 }} className="card explore">
            <h3>Explore Destinations</h3>
            <p>Find inspiration for your next trip.</p>
            <button className="btn explore-btn">Discover</button>
          </motion.div>
        </div>
      </div>
    </div>
  );
}
