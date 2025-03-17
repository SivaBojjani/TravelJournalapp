import React, { useState } from "react";
import { Link } from "react-router-dom"; // Import Link for navigation
import './LoginSignup.css'; // Importing the CSS for styling


export default function SignupPage({ closeModal, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle signup logic here
    setIsLoggedIn(true);
    closeModal();
  };

  return (
    <div className="container">
      <h2>Sign Up</h2>
      <form onSubmit={handleSubmit} className="clearfix">
        <p>
          Already have an account? <Link to="/login">Login here</Link>
        </p>

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
        <button type="submit">Sign Up</button>
        <button type="button" className="cancelbtn" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
}
