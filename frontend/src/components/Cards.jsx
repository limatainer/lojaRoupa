import React from 'react'
import imageArray from '../utils/Fotos'

export default function Cards() {
  return (
    <div className=" bg-white rounded-sm">
      <p className="mb-2 animate-text bg-gradient-to-r from-orange-400 via-red-800 to-yellow-300 bg-clip-text text-transparent text-5xl font-black">
        Nossos Produtos
      </p>
      <p className=" mb-3 text-xl font-normal text-center text-zinc-800 ">
        🏀 Camisas NBA
      </p>

      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        {imageArray.map((imageArray, index) => (
          <img key={imageArray.image} className="w-full rounded hover:shadow-2xl h-full" src={imageArray.image} alt={`Image ${index + 1}`} />
        ))}
      </div>
    </div>


  )
}
