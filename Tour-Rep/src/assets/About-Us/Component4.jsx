import React from 'react';
import './AboutUs.css'; // Import CSS for styling
import { FaMountain, FaGlobe, FaSun } from 'react-icons/fa'; // Example icons from react-icons
import Component1 from './Component1';

const Component4 = () => {
  const sections = [
    {
      icon: <FaMountain color="#FFA726" size="50px" />, // Replace with actual icons or images
      title: 'Unforgettable Adventures Await',
      description: `Embark on a journey with TourwithChe, and you're choosing an adventure that goes beyond the ordinary. Our tours are carefully crafted to immerse you in the heart of Rwanda and Tanzania, ensuring every moment is etched in your memory. From gorilla trekking to cultural experiences, we promise you the extraordinary.`
    },
    {
      icon: <FaGlobe color="#FFA726" size="50px" />,
      title: 'Responsible, Sustainable Travel',
      description: `When you choose TourwithChe, you're making a conscious choice for responsible and sustainable tourism. We believe in giving back to the communities we visit and protecting the environment. Your travels support local well-being and the preservation of these remarkable destinations.`
    },
    {
      icon: <FaSun color="#FFA726" size="50px" />,
      title: 'Local Expertise, Global Service',
      description: `TourwithChe combines local expertise with global service standards. Our team knows these lands intimately and is committed to ensuring your comfort, safety, and satisfaction. Choose us for a seamless, enriching, and transformative travel experience. Your African adventure begins with TourwithChe.`
    }
  ];

  return (
    <div id="why-choose-us">
      <div id="overlay"></div>
      <div id="content-container">
        <h2 id="section-title block">Why Choose Us</h2>
        <div id="sections-container" className='block'>
          {sections.map((section, index) => (
            <div id="section" key={index}>
              <div id="icon-container">{section.icon}</div>
              <h3 id="section-heading">{section.title}</h3>
              <p id="section-description" style={{fontSize: '16px'}}>{section.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Component4;
