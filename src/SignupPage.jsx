import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import './LoginSignup.css';

export default function SignupPage({ closeModal, setIsLoggedIn }) {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
    mobile: "",
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState("");
  const [successMessage, setSuccessMessage] = useState("");
  const navigate = useNavigate();

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleCancel = () => {
    navigate("/");
    if (closeModal) closeModal();
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);

    try {
      if (!formData.termsAccepted) {
        setError("You must accept the terms and conditions");
        return;
      }

      const response = await fetch("https://projectserver-1.onrender.com/users", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData)
      });

      if (response.ok) {
        localStorage.setItem("loggedInUser", JSON.stringify(formData));
        setSuccessMessage("Account created successfully! Redirecting to login...");
        setTimeout(() => {
          navigate("/login");
          if (closeModal) closeModal();
        }, 2000);
      } else {
        const errorData = await response.json();
        setError(errorData.message || "Signup failed. Please try again.");
      }
    } catch (error) {
      setError("Error connecting to server. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="container">
      <h2>Create Your Account</h2>
      {error && <div className="error-message">{error}</div>}
      {successMessage && <div className="success-message">{successMessage}</div>}
      
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input 
            type="text" 
            id="username"
            name="username"
            value={formData.username}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input 
            type="email" 
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group">
          <label htmlFor="mobile">Mobile Number</label>
          <input 
            type="tel" 
            id="mobile"
            name="mobile"
            value={formData.mobile}
            onChange={handleChange}
            required
          />
        </div>

        <div className="form-group password-field">
          <label htmlFor="password">Password</label>
          <input 
            type={showPassword ? "text" : "password"}
            id="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
          <button 
            type="button" 
            className="toggle-password"
            onClick={() => setShowPassword(!showPassword)}
            tabIndex="-1"
          >
            {showPassword ? "👁️" : "👁️‍🗨️"}
          </button>
        </div>

        <div className="checkbox-group">
          <input 
            type="checkbox" 
            id="terms"
            name="termsAccepted"
            checked={formData.termsAccepted}
            onChange={handleChange}
            required
          />
          <label htmlFor="terms">
            I agree to the <Link to="/terms">Terms of Service</Link> and <Link to="/privacy">Privacy Policy</Link>
          </label>
        </div>

        <div className="button-group">
          <button type="submit" disabled={isLoading}>
            {isLoading ? (
              <>
                <span className="spinner"></span> Creating Account...
              </>
            ) : "Sign Up"}
          </button>
          <button 
            type="button" 
            className="cancelbtn"
            onClick={handleCancel}
            disabled={isLoading}
          >
            Cancel
          </button>
        </div>
      </form>

      <p className="auth-redirect">
        Already have an account? <Link to="/login">Log in</Link>
      </p>
    </div>
  );
}