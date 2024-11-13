import './Discover.css'; // Import your CSS for styling
import Image from '../Image/Image1.jpg'
import React, { useEffect, useRef } from 'react';

const WildernessComponent = () => {
  return (
    <div id="container">
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
      <div id="image-section">
        <img src={Image} alt="Wilderness" className='myImage' />
        <p id="hashtag">TOURWITCH RWANDA</p>
      </div>
    </div>
  );
};

export default WildernessComponent;
