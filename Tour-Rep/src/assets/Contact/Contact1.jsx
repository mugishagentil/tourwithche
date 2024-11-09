import React, { useState } from 'react';
import { motion } from 'framer-motion';
import './Contact.css'

function Contact1() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', message: '' });
  const [error, setError] = useState({});

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone || !formData.message) {
      setError({ message: 'All fields are required' });
      return;
    }
    setError({});
    alert('Message sent!');
  };
  return (
    <div className="contact-container">
    <motion.h2
      initial={{ opacity: 0, y: -50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      className="contact-title"
    >
      Write Message <br />
      Get in Touch
      <hr style={{color:'#ffc107', fontSize: '10px'}}/>
    </motion.h2>

    <div className="contact-info">
      <p>Be inspired by the latest news from Tourwithche. Subscribe to our newsletter.</p>
      <p>Call Us: +250 782 444 676</p>
      <p>Mail Us: info@tourwithche.com</p>
    </div>

    <motion.form
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.2 }}
      className="form-container"
      onSubmit={handleSubmit}
    >
      <div className="left-div">
        <div className="input-group">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="text"
            name="name"
            placeholder="Your Name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="email"
            name="email"
            placeholder="Your Email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <div className="input-group">
          <motion.input
            whileFocus={{ scale: 1.05 }}
            type="tel"
            name="phone"
            placeholder="Your Phone Number"
            value={formData.phone}
            onChange={handleChange}
          />
        </div>
      </div>

      <div className="right-div">
        <div className="input-group">
          <motion.textarea
            whileFocus={{ scale: 1.05 }}
            name="message"
            placeholder="Your Message"
            rows="4"
            value={formData.message}
            onChange={handleChange}
          ></motion.textarea>
        </div>
        {error.message && <p className="error-message">{error.message}</p>}
        <motion.button
          whileHover={{ scale: 1.1, backgroundColor: '#ffc107', color: '#fff' }}
          type="submit"
          className="submit-button"
        >
          Send Message
        </motion.button>
      </div>
    </motion.form>

    <div className="map-container">
      <iframe
        title="Tourwithche Location"
        src="https://www.google.com/maps/embed?pb=..."
        width="100%"
        height="300"
        style={{ border: '0' }}
        allowFullScreen=""
        loading="lazy"
      ></iframe>
    </div>
  </div>
  )
}

export default Contact1