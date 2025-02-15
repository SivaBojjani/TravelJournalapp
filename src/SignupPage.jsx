import React from "react";
import { Link } from "react-router-dom";
import "./HomePage.css";

export default function SignupPage() {
  return (
    <div className="auth-container">
      <h2>Sign Up</h2>
      <form>
        <input type="text" placeholder="Username" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <select required>
          <option value="">Select Country</option>
          <option value="US">United States</option>
          <option value="IN">India</option>
          <option value="UK">United Kingdom</option>
          <option value="CA">Canada</option>
        </select>
        <button className="btn">Sign Up</button>
      </form>
      <p>
        <Link to="/login">Already have an account? Login</Link>
      </p>
    </div>
  );
}