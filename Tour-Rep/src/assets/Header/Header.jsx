import React from 'react'
import MainImg from '../Image/Background.jpg'
import './Header.css'

function Header() {
  return (
    <>
    {/* Heaher-Displayed-Information-Part */}
     {/* Heaher-Displayed-Information-Part */}
    <div class='' style={{backgroundColor: '#252628', color: '#ffff', height: '5vh', paddingTop: '2px' }}>
      <div class="container text-center">
    <div class="row" id='Row'>
    <div class="col">
      <p > <i class="fa-solid fa-envelope"></i>  info@tourwithche.com </p>
    </div>
    <div class="col">
      <p> <i class="fa-solid fa-phone"></i>  +250 782 444 676</p>
    </div>
    
    <div class="col">
    <a href="" style={{marginRight: '7px', color: '#ffff'}}><i class="fa-brands fa-facebook"></i></a>
    <a href="" style={{marginRight: '7px', color: '#ffff'}}><i class="fa-brands fa-instagram"></i></a>
    <a href="" style={{marginRight: '7px', color: '#ffff'}}><i class="fa-brands fa-twitter"></i></a>
    <a href="" style={{marginRight: '7px', color: '#ffff'}}><i class="fa-brands fa-linkedin"></i></a>
    </div>
    </div>
    </div>
    </div>
    {/* Header-Main-Menu-Part */}
    <div id="Main">
    {/* <img src={MainImg} alt="" id='Bg-Img'/> */}
    <nav class="navbar navbar-expand-lg bg-body-tertiary" id='navbar'>
  <div class="container-fluid">
    <a class="navbar-brand" href="#">LOGO</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText" aria-controls="navbarText" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarText">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">About</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Destination</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Contact</a>
        </li>
      </ul>
      <span class="navbar-text">
        <button class="btn btn-warning ">ENQUIRY</button>
      </span>
    </div>
  </div>
</nav>
 {/* Main-Content-Part */}
 <div id="Content">
       <div id="inner">
      <h5 style={{fontSize: '40px', fontWeight: '700'}}>Tour Withche</h5>
      <p>Welcome to TourwithChe, your gateway to unforgettable adventures in the heart of East Africa! We are your trusted guides to the breathtaking landscapes and vibrant cultures of Rwanda and Tanzania.</p>
    <div id="buttons">
      <button class="btn btn-warning">Read More</button>
    </div>
    </div>
    </div>
    </div>
   
    </>
  )
}

export default Header

