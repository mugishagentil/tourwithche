import React, { useEffect, useState } from 'react';
import MainImg from '../Image/Background.jpg'; 
import Logo from '../Image/logo.png';
import './Header2.css'; // CSS file

function Header() {
  const [isSticky, setIsSticky] = useState(false);

  // Initialize activeLink based on the current URL path
  const getPathname = () => {
    const path = window.location.pathname;
    if (path === '/' || path === '') return 'Home';
    if (path === '/destination') return 'Destination';
    if (path === '/Contact') return 'Contact';
    return 'About'; // Default to 'About' if no match
  };
  
  const [activeLink, setActiveLink] = useState(getPathname); // Determine the active link on load

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

  const handleSetActiveLink = (link) => {
    setActiveLink(link);
  };

  return (
    <>
      <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : 'bg-body-tertiary'}`}>
        <div className="container-fluid">
          <a className="navbar-brand me-auto" href="http://localhost:5173/"><img src={Logo} alt="" className='Logo-Two' /></a>
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
                  href="/"
                  onClick={() => handleSetActiveLink('Home')}
                >
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === 'About' ? 'active' : ''}`} 
                  href="/about"
                  onClick={() => handleSetActiveLink('About')}
                >
                  About
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === 'Destination' ? 'active' : ''}`} 
                  href="/destination"
                  onClick={() => handleSetActiveLink('Destination')}
                >
                  Destination
                </a>
              </li>
              <li className="nav-item">
                <a 
                  className={`nav-link ${activeLink === 'Contact' ? 'active' : ''}`} 
                  href="/Contact"
                  onClick={() => handleSetActiveLink('Contact')}
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
    </>
  );
}

export default Header;
