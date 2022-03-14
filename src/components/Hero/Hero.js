import React from 'react'
import './Hero.css';

function Hero() {
  return (
    <div className='hero'>

      {/* text section */}
      <div className="hero-text">
        <h1>IT Solutions & Business Services Company</h1>
        <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod 
        tempor incididunt ut labore et dolore magna aliqua, magna aliqua. ipsum is simply dummy text of the printing.
        </p>
        <div className="hero-btn">
          <button id='about-btn'>About Us</button>
          <button id='contact-btn'>Contact Us</button>
        </div>
      </div>

      <div className="hero-image">
        <img src="/img/home.png" alt="hero-img" />
      </div>
    </div>
  )
}

export default Hero