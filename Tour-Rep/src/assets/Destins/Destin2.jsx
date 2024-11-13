import React from 'react'
import './Destin.css'
import Gorilla from '../Image/Fall.jpg';
import Image from '../Image/Lake.jpg';
function Destin2() {
  return (
    <div>
      <div className="wilderness-section">
      <div className="text-content">
        <h1 className='block'>Discover Earth's ultimate, untamed places</h1>
        <p className='block'>
          As the world’s leading conservation and hospitality company, we are the proud custodians
          of our planet's most significant wild places, each chosen to be part of our Collection
          for a specific purpose and all linked to protecting the land and life that exists there.
        </p>
        <p className='block'>
          Our destinations are vast, remote and untamed, and represent true wilderness. With access to
          over 6 million acres of private land, we offer intimate wildlife encounters and experiences
          that will leave you changed forever.
        </p>
      </div>
      <div className="image-content">
        <img src={Gorilla} alt="Cheetah in the wild" />
        <div className="hashtag">#TOURWITHCH</div>
      </div>
    </div>
    <div id="container">
    <div id="image-section">
        <img src={Image} alt="Wilderness" className='myImage' />
        {/* <p id="hashtag">TOURWITCH RWANDA</p> */}
      </div>
      <div id="text-section">
        <p id="tagline" className='block'>WE ARE TOURWITHCH</p>
        <h1 id="headline" className='block'>Discover Earth's ultimate, untamed places</h1>
        <p id="description" className='block'>
          As the world's leading conservation and hospitality company, we are the
          proud custodians of our planet's most significant wild places, each
          chosen to be part of our Collection for a specific purpose and all
          linked to protecting the land and life that exists there.
        </p>
        <p id="description" className='block'>
          Our destinations are vast, remote and untamed, and represent true
          tourwithch. With access to over 6 million acres of private land, we
          offer intimate wildlife encounters and experiences that are unique to
          these places.
        </p>
        <hr className='line'/>
      </div>
    </div>
    </div>
  )
}

export default Destin2;