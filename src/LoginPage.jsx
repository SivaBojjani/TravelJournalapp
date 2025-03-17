import React, { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import { Link } from "react-router-dom"; // Import Link for navigation
import './LoginSignup.css'; // Importing the CSS for styling

export default function LoginPage({ closeModal, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate(); // Define navigate using useNavigate

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle login logic here
    setIsLoggedIn(true);
    navigate("/dashboard"); // Redirect to dashboard after login
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="clearfix">
        <label htmlFor="username">Username</label>
        <input 
          type="text" 
          id="username" 
          name="username" 
          value={username} 
          onChange={(e) => setUsername(e.target.value)} 
          required 
        />
        <label htmlFor="password">Password</label>
        <input 
          type="password" 
          id="password" 
          name="password" 
          value={password} 
          onChange={(e) => setPassword(e.target.value)} 
          required 
        />
        <button type="submit">Login</button>
        <button type="button" className="cancelbtn" onClick={closeModal}>Cancel</button>
      </form>
      <p>Don't have an account? <Link to="/signup">Sign up here</Link></p> {/* Link to Signup */}
    </div>
  );
}
