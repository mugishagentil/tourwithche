import React from 'react'
import './Destin.css'
import Header from '../OG-Header/Header2.jsx';
import Footer from '../Footer/Footer.jsx'
import Destin1 from './Destin1.jsx';
import Destin2 from '../Destins/Destin2.jsx';
import Destin3 from './Destin3.jsx';
import Destin4 from './Destin4.jsx';
import Destin5 from './Destin5.jsx';
import WhatsAppWidget from "../WhatsAppWidget/WhatsAppWidget.jsx"
function Destin() {
  return (
    <div>
      <Header/>
      <Destin1/>
      <Destin2/>
      <Destin4/>
      <Destin3/>
      <Destin5/>
      <WhatsAppWidget />
      <Footer/>
    </div>
  )
}

export default Destin
