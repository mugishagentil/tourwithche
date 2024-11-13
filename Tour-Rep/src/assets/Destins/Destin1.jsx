import React from 'react'
import './Destin.css'
import Gorilla from '../Image/Lake.jpg';
import 'animate.css';
function Destin1() {
  return (
    <div>
       <div className="wilderness-container" style={{ backgroundImage: `url(${Gorilla})`}}>
      <div className="wilderness-overlay"></div>
      <div className="wilderness-content">
        <h3 className="wilderness-subtitle animate__animated animate__backInDown">EXPLORE OUR</h3>
        <h1 className="wilderness-title animate__animated animate__backInDown">DESTINATIONS</h1>
        <p className="wilderness-description  animate__animated animate__fadeIn" >
        tourwithche takes you on an unrivalled journey through a collection of the world's most iconic wild destinations.
        </p>
      </div>
    </div>
    </div>
  )
}

export default Destin1;