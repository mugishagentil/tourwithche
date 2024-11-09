import React from 'react';
import './Contact.css';

const NewsletterForm = () => {
  return (
    <div className="newsletter-container">
      <div className="newsletter-content">
        <h2>Need some inspiration?</h2>
        <p>Be inspired by the latest news from Wilderness. Subscribe to our newsletter.</p>
        <form className="newsletter-form">
          <div className="name-fields">
            <input type="text" placeholder="First name" className="input-field" />
            <input type="text" placeholder="Surname" className="input-field" />
          </div>
          <input type="email" placeholder="Email Address" className="input-field" />
          <select className="input-field">
            <option>Country of residence</option>
            <option>Rwanda</option>
            <option>Kenya</option>
            <option>Botswana</option>
            <option>Namibia</option>
            <option>Zambia</option>
            <option>Zimbabwe</option>
            <option>Southafrica</option>
            {/* Add more options here */}
          </select>
          <button type="submit" className="submit-button">SUBMIT</button>
        </form>
      </div>
    </div>
  );
};

export default NewsletterForm;

