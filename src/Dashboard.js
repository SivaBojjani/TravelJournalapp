import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import TravelImage from "./assets/Travel1.png"; // Import the travel image
import { showSlides } from "./slideshow"; // Import the slideshow function
import Profile from "./Profile";
import "./Dashboard.css";
import "./Sidebar.css"; // Sidebar styles

export default function Dashboard({ isProfileVisible, setIsProfileVisible }) {
  const navigate = useNavigate();
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [slideIndex, setSlideIndex] = useState(1); // Initialize slide index

  // Toggle Full-Screen Sidebar Navigation
  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  // Slideshow functions
  const plusSlides = (n) => {
    // Compute the new index and wrap around if out of bounds
    let newIndex = slideIndex + n;
    if (newIndex > 5) newIndex = 1;
    if (newIndex < 1) newIndex = 5;
  
    setSlideIndex(newIndex);
    showSlides(newIndex); // Call showSlides with the updated index
  };
  
  const currentSlide = (n) => {
    setSlideIndex(n); // Update the current slide
    showSlides(n); // Call showSlides to display the selected slide
  };
  

  // Data for cards
  const cardData = [
    {
      title: "Manage Your Travel Entries",
      description: "View your travel entries and manage your profile.",
      buttonText: "Edit Entries",
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
        <h1 style={{ textAlign: "center", fontSize: "2.5em", fontWeight: "bold", color: "orange" }}>Welcome to the Travel Journal</h1>
        <p style={{ textAlign: "center", fontSize: "1.5em", color: "green" }}>Document your travels and share your experiences!</p>
        <div style={{ display: "flex", justifyContent: "center" }}>
          <img src={TravelImage} alt="Travel" style={{ width: "50%", marginBottom: "20px" }} />
        </div>
        <p style={{ textAlign: "center", fontSize: "1.9em", fontWeight: "bold", color: "brown" }}>
          Travel far enough to meet yourself.
        </p>

        {/* Slideshow Container */}
        <div className="slideshow-container">
          <div className="mySlides fade">
            <div className="numbertext">1 / 5</div>
<img src="/pic1.png" style={{ width: "100%" }} />

            <div className="text">A breathtaking view of a mountain range at sunrise.</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">2 / 5</div>
<img src="/pic2.png" style={{ width: "100%" }} />

            <div className="text">A serene beach with crystal clear waters and white sand.</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">3 / 5</div>
<img src="/pic3.png" style={{ width: "100%" }} />

            <div className="text">An adventurous hike through a lush green forest.</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">4 / 5</div>
<img src="/pic4.png" style={{ width: "100%" }} />

            <div className="text">A vibrant cityscape showcasing the hustle and bustle of urban life.</div>
          </div>

          <div className="mySlides fade">
            <div className="numbertext">5 / 5</div>
<img src="/pic5.png" style={{ width: "100%" }} />

            <div className="text">A picturesque sunset over a tranquil lake.</div>
          </div>

          {/* Next and previous buttons */}
          <a className="prev" onClick={() => plusSlides(-1)}>&#10094;</a>
          <a className="next" onClick={() => plusSlides(1)}>&#10095;</a>
        </div>
        <br />

        {/* The dots/circles */}
        <div style={{ textAlign: "center" }}>
          <span className="dot" onClick={() => currentSlide(1)}></span>
          <span className="dot" onClick={() => currentSlide(2)}></span>
          <span className="dot" onClick={() => currentSlide(3)}></span>
          <span className="dot" onClick={() => currentSlide(4)}></span>
          <span className="dot" onClick={() => currentSlide(5)}></span>
        </div>

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
