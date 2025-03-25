import React from "react";
import { NavLink } from "react-router-dom";
import { FaHome, FaSearch, FaMap, FaUser, FaStar, FaBook } from "react-icons/fa";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar">
      <NavLink to="/dashboard" className="nav-link" end> {/* Redirects to dashboard */}
        <FaHome /> Home
      </NavLink>
      <NavLink to="/search" className="nav-link">
        <FaSearch /> Search
      </NavLink>
      <NavLink to="/features" className="nav-link">
        <FaStar /> Features
      </NavLink>
      <NavLink to="/maps" className="nav-link">
        <FaMap /> Maps
      </NavLink>
      <NavLink to="/journal" className="nav-link">
        <FaBook /> Journal
      </NavLink>
      <NavLink to="/profile" className="nav-link">
        <FaUser /> Profile
      </NavLink>
    </nav>
  );
}