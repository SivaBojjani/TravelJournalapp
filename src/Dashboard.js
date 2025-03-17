import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TravelImage from "./assets/Travel1.png"; // Import the travel image

import Profile from "./Profile";
import "./Dashboard.css";
import "./Sidebar.css"; // Sidebar styles

export default function Dashboard({ isProfileVisible, setIsProfileVisible }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // Toggle Full-Screen Sidebar Navigation
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Data for cards
  const cardData = [
    {
      title: "Manage Your Travel Entries",
      description: "View your travel entries and manage your profile.",
      buttonText: "Go to Login",
    },
    {
      title: "New Journal Entry",
      description: "Start documenting your next adventure.",
      buttonText: "Create Entry",
    },
    {
      title: "View Past Journals",
      description: "Relive your best moments.",
      buttonText: "View Entries",
    },
    {
      title: "Explore Destinations",
      description: "Find inspiration for your next trip.",
      buttonText: "Discover",
    },
    {
      title: "Feedback",
      description: "We value your feedback! Let us know how we can improve.",
    },
    {
      title: "Documentation",
      description: `For more information, visit our documentation.`,
    },
  ];

  return (
    <div className="dashboard-container">
      {/* Full-Screen Sidebar Navigation */}
      <div className={`overlay ${isSidebarOpen ? "open" : ""}`}>
        <button className="closebtn" onClick={toggleSidebar}>
          &times;
        </button>
        <div className="overlay-content">
          <button onClick={() => setIsProfileVisible(true)}>Profile</button>
          <button>About</button>
          <button>Services</button>
          <button>Clients</button>
          <button>Contact</button>
        </div>
      </div>

      {/* Menu Button to Open Sidebar */}
      <button className="dashboard-menu-btn" onClick={toggleSidebar}>
        ☰ Menu
      </button>

      {/* Profile Sidebar (Right Side) */}
      {isProfileVisible && <Profile />}

      <div id="dashboard-main">
        <h1 style={{ textAlign: "center", fontSize: "2.5em", fontWeight: "bold",color:"orange" }}>Welcome to the Travel Journal</h1>
        <p style={{ textAlign: "center", fontSize: "1.5em",color:"green"}}>Document your travels and share your experiences!</p>
        <div style={{ display: "flex", justifyContent: "center"}}>
          <img src={TravelImage} alt="Travel" style={{ width: "50%", marginBottom: "20px" }} />
        </div>
        <p style={{ textAlign: "center", fontSize: "1.9em", fontWeight: "bold" ,color:"brown"}}>
          Travel far enough to meet yourself.
        </p>

        {/* Render cards dynamically */}
        <div className="card-container">
          {cardData.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.05 }}
              className="card"
            >
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.buttonText && (
                <button
                  className="btn"
                  onClick={() => navigate("/login")}
                >
                  {card.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}
