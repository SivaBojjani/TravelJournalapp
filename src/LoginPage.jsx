import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginSignup.css";

export default function LoginPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Login Submitted", formData);
  };

  return (
    <div className="login-container">
      <h2>Login</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <button type="submit" className="btn">Login</button>
      </form>
      <p className="redirect" onClick={() => navigate("/signup")}>Don't have an account? Sign up</p>
      <p className="forgot-password">Forgot Password?</p>
    </div>
  );
}

export function SignupPage() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ username: "", password: "", email: "", country: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Signup Submitted", formData);
    navigate("/login");
  };

  return (
    <div className="signup-container">
      <h2>Signup</h2>
      <form onSubmit={handleSubmit} className="form">
        <input type="text" name="username" placeholder="Username" onChange={handleChange} required />
        <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
        <input type="password" name="password" placeholder="Password" onChange={handleChange} required />
        <input type="text" name="country" placeholder="Country" onChange={handleChange} required />
        <button type="submit" className="btn">Sign Up</button>
      </form>
      <p className="redirect" onClick={() => navigate("/login")}>Already have an account? Login</p>
    </div>
  );
}