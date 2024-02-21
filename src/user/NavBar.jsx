import React, { useState } from 'react';
import logo from '../assets/logo.jpg'


const NavBar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <div>
    <nav className="bg-white  shadow-lg">
      <div className="lg:w-[90%] md:w-[90%] w-full mx-auto flex justify-center">
        <div className="flex items-center justify-between h-fit py-2 container">
          <div className="flex-shrink-0">
            <img src={logo} alt='sjd' className='rounded-full w-[90px] border border-slate-900' />
          </div>
          <div className="hidden md:flex"> 
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium">Home</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium">About</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium">Services</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md  font-medium">Contact</a>
            </div>
          </div>
          <div className="md:hidden"> 
            <button className="mobile-menu-button px-3 py-2" onClick={toggleMenu}>
              <svg className="w-8 h-8 text-black" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m-7 6h7" />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {isMenuOpen && (
        <div className="md:hidden bg-gray-800 ">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Home</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">About</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Services</a>
            <a href="#" className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium">Contact</a>
          </div>
        </div>
      )}
    </nav>
  </div>    
  );
};

export default NavBar;
