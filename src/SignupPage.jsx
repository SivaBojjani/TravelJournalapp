import React, { useState } from "react";

export default function SignupPage({ switchToLogin, closeModal }) {

  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    country: "",
  });
  const [message, setMessage] = useState("");

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSignup = (e) => {
    e.preventDefault();
    const { username, email, password, country } = formData;

    if (username && email && password && country) {
      localStorage.setItem("user", JSON.stringify({ username, email, password, country }));
      setMessage("Signup successful! Redirecting to login...");
      setTimeout(() => window.location.href = '/dashboard', 1500); // Redirect to dashboard

    } else {
      setMessage("Please fill in all the fields.");
    }
  };

  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      {message && <p className={`message ${message.includes("successful") ? "success" : "error"}`}>{message}</p>}

      <form onSubmit={handleSignup}>
        <input type="text" name="username" placeholder="Username" value={formData.username} onChange={handleInputChange} required />
        <input type="email" name="email" placeholder="Email" value={formData.email} onChange={handleInputChange} required />
        <input type="password" name="password" placeholder="Password" value={formData.password} onChange={handleInputChange} required />
        <select name="country" value={formData.country} onChange={handleInputChange} required>
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
        </select>
        <button className="btn signup-btn" type="submit">Sign Up</button>
      </form>

      <button className="btn close-btn" onClick={closeModal}>Close</button>
      <p className="switch-link" onClick={switchToLogin}>

        Already have an account? <span>Login</span>
      </p>
    </div>
  );
}
