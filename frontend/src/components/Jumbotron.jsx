import React from 'react';

export default function Jumbotron() {
  return (
    <div className="py-16">
      <div className="container m-auto space-y-8 px-6 text-gray-500 md:px-12 lg:px-20">
        <div className="flex flex-col justify-center gap-6 text-center md:flex-row md:text-left lg:items-center lg:gap-16">
          <div className="grid grid-cols-5 grid-rows-4 gap-4 md:w-5/12 lg:w-6/12">
            <div className="col-span-2 row-span-2">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imageni.appspot.com/o/vestidos%2FwhiteShort.jpg?alt=media&token=96262097-1d30-4c6c-b44f-74381340f346"
                className="h-full w-full rounded-xl object-cover object-top"
                alt="shoe"
                loading="lazy"
              />
            </div>
            <div className="col-span-3 row-span-3">
              <img
                src="https://firebasestorage.googleapis.com/v0/b/imageni.appspot.com/o/vestidos%2FwhiteD.jpg?alt=media&token=b460ff69-d62b-4574-8829-546cefc6c96a"
                className="h-full w-full rounded-xl object-cover object-top"
                alt="shoes"
                loading="lazy"
              />
            </div>
          </div>
          {/* start Right */}
          <div className="order-last mb-6 space-y-6 md:mb-0 md:w-6/12 lg:w-6/12">
            <h1 className="text-center text-4xl font-bold text-gray-800 md:text-5xl">
              Shop now to get up to
              <span className="text-primary text-dress-500"> 45% off</span>
            </h1>
            <p className="text-lg text-gray-600">
              Get ready for the summer with good fabric from The Fabric store
            </p>
          </div>
          {/* end */}
        </div>
      </div>
    </div>
  );
}
