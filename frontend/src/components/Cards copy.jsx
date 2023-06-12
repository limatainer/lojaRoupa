import React from 'react';
import imageArray from '../utils/Fotos';

export default function Gallery() {
  return (
    <div className=" bg-white rounded-sm">
      <div className="container mx-auto space-y-2 lg:space-y-0 lg:gap-2 lg:grid lg:grid-cols-3">
        {imageArray.map((imageArray, index) => (
          <img
            key={imageArray.image}
            className=" w-full rounded hover:shadow-2xl h-full"
            src={imageArray.image}
            alt={`Image ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
