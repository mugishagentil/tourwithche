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
import WhatsAppWidget from "./assets/WhatsAppWidget/WhatsAppWidget.jsx"
import CookieConsent from "react-cookie-consent";
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
     <WhatsAppWidget/>
     <CookieConsent 
     debug={true}
     location="bottom"
     style={{backgroundColor: '#fff',color: '#000', textAlign: 'center'}}
     buttonStyle={{backgroundColor: 'rgb(34, 21, 3)', color: '#fff'}}
     >This site uses cookies. See our <a href="/privacypolicy" style={{textDecoration: 'none', color: 'rgb(34, 21, 3)'}}>privecy Policy</a> for more.
     </CookieConsent>
      <Footer/> 
    </>
  )
}
export default App
