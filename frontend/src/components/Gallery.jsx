import React, { useState } from 'react';
import galeria from '../utils/Galeria';
import LazyLoad from 'react-lazyload';
import placeholderImage from '/placeholder.png';

export default function Gallery() {
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedIndexes((prevIndexes) => [...prevIndexes, index]);
  };
  return (
    <section id="gallery" className="py-6">
      <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
        {galeria.map((item, index) => (
          <div key={index}>
            {!loadedIndexes.includes(index) && (
              <img src={placeholderImage} alt="Placeholder" />
            )}
            <LazyLoad key={index} alt="" className={`${item.classe}`} once>
              <img
                src={item.image}
                alt={item.alt}
                onLoad={() => handleImageLoad(index)}
              />
            </LazyLoad>
          </div>
        ))}
      </div>
    </section>
  );
}
