import React from 'react'
import './Header.css'
function Main() {
  return (
    <div>
       {/* Main-Content-Part */}
       <div id="Content">
          <div id="inner">
            <h5 style={{ fontSize: '40px', fontWeight: '700' }}>Tour Withche</h5>
            <p>Welcome to TourwithChe, your gateway to unforgettable adventures in the heart of East Africa! We are your trusted guides to the breathtaking landscapes and vibrant cultures of Rwanda and Tanzania.</p>
            <div id="buttons">
              <button className="btn btn-warning">Read More</button>
            </div>
          </div>
        </div>
    </div>
  )
}

export default Main
