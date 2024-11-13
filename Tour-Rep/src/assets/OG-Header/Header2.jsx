import React, { useEffect, useState } from 'react';
import MainImg from '../Image/Background.jpg'; 
import Logo from '../Image/logo.png'
import './Header2.css'; // CSS file

function Header() {
  const [isSticky, setIsSticky] = useState(false);

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
      <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : 'bg-body-tertiary'}`}>
        <div className="container-fluid">
        <a className="navbar-brand me-auto" href="http://localhost:5173/"><img src={Logo} alt="" className='Logo-Two'/></a>
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
                <a className="nav-link active" aria-current="page" href="#">Home</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">About</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:5173/destination">Destination</a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="http://localhost:5173/Contact">Contact</a>
              </li>
            </ul>
            <span className="navbar-text">
              <button className="btn btn-warning">ENQUIRY</button>
            </span>
          </div>
        </div>
      </nav>
    </>
  );
}

export default Header;
