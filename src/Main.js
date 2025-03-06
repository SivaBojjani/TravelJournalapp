import React from "react";
import Dashboard from "./Dashboard";
import "./Main.css";

export default function Main({ isLoggedIn }) {
  return (
    <main className="main-content">
      <h2 className="section-title">Welcome to Travel Journal</h2>
      <p className="description">Describe your moments! 😊</p>
      {isLoggedIn && <Dashboard />}
    </main>
  );
}
