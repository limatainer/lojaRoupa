import React from 'react'
export default function Tamanhos() {
  return (

    <div className="m-5 w-1/4 mx-auto rounded-lg overflow-hidden shadow-lg
     shadow-gray-500 transform transition duration-150 hover:scale-110">
      <img className="w-full" src="" alt="Sunset in the mountains" />
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">Tamanhos de nossas camisas</div>
        <p className="text-gray-700 text-base">
          Medidas aproximadas, podendo haver variação de 4cm <br />P, M, G, GG, XGG
        </p>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#NBA</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#2023</span>
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#Novidades</span>
      </div>
    </div>
  )
}
