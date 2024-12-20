import React from 'react';
import './Experience.css';

function Experience() {
  return (
    <div className="experience-container">
      <div id="text-content">
        <p className="section-title block">OUR EXPERIENCES</p>
        <h1 className="main-title block">Experience real, raw nature</h1>
        <p className="description block" style={{fontSize: '16px'}}>
          Travelling is about more than the places you visit and the things you’ll see. It’s about people, culture, wildlife, history, and experiencing something you’ve never done before. With Wilderness you’ll walk, boat, barge, float, fly, drive, ride, trek, track, and discover a world of adventures.
        </p>
      </div>
      <div className="explore-link">
        <button className="explore-button ">
          <span className="arrow">→</span> EXPLORE ALL EXPERIENCES
        </button>
      </div>
    </div>
  );
}

export default Experience;
