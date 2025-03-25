import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaCog, FaInfoCircle, FaMap, FaUser } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="Homepage.jsx" className="nav-link">
        <FaHome /> Home
      </NavLink>
      <NavLink to="/search" className="nav-link">
        <FaSearch /> Search
      </NavLink>
      <NavLink to="/settings" className="nav-link">
        <FaCog /> Settings
      </NavLink>
      <NavLink to="/about" className="nav-link">
        <FaInfoCircle /> About
      </NavLink>
      <NavLink to="/maps" className="nav-link">
        <FaMap /> Maps
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        <FaUser /> Profile
      </NavLink>
    </nav>
  );
}
