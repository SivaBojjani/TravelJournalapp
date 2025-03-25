import React from "react";
import "./Footer.css";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa"; // Import icons

export default function Footer({ setShowContactForm, isLoggedIn }) {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-links">
          {isLoggedIn && (
            <>
              <button
                className="btn contact-form-btn"
                onClick={() => setShowContactForm(true)}
              >
                Contact Us
              </button>
              <span>About | Help | </span>
            </>
          )}
          <a
            href="https://www.linkedin.com/in/siva-bojjani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaLinkedin /> LinkedIn
          </a>{" "}
          |{" "}
          <a
            href="https://github.com/SivaBojjani"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FaGithub /> GitHub
          </a>
        </div>

        {/* Newsletter Signup Section */}
        <div className="newsletter">
          <p>Subscribe for travel updates:</p>
          <form>
            <input type="email" placeholder="Enter your email" required />
            <button type="submit">
              <FaEnvelope /> Subscribe
            </button>
          </form>
        </div>

        <p className="copyright">
          © 2025 Travel Journal. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
}
