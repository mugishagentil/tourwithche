import React, { useState, useEffect } from 'react';
import './Destination.css';
import botswana from '../Image/botswana.jpg';
import zambia from '../Image/zambia.jpg';
import rwanda from '../Image/rwanda.jpg';
import namibia from '../Image/namibia.jpg';
import zimbabwe from '../Image/zimbabwe.jpg';
import kenya from '../Image/kenya.jpg';
import southafrica from '../Image/southafrica.jpg';
import { Link } from "react-router-dom"

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
  const [animationClass, setAnimationClass] = useState('zoom-in');

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimationClass('zoom-out'); // Start zoom-out animation

      setTimeout(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % destinations.length); // Update to next slide
        setAnimationClass('zoom-in'); // Apply zoom-in animation
      }, 700); // Delay to allow zoom-out animation to complete
    }, 5000); // Interval between slides

    return () => clearInterval(interval);
  }, []);

  const handleDestinationClick = (index) => {
    setAnimationClass('zoom-out');
    setTimeout(() => {
      setCurrentIndex(index);
      setAnimationClass('zoom-in');
    }, 700);
  };

  return (
    <div className="destination-wrapper">
      <div className="header-section">
        <h2 className="animate__backInDown block">Our Iconic Destinations</h2>
        <p className="animate__backInDown block"style={{fontSize: '16px'}}>
          We operate in 8 African countries, with 60+ camps promising exclusive, private wild game
          viewing, unrivalled style, comfort, and a range of activities for a full immersion in nature and local culture.
        </p>
        <Link href="#Destination" to='/destination'>   <button className="explore-button1 block">Explore Destinations Map</button> </Link>
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
          <img
            key={currentIndex}
            src={destinations[currentIndex].image}
            alt={destinations[currentIndex].name}
            className="image"
          />
          <div className="image-overlay">
            <h1 className={`image-title ${animationClass}`}>
              {destinations[currentIndex].name}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Destination;
