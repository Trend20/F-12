import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'
import './Home.css';

function Home() {
  return (
    <div className='home'>
       <Navbar />
       <Hero />
    </div>
  )
}

export default Home