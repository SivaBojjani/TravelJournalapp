import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Profile.css";

export default function Profile() {
  const [profile, setProfile] = useState({
    username: "",
    email: "",
    profilePicture: "/default-profile.png",
  });
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const storedProfile = JSON.parse(localStorage.getItem("profile")) || {};
    if (storedProfile.username) {
      setProfile(storedProfile);
      setMessage(`Welcome ${storedProfile.username}, explore the app!`);
    }
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setProfile((prevProfile) => ({
      ...prevProfile,
      [name]: value,
    }));
  };

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

  const handleSaveProfile = () => {
    localStorage.setItem("profile", JSON.stringify(profile));
    setMessage(`Welcome ${profile.username}, explore the app!`);
  };

  const handleLogout = () => {
    localStorage.removeItem("loggedInUser");
    localStorage.removeItem("profile");
    navigate("/");
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
            <input type="text" name="username" value={profile.username} onChange={handleInputChange} className="input-field" />
          </label>
          <label>
            Email:
            <input type="email" name="email" value={profile.email} disabled className="input-field" />
          </label>
          <button onClick={handleSaveProfile} className="save-btn">Save Profile</button>
          <button onClick={handleLogout} className="logout-btn">Logout</button>
        </div>
      </div>
    </div>
  );
}
