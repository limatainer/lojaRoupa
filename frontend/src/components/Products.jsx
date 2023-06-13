import React, { useState } from 'react';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

import produtos from '../utils/Produtos';
import HeartIcon from '../constant/Heart';

export default function Products() {
  const [liked, setLiked] = useState('');

  return (
    <>
      <section className="bg-white py-8">
        <div className="container mx-auto flex flex-wrap items-center justify-center pt-4 pb-12">
          <nav id="store" className="w-full z-30 top-0 px-6 py-1">
            <div className="w-full container mx-auto flex flex-wrap items-center justify-between mt-0 px-2 py-3">
              <a
                className="uppercase tracking-wide no-underline hover:no-underline font-bold text-gray-800 text-xl"
                href="#"
              >
                Store
              </a>

              <div className="flex items-center" id="store-nav-content">
                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M7 11H17V13H7zM4 7H20V9H4zM10 15H14V17H10z" />
                  </svg>
                </a>

                <a
                  className="pl-3 inline-block no-underline hover:text-black"
                  href="#"
                >
                  <svg
                    className="fill-current hover:text-black"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                  >
                    <path d="M10,18c1.846,0,3.543-0.635,4.897-1.688l4.396,4.396l1.414-1.414l-4.396-4.396C17.365,13.543,18,11.846,18,10 c0-4.411-3.589-8-8-8s-8,3.589-8,8S5.589,18,10,18z M10,4c3.309,0,6,2.691,6,6s-2.691,6-6,6s-6-2.691-6-6S6.691,4,10,4z" />
                  </svg>
                </a>
              </div>
            </div>
          </nav>
          <div className="grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 p-4">
            {produtos.map((produto) => (
              <div key={produto.id} className="p-6">
                <a href="#" className="flex flex-col">
                  <div className="mb-4">
                    <LazyLoadImage
                      className="hover:grow hover:shadow-lg object-cover w-full aspect-square"
                      src={produto.image}
                      alt={produto.Description}
                    />
                  </div>
                  <div className="flex items-center justify-between">
                    <p>{produto.Description}</p>
                    <div className="flex items-center">
                      <p className="pt-1 text-gray-900">€{produto.Price}</p>
                      <HeartIcon />
                    </div>
                  </div>
                </a>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
