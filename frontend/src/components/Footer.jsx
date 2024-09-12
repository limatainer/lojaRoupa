import React from 'react';
export default function Footer() {
  return (
    <footer id="contact" className=" py-4">
      <div
        className="container mx-auto flex items-center 
      justify-center m-2 p-2"
      >
        <p>
          Mail: thefactory@fact.com
          <br />
          Europe based online store
        </p>
        <img
          src="https://firebasestorage.googleapis.com/v0/b/imageni.appspot.com/o/vestidos%2FDress%20Frontpng.png?alt=media&token=a7edf735-3618-4dc1-be6a-520ded024122"
          alt="logo"
          className="h-8 w-8 mx-12 md:h-12 md:w-12 lg:h-16 lg:w-16"
        />
        <p>
          Mon-Fry
          <br />
          Sat - till 20pm
          <br />
          Sun - till 15pm
        </p>
      </div>
    </footer>
  );
}
