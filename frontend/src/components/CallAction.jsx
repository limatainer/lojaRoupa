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
          Nobis a dolores, quia sit ad quasi dolorem in?
        </h1>
        <button
          className="px-8 py-3 text-lg font-semibold rounded
          bg-orange-300 hover:bg-yellow-300
     "
        >
          Contact
        </button>
      </div>
    </section>
  );
}
