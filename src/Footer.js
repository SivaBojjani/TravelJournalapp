import React from "react";
import "./Footer.css";

export default function Footer({ setShowContactForm, isLoggedIn }) { // Accepting the props
  return (
    <footer className="footer">
      <p>
        {isLoggedIn && ( // Only show the menu if the user is logged in
          <>
            <button className="btn contact-form-btn" onClick={() => setShowContactForm(true)}>Contact Us</button> {/* Button to open contact form */}
            About | Help |{" "}
          </>
        )}
        <a href="https://www.linkedin.com/in/siva-bojjani" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com/SivaBojjani" target="_blank" rel="noopener noreferrer">GitHub</a> |
      </p>
    </footer>
  );
}
