import React from 'react'
import './Destin.css'
import Gorilla from '../Image/rwanda.jpg';
function Destin1() {
  return (
    <div>
       <div className="wilderness-container" style={{ backgroundImage: `url(${Gorilla})` }}>
      <div className="wilderness-overlay"></div>
      <div className="wilderness-content">
        <h3 className="wilderness-subtitle">WELCOME TO</h3>
        <h1 className="wilderness-title">TOURWITHCHE</h1>
        <hr className="wilderness-divider" />
        <div className="wilderness-coordinates">Explore Our Destination</div>
        <p className="wilderness-description">
        tourwithche takes you on an unrivalled journey through a collection of the world's most iconic wild destinations.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Destin1;