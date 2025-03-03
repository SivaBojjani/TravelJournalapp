import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

export default function LoginPage() {
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const handleLogin = () => {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && loginUsername === storedUser.signupUsername && loginPassword === storedUser.signupPassword) {
      localStorage.setItem("loggedInUser", loginUsername);
      navigate("/"); // Redirect to homepage after successful login
    } else {
      setMessage("Invalid username or password.");
    }
  };

  return (
    <div className="login-page">
      <div className="login-container">
        <h2>Login</h2>

        {message && <p className="message">{message}</p>}

        <input id="login-username" type="text" placeholder="Username" />
        <input id="login-password" type="password" placeholder="Password" />
        
        <button className="btn login-btn" onClick={handleLogin}>Login</button>

        <p className="switch-link" onClick={() => navigate("/signup")}>
          Don't have an account? <span>Sign Up</span>
        </p>
      </div>
    </div>
  );
}
