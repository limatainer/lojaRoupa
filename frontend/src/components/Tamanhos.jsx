import React from 'react'
import Tamanho from '../assets/img/Tamanhos.png'
export default function Tamanhos() {
  return (
    // <div className='m-10'>
    //   <a href="#" className="flex flex-col items-center bg-white border border-gray-200 rounded-md shadow md:flex-row md:max-w-xl hover:bg-gray-100">
    //     <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={Tamanho} alt="Tamanhos" />
    //     <div className="flex flex-col justify-between p-4 leading-normal">
    //       <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900">Tamanhos de nossas camisas</h5>
    //       <p className="mb-3 font-normal text-gray-700 ">
    //         Medidas aproximadas, podendo haver variação de 4cm <br />
    //         P, M, G, GG, XGG

    //       </p>
    //     </div>
    //   </a>
    // </div>
    <div className="m-5 w-1/4 mx-auto rounded-lg overflow-hidden shadow-lg
     shadow-gray-500 transform transition duration-150 hover:scale-110">
      <img className="w-full" src={Tamanho} alt="Sunset in the mountains" />
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
