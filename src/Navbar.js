import React from "react"; // Importing React
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <a className="active" href="/"><i className="fa fa-fw fa-home"></i> Home</a>
      <a href="/search"><i className="fa fa-fw fa-search"></i> Search</a>
      <a href="/contact"><i className="fa fa-fw fa-envelope"></i> Contact</a>
      <a href="/settings"><i className="fa fa-fw fa-cog"></i> Settings</a> {/* New menu item */}
      <a href="/about"><i className="fa fa-fw fa-info"></i> About</a> {/* New menu item */}
      <a href="/profile"><i className="fa fa-fw fa-user"></i> Profile</a> {/* Profile menu item */}


    </div>
  );
}
