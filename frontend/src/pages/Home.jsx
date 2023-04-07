import React from 'react';
import {
  Navbar,
  Jumbottron,
  CallAction,
  Banner,
  Cards,
  Footer,
} from '../components';

export default function Home() {
  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <h1 className="text-center text-5xl font-bold leading-none sm:text-6xl">
        The
        <span className="dark:text-dress-300"> Fabric</span>
      </h1>
      <CallAction />
      <Banner />
      <Jumbottron />
      <p
        className="m-5 animate-text bg-gradient-to-r
       from-dress-300 via-dress-500 to-dress-600 
       bg-clip-text text-transparent text-5xl font-black"
      >
        Our Gallery
      </p>
      <p
        className=" m-5 text-xl font-normal text-center
       text-zinc-800 "
      >
        Top Dresses & Design
      </p>
      <Cards />
      <Footer />
    </div>
  );
}
