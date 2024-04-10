import React, { useState } from 'react';
import galeria from '../utils/Galeria';
import { AiOutlineLoading3Quarters } from 'react-icons/ai';

export default function Gallery() {
  const [loadedIndexes, setLoadedIndexes] = useState([]);

  const handleImageLoad = (index) => {
    setLoadedIndexes((prevIndexes) => [...prevIndexes, index]);
  };
  return (
    <section id="gallery" className="py-6 m-8 ">
      <div
        className="container grid grid-cols-2 gap-4 p-4 m-8
       mx-auto md:grid-cols-4"
      >
        {galeria.map((item, index) => (
          <div key={index}>
            {!loadedIndexes.includes(index) && <AiOutlineLoading3Quarters />}
            <img
              className={`${item.classe}`}
              src={item.image}
              alt={item.alt}
              onLoad={() => handleImageLoad(index)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
