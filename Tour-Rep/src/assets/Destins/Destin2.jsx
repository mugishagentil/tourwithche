import React from 'react'
import './Destin.css'
import Gorilla from '../Image/rwanda.jpg';
function Destin2() {
  return (
    <div>
      <div className="wilderness-section">
      <div className="text-content">
        <h1>Discover Earth's ultimate, untamed places</h1>
        <p>
          As the world’s leading conservation and hospitality company, we are the proud custodians
          of our planet's most significant wild places, each chosen to be part of our Collection
          for a specific purpose and all linked to protecting the land and life that exists there.
        </p>
        <p>
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
    </div>
  )
}

export default Destin2;