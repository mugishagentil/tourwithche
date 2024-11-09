import React, { useEffect, useState } from 'react';
import MainImg from '../Image/Background.jpg';
import './Header.css';

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
      {/* Header-Displayed-Information-Part */}
      <div style={{ backgroundColor: '#252628', color: '#ffff', height: '5vh', paddingTop: '2px' }}>
        <div className="container text-center">
          <div className="row" id="Row">
            <div className="col">
              <p> <i className="fa-solid fa-envelope"></i> info@tourwithche.com </p>
            </div>
            <div className="col">
              <p> <i className="fa-solid fa-phone"></i> +250 782 444 676</p>
            </div>
            <div className="col">
              <a href="" style={{ marginRight: '7px', color: '#ffff' }}><i className="fa-brands fa-facebook"></i></a>
              <a href="" style={{ marginRight: '7px', color: '#ffff' }}><i className="fa-brands fa-instagram"></i></a>
              <a href="" style={{ marginRight: '7px', color: '#ffff' }}><i className="fa-brands fa-twitter"></i></a>
              <a href="" style={{ marginRight: '7px', color: '#ffff' }}><i className="fa-brands fa-linkedin"></i></a>
            </div>
          </div>
        </div>
      </div>

      {/* Header-Main-Menu-Part */}
      <div id="Main">
        <nav className={`navbar navbar-expand-lg bg-body-tertiary ${isSticky ? 'sticky' : ''}`}>
          <div className="container-fluid">
            <a className="navbar-brand me-auto" href="http://localhost:5173/">LOGO</a>
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
                  <a className="nav-link active" aria-current="page" href="https://www.instagram.com/buildcentre_kigali/?hl=en">Home</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="http://localhost:5173/about">About</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Destination</a>
                </li>
                <li className="nav-item">
                  <a className="nav-link" href="#">Contact</a>
                </li>
              </ul>
              <span className="navbar-text">
                <button className="btn btn-warning">ENQUIRY</button>
              </span>
            </div>
          </div>
        </nav>

        {/* Main-Content-Part */}
        <div id="Content">
          <div id="inner">
            <h5 className='animate__backInDown' style={{ fontSize: '40px', fontWeight: '700' }}>Tour Withche</h5>
            <p>Welcome to TourwithChe, your gateway to unforgettable adventures in the heart of East Africa! We are your trusted guides to the breathtaking landscapes and vibrant cultures of Rwanda and Tanzania.</p>
            <div id="buttons">
             <a href="http://localhost:5173/about"> <button className="btn btn-warning animate__backInUp">Read More</button></a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Header;
