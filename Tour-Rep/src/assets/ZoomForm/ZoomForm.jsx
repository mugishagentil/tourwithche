import React, { useState } from 'react';
import './ZoomForm.css';
import Rwanda from '../Image/rwanda.jpg';
import Kenya from '../Image/kenya.jpg';
import Zambia from '../Image/zambia.jpg';

const AdventureGrid = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

  const adventures = [
    {
      title: 'Marmore Waterfalls',
      subtitle: 'Just Beautiful',
      imageUrl: Rwanda
    },
    {
      title: 'Discover Costa Rica',
      subtitle: 'Just Beautiful',
      imageUrl: Kenya
    },
    {
      title: 'Mont Blanc',
      subtitle: 'Just Beautiful',
      imageUrl: Zambia
    },
  ];

  const handleMouseEnter = (index) => {
    setHoveredIndex(index);
  };

  const handleMouseLeave = () => {
    setHoveredIndex(null);
  };
  // News-Form-Control
  const [formData, setFormData] = useState({
    firstName: '',
    surname: '',
    email: '',
    country: ''
  });

  const handleFormChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleFormSubmit = (e) => {
    e.preventDefault(); // Prevent the form from submitting the usual way

    // Log form data to the console
    console.log('Form Data Submitted:', formData);

    // Reset form after submission
    setFormData({
      firstName: '',
      surname: '',
      email: '',
      country: ''
    });
  };

  return (
    <div className="adventure-grid-container">
      <h3 className="adventure-title block">The Best Choice For Your Next Trip!</h3>
      <hr className='last-line'/>
      <p className='Adventure-Paragraph block'>Our mission is to create unforgettable journeys through the breathtaking landscapes and vibrant cultures of Rwanda and The Rest of East African Countries, leaving lasting memories.</p>
      <div className="adventure-grid">
        {adventures.map((adventure, index) => (
          <div
            key={index}
            className="adventure-item"
            style={{ backgroundImage: `url(${adventure.imageUrl})` }}
            onMouseEnter={() => handleMouseEnter(index)}
            onMouseLeave={handleMouseLeave}
          >
            <div className="adventure-overlay">
              <h2>{adventure.title}</h2>
              <p>{adventure.subtitle}</p>
            </div>
            {hoveredIndex === index && (
              <div className="hover-paragraph backInUp">
                <p>
                  To create a responsive component similar to the image you've provided, 
                  we’ll use flexbox or CSS grid to align the images in a row and apply media 
                  queries for responsiveness. Each item will have a background image with 
                  text overlay. I'll provide both HTML and CSS to build this component.
                </p>
              </div>
            )}
          </div>
        ))}
      </div>
      {/* News-Quick-Contact */}
       {/* Newsletter Subscription Form */}
       <div className="newsletter-container block">
        <div className="newsletter-content">
          <h2>Need some inspiration?</h2>
          <p>Be inspired by the latest news from Tourwithch. Subscribe to our newsletter.</p>
          <form className="newsletter-form" onSubmit={handleFormSubmit}>
            <div className="name-fields">
              <input
                type="text"
                name="firstName"
                placeholder="First name"
                className="input-field"
                value={formData.firstName}
                onChange={handleFormChange}
                required
              />
              <input
                type="text"
                name="surname"
                placeholder="Surname"
                className="input-field"
                value={formData.surname}
                onChange={handleFormChange}
                required
              />
            </div>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="input-field"
              value={formData.email}
              onChange={handleFormChange}
              required
            />
            <select
              name="country"
              className="input-field"
              value={formData.country}
              onChange={handleFormChange}
              required
            >
              <option value="">Country of residence</option>
              <option value="Rwanda">Rwanda</option>
              <option value="Kenya">Kenya</option>
              <option value="Uganda">Uganda</option>
              <option value="Tanzania">Tanzania</option>
              {/* Add more options here */}
            </select>
            <button type="submit" className="submit-button2">SUBMIT</button>
          </form>
        </div>
      </div>
    <hr />
    </div>
  );
};

export default AdventureGrid;
