import React, { useState } from 'react';
import Contact from '../Image/Contact.jpg';
import './Contact.css'

function Contact1() {
  return ( 
   <>
      <div id="container1" >
      <div id="text-section">
        <p id="tagline" className='block'>WE ARE TOURWITHCH</p>
        <h1 id="headline1" className='block'>Reach Out to Us Right Away</h1>
        <p id="description" className='block' >
        Connect now for swift assistance and discover the benefits of reaching out to us immediately for personalized solutions and support.
        </p>
        <div className="container3 block">
            <div className="item3">
                <div className="icon3">📧</div>
                <div className="text3">
                    <span className="title3">Headquarter Email</span>
                    <span className="details3">info@tourwithche.com</span>
                </div>
            </div>
            <div className="item3">
                <div className="icon3">📞</div>
                <div className="text3">
                    <span className="title3">Office Contact</span>
                    <span className="details3">+250 782 444 676</span>
                </div>
            </div>
        </div>
      </div>
      {/* Contact-Forms */}
    <div className="main-container" >
    <div className="form-right">
        <h2>Sent Us A <span className="highlight">Message</span></h2>
        <form>
            <div className="form-row">
                <div className="form-group">
                    <label>Name <span>*</span></label>
                    <input type="text" placeholder="Name" required />
                </div>
                <div className="form-group">
                    <label>Email <span>*</span></label>
                    <input type="email" placeholder="Email" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Telephone <span>*</span></label>
                    <input type="tel" placeholder="Telephone" required />
                </div>
                <div className="form-group">
                    <label>Address <span>*</span></label>
                    <input type="text" placeholder="Address" required />
                </div>
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Location <span>*</span></label>
                    <input type="text" placeholder="Where You're" required />
                </div>
                {/* <div className="form-group">
                    <label>Start On <span>*</span></label>
                    <input type="date" required />
                </div> */}
            </div>
            <div className="form-row">
                <div className="form-group">
                    <label>Message <span>*</span></label>
                    <input type="text" required />
                </div>
            </div>
            <button type="submit" className="rent-button">Submit</button>
        </form>
    </div>
</div>
      
    </div>
    
   </>
  )
}

export default Contact1