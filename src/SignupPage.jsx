import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import './LoginSignup.css'; // Importing the CSS for styling

export default function SignupPage({ closeModal, setIsLoggedIn }) {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [mobile, setMobile] = useState("");
  const [termsAccepted, setTermsAccepted] = useState(false);

  const navigate = useNavigate(); // Initialize useNavigate hook

  const handleSubmit = async (e) => {
    e.preventDefault();

    const newUser = { username, email, password, mobile };
    if (!termsAccepted) {
      alert("You must accept the terms and conditions to sign up.");
      return;
    }

    try {
      const response = await fetch("https://projectserver-1.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(newUser)
      });

      if (response.ok) {
        localStorage.setItem("loggedInUser", JSON.stringify(newUser)); // Save user details in local storage

        alert("Signup successful! Redirecting to login...");
        setIsLoggedIn(true);
        closeModal();
        navigate("/login"); // Redirect to login page
      } else {
        alert("Signup failed. Please try again.");
      }
    } catch (error) {
      console.error("Error during signup:", error);
      alert("Error connecting to server. Please try again later.");
    }
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

        <label htmlFor="email">Email</label>
        <input 
          type="text" 
          id="email" 
          name="email" 
          value={email} 
          onChange={(e) => setEmail(e.target.value)} 
          required 
        />

        <label htmlFor="mobile">Mobile Number</label>
        <input 
          type="text" 
          id="mobile" 
          name="mobile" 
          value={mobile} 
          onChange={(e) => setMobile(e.target.value)} 
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
        
        <label>
          <input 
            type="checkbox" 
            checked={termsAccepted} 
            onChange={(e) => setTermsAccepted(e.target.checked)} 
            required 
          />
          I agree to the terms of service and privacy policy.
        </label>

        <button type="submit">Sign Up</button>
        <button type="button" className="cancelbtn" onClick={closeModal}>Cancel</button>
      </form>
    </div>
  );
}
