import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Dashboard.css";

export default function Dashboard() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    setIsLoggedIn(!!loggedInUser); // Convert to boolean
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("profile");
    setIsLoggedIn(false);
    navigate("/");
  };

  return (
    <div className="dashboard">
      <h2>Welcome to Dashboard</h2>
      
      {isLoggedIn && (
        <button className="profile-btn" onClick={() => navigate("/profile")}>
          Profile
        </button>
      )}

      <button className="logout-btn" onClick={handleLogout}>Logout</button>
    </div>
  );
}
