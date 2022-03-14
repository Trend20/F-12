import React from 'react'
import './Services.css';


function Services() {
  return (
    <div className='services'>
      <div className="section-header">
        <h3>What we provide</h3>
        <h1>IT solutions</h1>
      </div>

      <div className="services-container">

        <div className="service">
          <i><img src="/img/project-management.png" alt="project-management" /></i>
          <h3>IT Solution</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

        <div className="service">
          <i><img src="/img/programming-course.png" alt="programming" /></i>
          <h3>Web Development</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

        <div className="service">
          <i><img src="/img/cpu.png" alt="cpu" /></i>
          <h3>Networking Services</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

        <div className="service">
          <i><img src="/img/settings.png" alt="settings" /></i>
          <h3>SEO Optimization</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

        <div className="service">
          <i><img src="/img/app-development.png" alt="app-dev" /></i>
          <h3>App Optimization</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

        <div className="service">
          <i><img src="/img/cloud-data.png" alt="cloud" /></i>
          <h3>Data Recovery</h3>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt dolore magna aliqua
          </p>
          <a href="#">read more</a>
        </div>

      </div>
    </div>
  )
}

export default Services