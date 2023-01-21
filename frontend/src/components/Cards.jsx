import React from 'react'
import imageArray from '../utils/Fotos'

export default function Cards() {
  return (
    <div className=" bg-white rounded-lg m-20">
      <p className="animate-text bg-gradient-to-r from-orange-400 via-red-800 to-yellow-300 bg-clip-text text-transparent text-5xl font-black">
        Nossos Produtos
      </p>
      <p className="mb-8 text-xl font-normal text-center text-zinc-800 ">
        🏀 Camisas NBA
      </p>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {imageArray.map((image, index) => (
          <div key={index} className="  rounded-lg overflow-hidden shadow shadow-gray-400">
            <img className="object-cover h-64 w-full rounded" src={image} alt={`Image ${index + 1}`} />
            <div class="flex item-center justify-between m-3">
              <h1 class="text-gray-700 font-bold text-xl">R$220</h1>
              <button class="px-3 py-2 bg-amber-900 text-white text-xs font-bold uppercase rounded">Eu Quero</button>
            </div>
          </div>

        ))}
      </div>
    </div>


  )
}
