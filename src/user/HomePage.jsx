import React, { useState } from 'react';
import logo from '../assets/logo.jpg'


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <div>
  </div>    
  );
};

export default HomePage;
