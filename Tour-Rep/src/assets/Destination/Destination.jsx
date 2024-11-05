import React, { useState, useEffect } from 'react';
import './Destination.css'; // Create this CSS file for styling
import botswana from '../Image/botswana.jpg';
import zambia from '../Image/zambia.jpg';
import rwanda from '../Image/rwanda.jpg';
import namibia from '../Image/namibia.jpg';
import zimbabwe from '../Image/zimbabwe.jpg';
import kenya from '../Image/kenya.jpg';
import southafrica from '../Image/southafrica.jpg';

const destinations = [
  { name: 'Botswana', image: botswana, description: 'Explore the breathtaking wildlife of Botswana.' },
  { name: 'Zambia', image: zambia, description: 'Discover the majestic Victoria Falls in Zambia.' },
  { name: 'Rwanda', image: rwanda, description: 'Visit the beautiful rolling hills and gorilla habitats of Rwanda.' },
  { name: 'Namibia', image: namibia, description: 'Experience the vast Namib Desert and wildlife of Namibia.' },
  { name: 'Zimbabwe', image: zimbabwe, description: 'Enjoy the rich culture and natural wonders of Zimbabwe.' },
  { name: 'Kenya', image: kenya, description: 'Explore the famous savannahs and wildlife of Kenya.' },
  { name: 'South Africa', image: southafrica, description: 'Experience the diverse landscapes and cities of South Africa.' },
];

function Destination() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length);
    }, 5000); // Increase to 5 seconds
    return () => clearInterval(interval);
  }, []);

  const handleDestinationClick = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="destination-wrapper">
      <div className="header-section">
        <h2>Our Iconic Destinations</h2>
        <p>
          We operate in 8 African countries, with 60+ camps promising exclusive, private wild game
          viewing, unrivalled style, comfort, and a range of activities for a full immersion in nature and local culture.
        </p>
        <button className="explore-button">Explore Destinations Map</button>
      </div>
      <div className="slideshow">
        <div className="nav-bar">
          {destinations.map((destination, index) => (
            <button
              key={index}
              className={`nav-button ${index === currentIndex ? 'active' : ''}`}
              onClick={() => handleDestinationClick(index)}
            >
              {destination.name}
            </button>
          ))}
        </div>
        <div className="image-container">
          <div className="image-wrapper">
            <img
              src={destinations[currentIndex].image}
              alt={destinations[currentIndex].name}
              className="image"
            />
            <div className="image-description">{destinations[currentIndex].description}</div>
          </div>
          <h1 className="image-title">{destinations[currentIndex].name}</h1>
        </div>
      </div>
    </div>
  );
}

export default Destination;
