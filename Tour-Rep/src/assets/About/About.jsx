import React from 'react';
import './About.css';
import Gorilla from '../Image/Image4.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <div className="about-section">
      <Container style={{ marginTop: '50px', marginBottom: '50px' }} fluid>
        <Row className="align-items-center">
          <Col xs={12} md={6} className="text-center">
            <img src={Gorilla} alt="Gorilla" className="img-fluid rounded block" id="Gorilla" />
          </Col>
          <Col xs={12} md={6} id="Col-two">
            <h3 className='block'>We are Expert Tourism Agency!</h3>
            <p className='block myline'>
              At TOURWITHCHE, we take pride in being your trusted partner for unforgettable journeys through the heart of East Africa. 
              As a premier tourism company, we're dedicated to preserving and sharing the remarkable beauty of Rwanda and Tanzania. 
              Our destinations are unparalleled, embodying the true essence of unspoiled wilderness.
            </p>
            <a href="http://localhost:5173/about">
              <button className="btn btn-warning animate__backInRight block ">Read More</button>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default About;
