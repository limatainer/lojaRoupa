import React from 'react';
import galeria from '../utils/Galeria';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import 'react-lazy-load-image-component/src/effects/blur.css';

export default function Gallery() {
  return (
    <section className="py-6">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {galeria.map((item, index) => (
          <LazyLoadImage
            key={index}
            alt=""
            className={`${item.classe}`}
            src={item.image}
          />
        ))}
      </div>
    </section>
  );
}
