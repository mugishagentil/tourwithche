import React, { useRef, useEffect, useState } from 'react';


function Destin3() {
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
        <h6 className="subtitle">PLAN YOUR NEXT JOURNE</h6>
        <h1 className="title">Ready to take a <br /> life-changing<br />African safari?</h1>
        <p style={{fontSize: '16px'}}>Start planning the African safari of your dreams with Tourwithch... whether the thundering Akagera Park and the teeming plains of Tanzania are calling your name, or you’d like to spend misty mornings in Nyungwe Hotel. Our African experts are on hand to take you wherever you want to go safely, with 24/7 on-the-ground support and an interconnected team of camps, vehicles, and aircraft.</p>
       <a href="</a>"> <button className="explore-button1 btn btn-link">
          <span>EXPLORE OUR JOURNEYS</span> <i className="bi bi-arrow-right-circle"></i>
        </button></a>
      </div>
    </div>
  </div>
  )
}

export default Destin3;