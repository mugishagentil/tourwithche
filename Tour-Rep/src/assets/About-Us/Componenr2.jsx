import React from 'react'
import './AboutUs.css';
import 'animate.css';
function Componenr2() {
  return (
    <div style={{backgroundColor: '#070707f6'}}>
      <main className="about-us">
      <section className="services block">
        <h2 className='animate__animated animate__backInDown' style={{color: '#fff'}}>Our Services</h2>
        <div className="service-list">
          <div className="service-item">
            <h3>Why Choose Us</h3>
            <p className='animate__animated animate__fadeInUp' style={{fontSize: '16px'}}>
              Unforgettable Adventures Await: Embark on a journey with TourwithChe, and you're choosing an 
              adventure that goes beyond the ordinary. Our tours are carefully crafted to immerse you in the 
              heart of Rwanda and Tanzania, ensuring every moment is etched in your memory. From gorilla 
              trekking to cultural experiences, we promise you the extraordinary.
            </p>
          </div>
          <div className="service-item">
            <h3>Responsible, Sustainable Travel</h3>
            <p className='animate__animated animate__fadeInUp'  style={{fontSize: '16px'}}>
              When you choose TourwithChe, you're making a conscious choice for responsible and sustainable 
              tourism. We believe in giving back to the communities we visit and protecting the environment. 
              Your travels support local well-being and the preservation of these remarkable destinations.
            </p>
          </div>
          <div className="service-item">
            <h3>Local Expertise, Global Service</h3>
            <p className='animate__animated animate__fadeInUp' style={{fontSize: '16px'}}>
              TourwithChe combines local expertise with global service standards. Our team knows these lands 
              intimately and is committed to ensuring your comfort, safety, and satisfaction. Choose us for a 
              seamless, enriching, and transformative travel experience. Your African adventure begins with 
              TourwithChe.
            </p>
          </div>
        </div>
      </section>
    </main>
    </div>
  )
}

export default Componenr2
