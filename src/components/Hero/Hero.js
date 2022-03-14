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
          <button>About Us</button>
          <button>Contact Us</button>
        </div>
      </div>
    </div>
  )
}

export default Hero