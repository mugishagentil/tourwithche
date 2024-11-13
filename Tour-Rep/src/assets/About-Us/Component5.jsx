import React from 'react'
import Image from '../Image/Culture.jpg'

function Component5() {
  return (
    <div id="container" className='container-div'>
      <div id="text-section">
        <p id="tagline" className='block'>OUR DISTINCT APPROACH</p>
        <h1 id="headline" className='block'>We take pride in our distinct approach to travel</h1>
        <p id="description" className='block'>
        We stand out by blending nature, culture, and adventure into every journey. More than tour guides, we are storytellers who bring to life the vibrant landscapes, fascinating wildlife, and deep heritage of Rwanda and Tanzania
        </p>
        <p id="description" className='block'>
        Through immersive experiences, we reveal the stories behind every vista and encounter, connecting travelers to the beauty and spirit of these lands. Each journey is crafted to enrich understanding and leave lasting memories, showcasing the unique wonders that make these regions unforgettable destinations for exploration and discovery.
        </p>
        <hr className='line'/>
      </div>
      <div id="image-section">
        <img src={Image} alt="Wilderness" className='myImage' id='myImage' />
        <p id="hashtag" className='myHashtag'>TOURWITCH RWANDA</p>
      </div>
    </div>
  )
}

export default Component5
