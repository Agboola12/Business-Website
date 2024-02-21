import React, { useState } from 'react';
import NavBar from './NavBar';
// import style from './Homepage.module.css'
import style from '../user/HomePage.module.css'
// import land from '../assets/01.jpg'


const HomePage = () => {

  return (
    <div>
      <NavBar />



      {/* <section className='bg-gray-800 text-white h-[85vh]  '>
        <div className="container mx-auto px-4   ">
          <div className="flex w-full justify-between items-center border border-sky-500">
            <div className='w-1/2  '>
              <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Experience the future today.</h3>
              <p className="text-lg md:text-xl mb-8">Explore our range of phones and laptops crafted to inspire and delight.</p>
            </div>
            <div className='w-1/2   p-5'>
              <img src={land} alt='altt' className='h-[500px] rounded-tl-[70px] rounded-br-[70px] w-full aspect-auto object-cover ' />
              </div>
              </div>
              </div>
            </section> */}
<section className="h-[500px]  w-[100%] aspect-auto object-cover" id={style.section} >
  <div className='text-center text-white mt-[10em]'>
  <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold mb-6">Experience the future today.</h3>
              <p className="text-lg md:text-xl mb-8">Explore our range of phones and laptops crafted to inspire and delight.</p>
  </div>
</section>


    </div>
  );
};

export default HomePage;
