import React from 'react'
import {
  Navbar,
  Jumbottron,
  Cards,
  Footer
} from '../components'

export default function Home() {
  return (
    <div className='bg-white text-gray-600 work-sans leading-normal text-base tracking-normal'>
      <Navbar />
      <h1 className="text-center text-5xl font-bold leading-none sm:text-6xl">PEITA
        <span className="dark:text-orange-400"> NBA</span>
      </h1>
      <Jumbottron />
      <p className="m-5 animate-text bg-gradient-to-r from-orange-400 via-red-800 to-yellow-300 bg-clip-text text-transparent text-5xl font-black">
        Nossos Produtos
      </p>
      <p className=" m-5 text-xl font-normal text-center text-zinc-800 ">
        🏀 Camisas NBA
      </p>
      <Cards />
      <Footer />
    </div>
  )
}
