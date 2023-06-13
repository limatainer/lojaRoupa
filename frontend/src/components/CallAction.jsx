import React from 'react';
import { MdAllInclusive } from 'react-icons/md';

export default function CallAction() {
  return (
    <section id="about" className="py-6">
      <div className="container mx-auto flex flex-col items-center justify-center p-4 space-y-8 md:p-10 lg:space-y-0 lg:flex-row lg:justify-between">
        <h1 className="text-3xl font-semibold leading-tight text-center lg:text-left">
          Are you ready for the summer and are looking for the best dresses?
        </h1>
        <div className="flex items-center justify-center">
          <MdAllInclusive className="w-12 h-12 lg:w-16 lg:h-16" />
        </div>
      </div>
    </section>
  );
}
