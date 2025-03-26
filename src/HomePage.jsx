import React from "react";
import Card from "./Card"; // Importing the Card component
import "./HomePage.css";

export default function HomePage() {
  const cardData = [
    {
      title: "Login",
      description: "Access your travel journal.",
      buttonText: "Go to Login",
      redirectPath: "/login",
    },
    {
      title: "Sign Up",
      description: "Create a new account to start documenting your travels.",
      buttonText: "Sign Up",
      redirectPath: "/signup",
    },
    {
      title: "Dashboard",
      description: "View your travel entries and manage your profile.",
      buttonText: "Go to Dashboard",
      redirectPath: "/login",
    },
    {
      title: "Explore Destinations",
      description: "Discover amazing places to visit and plan your next journey.",
      buttonText: "Discover",
      redirectPath: "/explore",
    },
  ];

  return (
    <div className="home-container">
      <h1>Welcome to the Travel Journal</h1>
      <p>Document your travels and share your experiences!</p>

      <div className="card-container">
        {cardData.map((card, index) => (
          <Card
            key={index}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            redirectPath={card.redirectPath}
          />
        ))}
      </div>
    </div>
  );
}
