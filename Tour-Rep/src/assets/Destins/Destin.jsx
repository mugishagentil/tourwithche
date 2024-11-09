import React from 'react'
import './Destin.css'
import Header from '../OG-Header/Header2.jsx';
import Footer from '../Footer/Footer.jsx'
import Destin1 from './Destin1.jsx';
import Destin2 from '../Destins/Destin2.jsx';
import Destination from "../Destination/Destination.jsx";
import Component4 from '../About-Us/Component4.jsx';
function Destin() {
  return (
    <div>
      <Header/>
      <Destin1/>
      <Destin2/>
      < Destination/>
      <Component4/>
      <Footer/>
    </div>
  )
}

export default Destin
