import React from 'react'
import photoArray from '../images/photo-grid.png'

export default function Hero() {
  return(
    <div className='hero-component'>
      <div className="hero-img">
        <img src={photoArray} />
      </div>
      <div className='hero-text'>
        <h1 className='hero-lead'>Online Experiences</h1>
        <p className='hero-body'>Join unique interactive activities led by one-of-a-kind hosts—all without leaving home.</p>
      </div>
    </div>
  )
}