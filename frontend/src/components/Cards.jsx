import React from 'react';
import darkYell from '/assets/img/blackyellow.jpg';
import darkJeans from '/assets/img/jeans.jpg';
import imageArray from '../utils/Fotos';

export default function Cards() {
  return (
    <section className="py-6 ">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        <img
          src={darkYell}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm 
          min-h-96 md:col-start-3 md:row-start-1  aspect-square"
        />
        {imageArray.map((item, index) => (
          <img
            key={index}
            alt=""
            className="w-full h-full rounded shadow-sm min-h-48  aspect-square"
            src={item.image}
          />
        ))}

        <img
          src={darkJeans}
          alt=""
          className="w-full h-full col-span-2 row-span-2 rounded shadow-sm
           min-h-96 md:col-start-1 md:row-start-3  aspect-square"
        />
      </div>
    </section>
  );
}
