import React, { useState } from "react";
import './ContactForm.css'; // Importing the CSS for styling

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <h2>Contact Us</h2>
      <input
        type="text"
        name="name"
        placeholder="Your Name"
        value={formData.name}
        onChange={handleInputChange}
        required
      />
      <input
        type="email"
        name="email"
        placeholder="Your Email"
        value={formData.email}
        onChange={handleInputChange}
        required
      />
      <textarea
        name="message"
        placeholder="Your Message"
        value={formData.message}
        onChange={handleInputChange}
        required
      />
      <button type="submit" className="btn submit-btn">Submit</button>
      <button type="reset" className="btn reset-btn">Reset</button>
    </form>
  );
}
