import React from "react";
import { useNavigate } from "react-router-dom";
import "./Card.css"; // Importing CSS for the card

const Card = ({ title, description, buttonText, redirectPath }) => {
  const navigate = useNavigate();

  const handleButtonClick = () => {
    navigate(redirectPath);
  };

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <button className="btn card-btn" onClick={handleButtonClick}>
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
