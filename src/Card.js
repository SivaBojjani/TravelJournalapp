import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"; // Importing CSS for the card

const Card = ({ title, description, buttonText, redirectPath }) => {
  const navigate = useNavigate();

  // Handle button click for navigation
  const handleButtonClick = () => {
    if (redirectPath) {
      navigate(redirectPath);
    } else {
      console.error("Redirect path is not defined for this card.");
    }
  };

  return (
    <div className="card" role="region" aria-labelledby={`${title}-header`}>
      <h3 id={`${title}-header`} className="card-title">{title}</h3>
      <p className="card-description">{description}</p>
      <button
        className="btn card-btn"
        onClick={handleButtonClick}
        aria-label={`Navigate to ${title}`}
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
