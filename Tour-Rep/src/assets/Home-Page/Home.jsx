import React from 'react'
import Header from "../Header/Header.jsx"
import About from "../About/About.jsx"
import Destination from "../Destination/Destination.jsx"
import Experience from "../Experience/Experience.jsx"
import FullScreenSection from "../assets/Under-Ex/Component.jsx"
// import NewsletterForm from "./assets/Quick/Contact.jsx"
// import WildlifeExperience from "./assets/WildlifeExperience/WildlifeExperience.jsx"
import ZoomForm from "../ZoomForm/ZoomForm.jsx"
import Footer from "../Footer/Footer.jsx"
function Home() {
  return (
    <div>
        <Header/>
      <About/>
      <Destination/>
      <Experience />
      <FullScreenSection/>
      {/* <NewsletterForm/> */}
      {/* <WildlifeExperience/> */}
      <ZoomForm/>
      <Footer/> 
    </div>
  )
}

export default Home
