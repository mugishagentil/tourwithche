import React from 'react';
import { FaMountain, FaGlobe, FaSun } from 'react-icons/fa';

const Destin5 = () => {
    const sections = [
        {
          icon: <FaMountain color="#FFA726" size="50px" />, // Replace with actual icons or images
          title: 'RWANDA',
          description: `A Thousand Hills"
          Immerse yourself in the unique culture and history of Rwanda, and witness the incredible mountain gorillas in their natural habitat in Volcanoes National Park.
          East`
        },
        {
          icon: <FaGlobe color="#FFA726" size="50px" />,
          title: 'Hiking',
          description: `When you choose TourwithChe, you're making a conscious choice for responsible and sustainable tourism. We believe in giving back to the communities we visit and protecting the environment. Your travels support local well-being and the preservation of these remarkable destinations.`
        },
        {
          icon: <FaSun color="#FFA726" size="50px" />,
          title: 'East Africa',
          description: `Wild Heart of Africa"
            Discover more than just Rwanda with TOURWITHCHE. Explore the wonders of Eastern Africa, from Uganda's sweeping savannahs to Tanzania's majestic Victoria Falls. Our journeys promise diverse experiences beyond borders.`
        }
      ];
  return (
    <div id="why-choose-us">
    <div id="overlay"></div>
    <div id="content-container">
      <h2 id="section-title block">Our Location</h2>
      <div id="sections-container" className='block'>
        {sections.map((section, index) => (
          <div id="section" key={index}>
            <div id="icon-container">{section.icon}</div>
            <h3 id="section-heading">{section.title}</h3>
            <p id="section-description">{section.description}</p>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Destin5
