import React, { useEffect, useState } from 'react';
import MainImg from '../Image/Background.jpg'; // Make sure to import your image if needed for display
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
      {/* Header Displayed Information Part */}
      <div className="top-bar">
        <div className="container text-center">
          <div className="row" id="Row">
            <div className="col">
              <p><i className="fa-solid fa-envelope"></i> info@tourwithche.com</p>
            </div>
            <div className="col">
              <p><i className="fa-solid fa-phone"></i> +250 782 444 676</p>
            </div>
            <div className="col social-icons">
              <a href="#" className="social-link"><i className="fa-brands fa-facebook"></i></a>
              <a href="#" className="social-link"><i className="fa-brands fa-instagram"></i></a>
              <a href="#" className="social-link"><i className="fa-brands fa-twitter"></i></a>
              <a href="#" className="social-link"><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      <nav className={`navbar navbar-expand-lg ${isSticky ? 'sticky' : 'bg-body-tertiary'}`}>
        <div className="container-fluid">
          <a className="navbar-brand" href="http://localhost:5173/">LOGO</a>
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
