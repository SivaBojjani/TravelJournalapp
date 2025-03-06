import React, { useState } from "react";
import { motion } from "framer-motion";
import "./Dashboard.css";
import "./Sidebar.css"; // Import CSS for the sidebar

export default function Dashboard() {
  const [isOpen, setIsOpen] = useState(false);

  // Toggle Sidebar
  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <div className={`sidenav ${isOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSidebar}>&times;</button>
        <a href="#">About</a>
        <a href="#">Services</a>
        <a href="#">Clients</a>
        <a href="#">Contact</a>
      </div>

      {/* Main Content */}
      <div id="main" className={isOpen ? "shifted" : ""}>
        {/* Sidebar Toggle Button */}
        <button className="menu-btn" onClick={toggleSidebar}>☰ Menu</button>

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
