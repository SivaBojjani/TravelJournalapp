import React from "react";
import Card from "./Card"; // Importing the Card component
import "./HomePage.css";

export default function HomePage({ setIsLoggedIn, setShowLogin, setShowSignup, setIsProfileVisible }) {
  return (
    <div className="home-container">
      <h1>Welcome to the Travel Journal</h1>
      <p>Document your travels and share your experiences!</p>

      <div className="card-container">
        <Card 
          title="Login" 
          description="Access your travel journal." 
          buttonText="Go to Login" 
          redirectPath="/login" 
        />
        <Card 
          title="Sign Up" 
          description="Create a new account to start documenting your travels." 
          buttonText="Sign Up" 
          redirectPath="/signup" 
        />
        <Card 
          title="Dashboard" 
          description="View your travel entries and manage your profile." 
          buttonText="Go to Dashboard" 
          redirectPath="/dashboard" 
        />
      </div>
    </div>
  );
}
