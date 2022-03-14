import React from 'react'
import Hero from '../Hero/Hero'
import Navbar from '../Navbar/Navbar'

function Home() {
  return (
    <div className='home'>
       <Navbar />
       <Hero />
    </div>
  )
}

export default Home