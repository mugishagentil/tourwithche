import React, { useEffect, useState } from 'react';
import MainImg from '../Image/Background.jpg';
import Logo from '../Image/logo.png';
import './Header.css';
import 'animate.css';

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  // Function to get the active link based on the current URL path
  const getActiveLink = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '/home') return 'Home';
    if (path === '/about') return 'About';
    if (path === '/destination') return 'Destination';
    if (path === '/Contact') return 'Contact';
    return ''; // No active link if path doesn't match any
  };

  const [activeLink, setActiveLink] = useState(getActiveLink);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <>
      {/* Header-Main-Menu-Part */}
      <div id="Main">
        <div className='background-overlay'>
        <nav className={`navbar navbar-expand-lg bg-bod ${isSticky ? 'sticky' : ''}`}>
          <div className="container-fluid">
            <a className="navbar-brand me-auto" href="http://localhost:5173/"><img src={Logo} alt="" className='Logo'/></a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarText"
              aria-controls="navbarText"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarText">
              <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeLink === 'Home' ? 'active' : ''}`} 
                    aria-current="page" 
                    href="http://localhost:5173/"
                  >
                    Home
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeLink === 'About' ? 'active' : ''}`} 
                    href="http://localhost:5173/about"
                  >
                    About
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeLink === 'Destination' ? 'active' : ''}`} 
                    href="http://localhost:5173/destination"
                  >
                    Destination
                  </a>
                </li>
                <li className="nav-item">
                  <a 
                    className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`} 
                    href="http://localhost:5173/Contact"
                  >
                    Contact
                  </a>
                </li>
              </ul>
              <span className="navbar-text">
                <button className="myBtn">ENQUIRY</button>
              </span>
            </div>
          </div>
        </nav>

        {/* Main-Content-Part */}
        <div id="Content">
          {/* New-Content */}
          <section className="background-section">
            <div className="overlay"></div>
            <div className="content">
              <h1 className='welcome animate__animated animate__backInDown'>WELCOME TO</h1>
              <h1 className="title1 animate__animated animate__backInDown">TOURWITHCH</h1>
              <hr />
              <p className="subtitle">
                Your gateway to unforgettable adventures in the heart of East Africa! We are your trusted guides to the breathtaking landscapes and vibrant cultures of Rwanda and Tanzania.
              </p>
              <p className="coordinates animate__animated animate__backInUp">Explore The World With Us</p>
            </div>
          </section>
        </div>
        </div>
      </div>
    </>
  );
}

export default Header;
