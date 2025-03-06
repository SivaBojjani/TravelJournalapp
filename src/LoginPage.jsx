import React, { useState } from "react";

export default function LoginPage({ switchToSignup }) {
  const [message, setMessage] = useState("");

  const handleLogin = () => {
    const loginUsername = document.getElementById("login-username").value;
    const loginPassword = document.getElementById("login-password").value;
    const storedUser = JSON.parse(localStorage.getItem("user"));

    if (storedUser && loginUsername === storedUser.username && loginPassword === storedUser.password) {
      localStorage.setItem("loggedInUser", JSON.stringify(storedUser));
      window.location.reload(); // Refresh to reflect login
    } else {
      setMessage("Invalid username or password. Please try again.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Login</h2>
      {message && <p className="message error">{message}</p>}

      <input id="login-username" type="text" placeholder="Enter your username" />
      <input id="login-password" type="password" placeholder="Enter your password" />

      <button className="btn login-btn" onClick={handleLogin}>Login</button>

      <p className="switch-link" onClick={switchToSignup}>
        Don't have an account? <span>Sign Up</span>
      </p>
    </div>
  );
}
