import React from 'react';
import Logo from '/DressFront.png';
export default function Footer() {
  return (
    <footer id="contact" className=" py-4">
      <div className="container mx-auto flex justify-center">
        <img
          src={Logo}
          alt="logo"
          className="h-8 w-8 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
      </div>
    </footer>
  );
}
