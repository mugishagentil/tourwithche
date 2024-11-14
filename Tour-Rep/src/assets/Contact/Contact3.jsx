import React from 'react'
import Contact from '../Image/Contact.jpg';

function Contact3() {
  return (
    <div className="main-container">
    <div className="form-left">
        <img src={Contact} alt="Car Reservation" className="form-image" />
    </div>
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
  )
}

export default Contact3
