import React from 'react'
import './AboutUs.css';
import { FaGlobeAfrica, FaCampground, FaUserTie, FaPlane, FaTree, FaUsers } from 'react-icons/fa';


function component3() {
  return (
    <div>
       <div className="stats-container">
      <div className="stat-item">
        <FaGlobeAfrica className="stat-icon" />
        <h3>8</h3>
        <p>African countries</p>
      </div>
      <div className="stat-item">
        <FaCampground className="stat-icon" />
        <h3>60+</h3>
        <p>Camps and lodges</p>
      </div>
      <div className="stat-item">
        <FaUserTie className="stat-icon" />
        <h3>3000</h3>
        <p>Staff employed</p>
      </div>
      <div className="stat-item">
        <FaPlane className="stat-icon" />
        <h3>29</h3>
        <p>Wilderness Air planes</p>
      </div>
      <div className="stat-item">
        <FaTree className="stat-icon" />
        <h3>6M</h3>
        <p>Acres of land (2.3M hectares)</p>
      </div>
      <div className="stat-item">
        <FaUsers className="stat-icon" />
        <h3>40K+</h3>
        <p>Guests hosted per year</p>
      </div>
    </div>
    </div>
  )
}

export default component3
