
import './ZoomForm.css';
import Rwanda from '../Image/rwanda.jpg'
import Kenya from '../Image/kenya.jpg'
import Zambia from '../Image/zambia.jpg'

import React, { useState } from 'react';

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

  return (
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
  );
};

export default AdventureGrid;
