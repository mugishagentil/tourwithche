import React from 'react'
import Gorilla from '../Image/Lake.jpg';
import 'animate.css';

function Contact2() {
  return (
    <div className="wilderness-container" style={{ backgroundImage: `url(${Gorilla})`}}>
    <div className="wilderness-overlay"></div>
    <div className="wilderness-content">
      <h3 className="wilderness-subtitle animate__animated animate__backInDown">QUICK RESPOND</h3>
      <h1 className="wilderness-title animate__animated animate__backInDown">CONTACT US</h1>
      <p className="wilderness-description  animate__animated animate__fadeIn" >
      Tourwithche: Discover Rwanda with us! Your trusted guide for unforgettable experiences. Contact us to plan your adventure!
      </p>
    </div>
  </div>
  )
}

export default Contact2