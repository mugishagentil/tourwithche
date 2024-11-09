import Header from "./assets/Header/Header.jsx"
import About from "./assets/About/About.jsx"
import Destination from "./assets/Destination/Destination.jsx"
import Experience from "./assets/Experience/Experience.jsx"
import FullScreenSection from "./assets/Under-Ex/Component.jsx"
// import NewsletterForm from "./assets/Quick/Contact.jsx"
// import WildlifeExperience from "./assets/WildlifeExperience/WildlifeExperience.jsx"
import ZoomForm from "./assets/ZoomForm/ZoomForm.jsx"
import Footer from "./assets/Footer/Footer.jsx"
function App() {
  return (
    <>
      <Header/>
      <About/>
      <Destination/>
      <Experience />
      <FullScreenSection/>
      {/* <NewsletterForm/> */}
      {/* <WildlifeExperience/> */}
      <ZoomForm/>
      <Footer/> 
    </>
  )
}
export default App
