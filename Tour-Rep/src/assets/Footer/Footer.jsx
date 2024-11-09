import React from 'react';
import './Footer.css';

const Footer = () => {
  return (
    <footer className="footer-container">
      <div className="footer-content">
        {/* About Section */}
        <div className="footer-section about">
          <h2>Adventor.</h2>
          <p>
            Going on an adventure is not about just fun, it's all about yourself and entertaining yourself.
            Get the best out adventure activities in you and start living the moment.
          </p>
          <div className="social-icons">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
          </div>
        </div>

        {/* Links Section */}
        <div className="footer-section contact">
          <h3>Quick Links</h3>
          <p><i className="fas fa-map-marker-alt"></i> Home</p>
          <p><i className="fas fa-envelope"></i> About</p>
          <p><i className="fas fa-phone"></i>Contact</p>
        </div>

        {/* Support Links Section */}
        <div className="footer-section contact">
          <h3>Help & Support</h3>
          <p><i className="fas fa-map-marker-alt"></i> Faq</p>
          <p><i className="fas fa-envelope"></i> Support</p>
          <p><i className="fas fa-phone"></i>Terms & Service</p>
        </div>

        {/* Contact Section */}
        <div className="footer-section contact">
          <h3>Reach Us</h3>
          <p><i className="fas fa-map-marker-alt"></i> Kigali-Rwanda, Kicukiro, Kk432</p>
          <p><i className="fas fa-envelope"></i> info@tourwithche.com</p>
          <p><i className="fas fa-phone"></i> +250 782 444 676</p>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>@2023 TourWithChe. All rights reserved. Designed by <a href="" style={{color: 'white', textDecoration: 'none'}}>Sanson Group</a></p>
        <div className="footer-bottom-links">
          <a href="#">Help</a>
          <a href="#">Privacy Policy</a>
          <a href="#">Terms & Conditions</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
