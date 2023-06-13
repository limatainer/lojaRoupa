import React from 'react';
import { BiShoppingBag } from 'react-icons/bi';

import style from './Banner.module.css';

export default function Banner() {
  return (
    <div className={`p-6 py-12 ${style.containerBanner}`}>
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <h2 className="text-center text-6xl tracking-tighter font-bold">
            Up to <br className="sm:hidden" />
            50% Off
          </h2>
          <div className="space-x-2 text-center py-2 lg:py-0">
            <span>
              We have free shipping!
              <br />
              *Apply code:
            </span>
            <span className="font-bold text-lg">DRESS</span>
          </div>
          <button
            className="flex items-center justify-center
           font-semibold rounded p-2 bg-dress-500 hover:bg-orange-200"
          >
            <BiShoppingBag className="mr-2" />
            <span>Shop Now</span>
          </button>
        </div>
      </div>
    </div>
  );
}
