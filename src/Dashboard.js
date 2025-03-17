import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TravelImage from "./assets/Travel1.png";
import { showSlides } from "./slideshow";

import Profile from "./Profile";
import Footer from "./Footer"; // Import Footer
import "./Dashboard.css";
import "./Sidebar.css";

export default function Dashboard({ isProfileVisible, setIsProfileVisible }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1);

  // Sidebar toggling
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Slideshow functions
  const plusSlides = (n) => {
    setSlideIndex(slideIndex + n);
    showSlides(slideIndex + n, slideIndex);
  };

  const currentSlide = (n) => {
    setSlideIndex(n);
    showSlides(n, slideIndex);
  };

  const cardData = [
    { title: "Manage Your Travel Entries", description: "View your travel entries and manage your profile.", buttonText: "Go to Login" },
    { title: "New Journal Entry", description: "Start documenting your next adventure.", buttonText: "Create Entry" },
    { title: "View Past Journals", description: "Relive your best moments.", buttonText: "View Entries" },
    { title: "Explore Destinations", description: "Find inspiration for your next trip.", buttonText: "Discover" },
    { title: "Feedback", description: "We value your feedback! Let us know how we can improve." },
    { title: "Documentation", description: `For more information, visit our documentation.` },
  ];

  return (
    <div className="dashboard-container">
      {/* Sidebar Navigation */}
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

      {/* Menu Button */}
      <button className="dashboard-menu-btn" onClick={toggleSidebar}>
        ☰ Menu
      </button>

      {/* Profile Sidebar */}
      {isProfileVisible && <Profile />}

      <div id="dashboard-main">
        <h1 className="dashboard-title">Welcome to the Travel Journal</h1>
        <p className="dashboard-subtitle">Document your travels and share your experiences!</p>
        <div className="dashboard-image-container">
          <img src={TravelImage} alt="Travel" className="dashboard-image" />
        </div>
        <p className="dashboard-quote">Travel far enough to meet yourself.</p>

        {/* Slideshow */}
        <div className="slideshow-container">
          {[...Array(5)].map((_, index) => (
            <div className={`mySlides fade ${slideIndex === index + 1 ? "show" : ""}`} key={index}>
              <div className="numbertext">{index + 1} / 5</div>
              <img src={`/pic${index + 1}.png`} alt={`Slide ${index + 1}`} style={{ width: "100%" }} />
              <div className="text">Caption {index + 1}</div>
            </div>
          ))}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>

        {/* Slideshow Dots */}
        <div style={{ textAlign: "center" }}>
          {[...Array(5)].map((_, index) => (
            <span className={`dot ${slideIndex === index + 1 ? "active" : ""}`} onClick={() => currentSlide(index + 1)} key={index}></span>
          ))}
        </div>

        {/* Cards */}
        <div className="card-container">
          {cardData.map((card, index) => (
            <motion.div key={index} whileHover={{ scale: 1.05 }} className="card">
              <h3>{card.title}</h3>
              <p>{card.description}</p>
              {card.buttonText && (
                <button className="btn" onClick={() => navigate("/login")}>
                  {card.buttonText}
                </button>
              )}
            </motion.div>
          ))}
        </div>
      </div>

      {/* Footer */}
      <Footer setShowContactForm={setIsProfileVisible} isLoggedIn={true} />
    </div>
  );
}
