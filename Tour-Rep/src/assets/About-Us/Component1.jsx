import React from 'react'
import './AboutUs.css';
import Rwanda from '../Image/rwanda.jpg';
import Kenya from '../Image/kenya.jpg';
import Zambia from '../Image/zambia.jpg';

function Component1() {
  return (
   <>
    <div className="manifesto">
      {/* Video/Image Section */}
      <div className="manifesto-media">
        <img src={Rwanda} alt="Manifesto Video" className="media-thumbnail" />
        <div className="play-button">▶️</div>
      </div>

      {/* Text Section */}
      <div className="manifesto-text">
        <h3>About Us</h3>
        <h2>Make Your Dream Come True & Grow With Us</h2>
        <p>
        At TourwithChe, we're your trusted companions in the heart of Africa, offering remarkable journeys through the stunning landscapes of Rwanda and Tanzania. We believe that travel is about creating unforgettable moments, and we're dedicated to unlocking the beauty, diversity, and cultural richness of East Africa for you.
        </p>
      </div>
    </div>
   </>
  )
}

export default Component1
