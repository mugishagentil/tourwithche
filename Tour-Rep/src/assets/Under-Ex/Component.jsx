import React, { useRef, useEffect, useState } from 'react';
import './Component.css';
import { Link } from "react-router-dom"

const FullScreenSection = () => {
  const [isVisible, setIsVisible] = useState(false);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(entry.isIntersecting);
      },
      { threshold: 0.5 }
    );

    if (contentRef.current) {
      observer.observe(contentRef.current);
    }

    return () => {
      if (contentRef.current) {
        observer.unobserve(contentRef.current);
      }
    };
  }, []);

  return (
    <div className="full-screen-section">
      <div className="background-image">
        {/* Dark overlay that changes opacity when content is visible */}
        <div className={`overlay ${isVisible ? 'overlay-dark' : ''}`}></div>
        
        <div
          className={`content-container ${isVisible ? 'fade-in' : ''}`}
          ref={contentRef}
        >
          <h6 className="subtitle">OUR CUSTOM-DESIGNED JOURNEYS</h6>
          <h1 className="title">Tailor-made itineraries for every traveller</h1>
          <p className="description">
            We’re excited to take you on a journey to experience sights and sounds found nowhere else on Earth. Unique scenery, wildlife, and cultures are waiting to be revealed, and we at Wilderness can’t wait to share them with you. Our custom-designed journeys are intended to inspire but can be tailor-made to suit your every need. It’s time to let your safari dreams run wild.
          </p>
         <a href="</a>"> <button className="explore-button1 btn btn-link">
         <Link href="#Enquiry" to='/enquiry'> <span>EXPLORE OUR JOURNEYS</span> <i className="bi bi-arrow-right-circle"></i></Link>
          </button></a>
        </div>
      </div>
    </div>
  );
};

export default FullScreenSection;
