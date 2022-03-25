import React from 'react'
import { FaFacebookF, FaTwitter, FaLinkedinIn, FaGithub } from 'react-icons/fa';
import './Footer.css';

function Footer() {
  return (
    <div className='footer'>
      <div className="social-icons">
         <i><FaFacebookF /></i>
         <i><FaTwitter /></i>
         <i><FaLinkedinIn /></i>
         <i><FaGithub /></i>
      </div>
      <div className="footer-text">
        <p>© 2022 f-12 Inc</p>
      </div>
    </div>
  )
}

export default Footer