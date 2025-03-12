import React from "react";
import "./Footer.css";

import ContactForm from './ContactForm'; // Importing the ContactForm component

export default function Footer() {
  return (
    <footer className="footer">
      <p>
        About | Help |{" "}
        <a href="https://www.linkedin.com/in/siva-bojjani" target="_blank" rel="noopener noreferrer">LinkedIn</a> |{" "}
        <a href="https://github.com/SivaBojjani" target="_blank" rel="noopener noreferrer">GitHub</a> |
      </p>
      <ContactForm /> {/* Adding the ContactForm component */}
    </footer>
  );
}
