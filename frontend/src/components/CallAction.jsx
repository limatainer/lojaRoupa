import React from 'react';

export default function CallAction() {
  return (
    <section className="py-6  ">
      <div
        className="container mx-auto flex flex-col items-center 
  justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row 
  lg:justify-between"
      >
        <h1
          className="text-3xl font-semibold leading-tight text-center
     lg:text-left"
        >
          Are you ready for the summer and are looking for the best dresses?
        </h1>
        <button
          className="px-8 py-3 text-lg font-semibold rounded
          bg-dress-500 hover:bg-orange-200
     "
        >
          Buy
        </button>
      </div>
    </section>
  );
}
