import React from 'react'
import Cards from '../components/Cards'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
export default function Home() {
  return (
    <div className='bg-white text-gray-600 work-sans leading-normal text-base tracking-normal'>
      <Navbar />

      <Cards />
      <Footer />
    </div>
  )
}
