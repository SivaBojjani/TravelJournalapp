import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    profilePicture: "/default-profile.png",
    mobile: "",
    bio: ""
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  // Load profile from localStorage on component mount
  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    if (storedProfile.username) {
      setProfile(storedProfile);
      setMessage(`Welcome ${storedProfile.username}, explore the app!`);
    }
  }, []);

  // Handle form input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

  // Handle image upload for profile picture
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();
    reader.onloadend = () => {
      setProfile((prevProfile) => ({
        ...prevProfile,
        profilePicture: reader.result,
      }));
    };
    if (file) reader.readAsDataURL(file);
  };

  // Save profile data to localStorage
  const handleSaveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setMessage(`Welcome ${profile.username}, explore the app!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("profile");
    navigate("/dashboard"); // Redirect to dashboard
  };
  
  const handleDeleteProfile = () => {
    if (window.confirm("Are you sure you want to delete your profile? This action cannot be undone.")) {
      localStorage.clear(); // Clears all localStorage data
      setProfile({
        username: "",
        email: "",
        profilePicture: "/default-profile.png",
        mobile: "",
        bio: ""
      });
      setMessage("Your profile has been deleted.");
      navigate("/dashboard"); // Redirect to dashboard
    }
  };
  

  return (
    <div className="profile">
      <h2>My Profile</h2>
      {message && <p className="success-message">{message}</p>}
      <div className="profile-info">
        <img src={profile.profilePicture} alt="Profile" className="profile-picture" />
        <input type="file" accept="image/*" onChange={handleImageUpload} className="file-input" />
        <div className="profile-details">
          <label>
            Username:
            <input
              type="text"
              name="username"
              value={profile.username}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label>
            Email:
            <input
              type="email"
              name="email"
              value={profile.email}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label>
            Mobile:
            <input
              type="text"
              name="mobile"
              value={profile.mobile}
              onChange={handleInputChange}
              className="input-field"
            />
          </label>
          <label>
            Bio:
            <textarea
              type="text"
              name="bio"
              value={profile.bio}
              onChange={handleInputChange}
              className="textarea-field"
              placeholder="Tell us about yourself..."
            />
          </label>
          <button onClick={handleSaveProfile} className="save-btn">Save Profile</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
          <button onClick={handleDeleteProfile} className="delete-btn">Delete Profile</button>
        </div>
      </div>
    </div>
  );
}
