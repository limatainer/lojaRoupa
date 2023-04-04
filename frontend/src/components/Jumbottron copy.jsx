import React from 'react';
import tamanhos from '/assets/img/Tamanhos.png';

export default function Jumbottron() {
  return (
    <div className="container flex flex-col justify-center  shadow shadow-slate-500 rounded-md p-3 mt-3 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
      <div className="flex flex-col justify-center p-6 text-center  lg:max-w-md xl:max-w-lg lg:text-left">
        <h3 className="text-xl font-bold leading-none sm:text-3xl">
          Tamanhos de nossas camisas
        </h3>
        <p className="mt-6 mb-8 text-lg sm:mb-12">
          Medidas aproximadas, podendo haver variação de 4cm -
          <p className="hidden md:inline sm:hidden"> P, M, G, GG, XGG</p>
        </p>
        <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-lg font-semibold rounded dark:bg-orange-400 dark:text-gray-900"
          >
            Recentes
          </a>
          <a
            rel="noopener noreferrer"
            href="#"
            className="px-8 py-3 text-lg font-semibold rounded bg-gradient-to-r from-orange-400 to-blue-500 hover:from-pink-500 hover:to-yellow-500"
          >
            Comprar
          </a>
        </div>
      </div>
      <div
        className="flex items-center justify-center m-5 w-1/4 mx-auto rounded-lg overflow-hidden shadow-lg
     shadow-gray-500 transform transition duration-150 hover:scale-110"
      >
        <img
          className="object-contain w-full"
          src={tamanhos}
          alt="Sunset in the mountains"
        />
      </div>
    </div>
  );
}
