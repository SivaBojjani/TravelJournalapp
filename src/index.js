import React from "react";
import ReactDOM from "react-dom/client";
import HomePage from "./HomePage"; // Import the HomePage component
import "./index.css"; // Import global styles

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <HomePage />
  </React.StrictMode>
);
