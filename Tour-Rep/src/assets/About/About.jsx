import React from 'react';
import './About.css';
import Gorilla from '../Image/Gorilla.jpg';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

function About() {
  return (
    <Container style={{ marginTop: '50px', marginBottom: '100px' }}>
      <Row className="align-items-center">
        <Col xs={12} md={6} className="text-center">
          <img src={Gorilla} alt="Gorilla" className="img-fluid rounded block" id="Gorilla" />
        </Col>
        <Col xs={12} md={6} id="Col-two">
          <h3 className='block animate__backInRight'>We are Expert Tourism Agency!</h3>
          <p className='block animate__backInRight'>At TOURWITHCHE, we take pride in being your trusted partner for unforgettable journeys through the heart of East Africa. As a premier tourism company, we're dedicated to preserving and sharing the remarkable beauty of Rwanda and Tanzania. Our destinations are unparalleled, embodying the true essence of unspoiled wilderness.</p>
          <button className="btn btn-warning animate__backInRight">Read More</button>
        </Col>
      </Row>
    </Container>
  );
}

export default About;
