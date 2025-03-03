import React from "react";
import { Link } from "react-router-dom";
import "./NotFound.css"; // Add styles if needed

export default function NotFound() {
  return (
    <div className="not-found">
      <h2>404 - Page Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
      <Link to="/" className="btn">Go Home</Link>
    </div>
  );
}
