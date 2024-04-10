import { useState } from 'react';
import Closed from '../constant/Closed';
import Menu from '../constant/Menu';

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const handleScrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };
  return (
    <div className="px-4 py-6 mx-auto lg:py-8 sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <div className="relative flex items-center justify-between lg:justify-center lg:space-x-16">
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#gallery"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
              onClick={() => handleScrollToSection('gallery')}
            >
              Gallery
            </a>
          </li>
          <li>
            <a
              href="#shop"
              aria-label="Our product"
              title="Our product"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
              onClick={() => handleScrollToSection('shop')}
            >
              Shop
            </a>
          </li>
        </ul>
        <a
          href="#"
          aria-label="Company"
          title="Company"
          className="inline-flex items-center"
        >
          <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
            <img
              src="https://raw.githubusercontent.com/limatainer/images/main/DressFront.png"
              alt="logo"
            />
          </span>
        </a>
        <ul className=" items-center hidden space-x-8 lg:flex">
          <li>
            <a
              href="#about"
              aria-label="About us"
              title="About us"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
              onClick={() => handleScrollToSection('about')}
            >
              About
            </a>
          </li>
          <li>
            <a
              href="#contact"
              aria-label="Sign in"
              title="Sign in"
              className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
              onClick={() => handleScrollToSection('contact')}
            >
              Contact
            </a>
          </li>
        </ul>
        <div className="lg:hidden">
          <button
            aria-label="Open Menu"
            title="Open Menu"
            className="p-2 -mr-1 transition duration-200 rounded focus:outline-none focus:shadow-outline hover:bg-deep-purple-50 focus:bg-deep-purple-50"
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu />
          </button>
          {isMenuOpen && (
            <div className="absolute top-0 left-0 w-full">
              <div className="p-5 bg-white border rounded shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <div>
                    <a
                      href="#"
                      aria-label="Company"
                      title="Company"
                      className="inline-flex items-center"
                    >
                      <img
                        src="https://raw.githubusercontent.com/limatainer/images/main/DressFront.png"
                        alt="Lime"
                        className="w-8 text-orange-200"
                      />
                      <span className="ml-2 text-xl font-bold tracking-wide text-gray-800 uppercase">
                        <img
                          src="https://raw.githubusercontent.com/limatainer/images/main/DressFront.png"
                          alt="logo"
                        />
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label="Close Menu"
                      title="Close Menu"
                      className="p-2 -mt-2 -mr-2 transition duration-200 rounded hover:bg-gray-200 focus:bg-gray-200 focus:outline-none focus:shadow-outline"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      <Closed />
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    <li>
                      <a
                        href="#gallery"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
                        onClick={() => handleScrollToSection('gallery')}
                      >
                        Gallery
                      </a>
                    </li>
                    <li>
                      <a
                        href="#shop"
                        aria-label="Our product"
                        title="Our product"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
                        onClick={() => handleScrollToSection('shop')}
                      >
                        Shop
                      </a>
                    </li>
                    <li>
                      <a
                        href="#about"
                        aria-label="Product pricing"
                        title="Product pricing"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
                        onClick={() => handleScrollToSection('about')}
                      >
                        About
                      </a>
                    </li>
                    <li>
                      <a
                        href="#contact"
                        aria-label="About us"
                        title="About us"
                        className="font-medium tracking-wide text-gray-700 transition-colors duration-200 hover:text-orange-200"
                        onClick={() => handleScrollToSection('contact')}
                      >
                        Contact
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
