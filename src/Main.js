import React from "react";
import { motion } from "framer-motion";
import "./Main.css";

export default function Main({ isLoggedIn }) {
  return (
    <main className="dashboard">
      <h2 className="section-title">Welcome to Travel Journal</h2>
      <p className="description">Describe your moments! 😊</p>

      {isLoggedIn && (
        <div className="cards">
          <motion.div whileHover={{ scale: 1.05 }} className="card new-entry">
            <h3>New Journal Entry</h3>
            <p>Start documenting your next adventure.</p>
            <button className="btn create-btn">Create Entry</button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card view-entries">
            <h3>View Past Journals</h3>
            <p>Relive your best moments.</p>
            <button className="btn view-btn">View Entries</button>
          </motion.div>

          <motion.div whileHover={{ scale: 1.05 }} className="card explore">
            <h3>Explore Destinations</h3>
            <p>Find inspiration for your next trip.</p>
            <button className="btn explore-btn">Discover</button>
          </motion.div>
        </div>
      )}
    </main>
  );
}
