import React from 'react'
import './Contact.css'
import Header from '../OG-Header/Header2.jsx';
import Footer from '../Footer/Footer.jsx'
import Contact1 from './Contact1'
import Contact2 from './Contact2.jsx';
import Contact3 from './Contact3.jsx';
function Contact() {
  return (
    <div>
        <Header/>
        <Contact2/>
      <Contact1/>
      {/* <Contact3/> */}
      <Footer/>
    </div>
  )
}

export default Contact
