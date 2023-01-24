import React from 'react'
import {
  Navbar,
  Jumbottron,
  Cards,
  Tamanhos,
  Footer
} from '../components'

export default function Home() {
  return (
    <div className='bg-white text-gray-600 work-sans leading-normal text-base tracking-normal'>
      <Navbar />
      <Cards />
      <Tamanhos />
      <Footer />
    </div>
  )
}
