import React from 'react'
import './About.css'

function About() {
  return (
    <div className='about'>
      <div className="section-text">
        <h3>About Our Company</h3>
        <h1>Providing your business with a quality IT service is our passion.</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor 
          incididunt ut labore et dolore magna aliqua enim ad minim veniam, nostrud.
        </p>
        <button>Learn More</button>
      </div>

      <div className="about-img">
        <img src="/img/about2.jpg" alt="about-img" />
      </div>
    </div>
  )
}

export default About