import React from 'react'
import './Navbar.css';

function Navbar() {
  return (
    <div className='navbar'>
      <div className="logo">
        <h1>F-12</h1>
      </div>
      <nav>
         <ul>
           <li><a href="#">Home</a></li>
           <li><a href="#">About</a></li>
           <li><a href="#">Services</a></li>
           <li><a href="#">Projects</a></li>
         </ul>
      </nav>

      <div className="get-started">
        <button>Get It Support</button>
      </div>
    </div>
  )
}

export default Navbar;