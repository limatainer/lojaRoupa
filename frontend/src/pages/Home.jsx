import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import {
  Navbar,
  Jumbotron,
  CallAction,
  Banner,
  Products,
  Gallery,
  BackToTop,
  Footer,
} from '../components';

export default function Home() {
  //======= Text animation for the store name
  const el = React.useRef(null);
  React.useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ['<i>Welcome</i> to', 'The Fabric Store.'],
      typeSpeed: 50,
    });
    return () => {
      // Destroy Typed instance during cleanup to stop animation
      typed.destroy();
    };
  }, []);

  return (
    <div className="bg-white text-gray-600 work-sans leading-normal text-base tracking-normal">
      <Navbar />
      <h1 className="text-center text-5xl font-bold leading-none sm:text-6xl">
        <span ref={el} />
      </h1>
      <CallAction />
      <Banner />
      <Jumbotron />
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
      <Gallery />
      <p
        className="m-5 animate-text bg-gradient-to-r
       from-dress-300 via-dress-500 to-dress-600 
       bg-clip-text text-transparent text-5xl font-black"
      >
        Shop Now
      </p>
      <Products />
      <BackToTop />
      <Footer />
    </div>
  );
}
