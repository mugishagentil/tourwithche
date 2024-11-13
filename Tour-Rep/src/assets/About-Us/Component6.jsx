import React, { useRef, useEffect, useState } from 'react';

function Component6() {
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
        <h6 className="subtitle">OUR PURPOSE</h6>
        <h1 className="title">Increasing the <br /> world’s <br />tourwithch, <br /> together</h1>
       {/* <a href="</a>"> <button className="explore-button1 btn btn-link">
          <span>EXPLORE OUR JOURNEYS</span> <i className="bi bi-arrow-right-circle"></i>
        </button></a> */}
      </div>
    </div>
  </div>
  )
}

export default Component6
