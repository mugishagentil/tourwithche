import React, { useState, useEffect } from 'react';
import './Slider.css';
import image1 from '../Image/Image1.jpg';
import image2 from '../Image/Image2.jpg';
import image3 from '../Image/Image3.jpg';
import image4 from '../Image/zimbabwe.jpg';

const slides = [
  {
    image: image3,
    title: "Nyungwe National Park: A Canopy Walk Adventure",
    description: `Nestled in the heart of Rwanda, Nyungwe National Park is a lush, unspoiled sanctuary teeming with awe-inspiring biodiversity. Its crown jewel? The breathtaking Nyungwe Canopy Walk, an unforgettable experience for nature enthusiasts and adventure seekers alike.`,
    location: "Rwanda"
  },
  {
    image: image4,
    title: "Serengeti National Park: Africa's Timeless Wilderness",
    description: `Serengeti's canopy walk offers a unique opportunity to explore the park's pristine rainforest from an entirely new perspective. Suspended high above the forest floor, you'll embark on a thrilling journey along a series of suspension bridges and walkways that lead you through the treetops.`,
    location: "Tanzania"
  },
  {
    image: image2,
    title: "Akagera National Park: Where Wildlife Roams Free",
    description: `Nestled in the eastern reaches of Rwanda, Akagera National Park is a captivating testament to the country's commitment to conservation and ecological diversity.`,
    location: "Rwanda"
  },
  {
    image: image1,
    title: "Rwandan Culture",
    description: `Rwanda, a land known for its stunning landscapes and wildlife, is also a treasure trove of cultural heritage. Central to this vibrant tapestry are the traditional dances, each step and movement a testament to the nation's history, values, and identity.
    Rwanda's traditional dances are deeply ingrained in the country's social fabric, offering a unique glimpse into its rich cultural history. Each dance carries a story, a message, and a profound connection to the Rwandan way of life.`,
    location: "Rwanda"
  }
];

function NatureDrivesSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoScrolling, setIsAutoScrolling] = useState(true);

  const nextSlide = () => {
    setCurrentIndex((currentIndex + 1) % slides.length);
  };

  const previousSlide = () => {
    setCurrentIndex((currentIndex - 1 + slides.length) % slides.length);
  };

  useEffect(() => {
    if (isAutoScrolling) {
      const interval = setInterval(() => {
        nextSlide();
      }, 5000); // Change slide every 5 seconds
      return () => clearInterval(interval);
    }
  }, [currentIndex, isAutoScrolling]);

  const handleNext = () => {
    nextSlide();
    setIsAutoScrolling(false); // Stop auto-scrolling on manual slide change
  };

  const handlePrevious = () => {
    previousSlide();
    setIsAutoScrolling(false); // Stop auto-scrolling on manual slide change
  };

  return (
    <div className="nature-drives-slideshow">
      <div className="image-carousel">
        {slides.map((slide, index) => (
          <div
            key={index}
            className={`carousel-image ${index === currentIndex ? 'active' : ''}`}
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        ))}
      </div>
      <div className="text-content block">
        <h2>{slides[currentIndex].title}</h2>
        <p>{slides[currentIndex].description}</p>
        <button className="explore-button2">Explore {slides[currentIndex].title}</button>
        <p className="location">📍 {slides[currentIndex].location}</p>
      </div>
      
      {/* Navigation Arrows */}
      <div className="navigation-buttons">
        <button onClick={handlePrevious} className="nav-button">❮</button>
        <button onClick={handleNext} className="nav-button">❯</button>
      </div>
    </div>
  );
}

export default NatureDrivesSlideshow;
