import Header from "./assets/Header/Header.jsx"
import About from "./assets/About/About.jsx"
import WildernessComponent from "./assets/Wilderness/Discover .jsx"
import Destination from "./assets/Destination/Destination.jsx"
import Experience from "./assets/Experience/Experience.jsx"
import FullScreenSection from "./assets/Under-Ex/Component.jsx"
// import NewsletterForm from "./assets/Quick/Contact.jsx"
import Slider from "./assets/Slider/Slider.jsx"
import ZoomForm from "./assets/ZoomForm/ZoomForm.jsx"
import Footer from "./assets/Footer/Footer.jsx"
function App() {
  return (
    <>
      <Header/>
      <WildernessComponent/>
      <About/>
      <Destination/>
      <Experience />
      <Slider/>
      <FullScreenSection/>
      {/* <NewsletterForm/> */}
      <ZoomForm/>
      <Footer/> 
    </>
  )
}
export default App
