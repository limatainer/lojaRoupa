import React from 'react'
import imageArray from '../utils/Fotos'
//import Produto from '../assets/img/Lakers01.png'

export default function Cards() {
  return (


    <div className="p-8 bg-white rounded-lg m-20">
      <p className="text-3xl font-bold text-center text-amber-900">
        Nossos Produtos
      </p>
      <p className="mb-12 text-xl font-normal text-center text-zinc-800 ">
        Qualidade NBA
      </p>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        {imageArray.map((image, index) => (
          <div key={index} className="bg-gray-200 rounded-lg overflow-hidden transform transition duration-300 hover:scale-90 shadow shadow-gray-400">
            <img className="object-cover h-64 w-full rounded" src={image} alt={`Image ${index + 1}`} />
          </div>
        ))}
      </div>
    </div>


  )
}
