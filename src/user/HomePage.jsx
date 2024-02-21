// import React from 'react';
// import logo from '../assets/logo.jpg'
// import Button from '@mui/material/Button';
// import Menu from '@mui/material/Menu';
// import MenuItem from '@mui/material/MenuItem';


// const HomePage = () => {
//   const [anchorEl, setAnchorEl] = React.useState(null);
//   const open = Boolean(anchorEl);
//   const handleClick = (event) => {
//     setAnchorEl(event.currentTarget);
//   };
//   const handleClose = () => {
//     setAnchorEl(null);
//   };
//   return (
//     <div>
//       <nav className="bg-white border-gray-200 px-2 sm:px-4 py-2.5 rounded shadow-lg">
//         <div className="container flex flex-wrap justify-between items-center mx-auto">
//           <div className="flex">
//             <img src={logo} alt='sjd' className='rounded-full w-[90px] border border-slate-500' />
//           </div>
//           <button  id="demo-positioned-button"
//               aria-controls={open ? 'demo-positioned-menu' : undefined}
//               aria-haspopup="true"
//               aria-expanded={open ? 'true' : undefined}
//               onClick={handleClick}  className="inline-flex items-center p-2 ml-3 text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="mobile-menu-2" aria-expanded="false">
//             <span className="sr-only">Open main menu</span>
            
//               <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z" clipRule="evenodd" />
//               </svg>
//               <svg className="hidden w-6 h-6" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
//                 <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd" />
//               </svg>
//           </button>
//           <div>


//           </div>
//           <div className="hidden w-full md:block md:w-auto" id="mobile-menu">
//             <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-sm md:font-medium">
//               <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-white bg-blue-700 rounded md:bg-transparent md:text-blue-700 md:p-0 dark:text-white" aria-current="page">Home</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">About</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Services</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 border-b border-gray-100 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Pricing</a>
//               </li>
//               <li>
//                 <a href="#" className="block py-2 pr-4 pl-3 text-gray-700 hover:bg-gray-50 md:hover:bg-transparent md:border-0 md:hover:text-blue-700 md:p-0 dark:text-gray-400 md:dark:hover:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent">Contact</a>
//               </li>
//             </ul>
//           </div>
//         </div>
//       </nav>


//       <Menu
//         id="demo-positioned-menu"
//         aria-labelledby="demo-positioned-button"
//         anchorEl={anchorEl}
//         open={open}
//         onClose={handleClose}
//         anchorOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//         transformOrigin={{
//           vertical: 'top',
//           horizontal: 'left',
//         }}
//       >
//         <MenuItem onClick={handleClose}>Profile</MenuItem>
//         <MenuItem onClick={handleClose}>My account</MenuItem>
//         <MenuItem onClick={handleClose}>Logout</MenuItem>
//       </Menu>
//     </div>



//   )
// };

// export default HomePage;




import React, { useState } from 'react';
import logo from '../assets/logo.jpg'


const HomePage = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };
  return (
  <div>
    <nav className="bg-white  shadow-lg">
      <div className="lg:w-[90%] md:w-[90%] w-full mx-auto flex justify-center">
        <div className="flex items-center justify-between h-fit py-2 container border border-red-900">
          <div className="flex-shrink-0">
            <img src={logo} alt='sjd' className='rounded-full w-[90px] border border-slate-500' />
          </div>
          <div className="hidden md:flex"> 
            <div className="ml-10 flex items-baseline space-x-4">
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Home</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">About</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Services</a>
              <a href="#" className="text-dark-100 text-xl hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">Contact</a>
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
        <div className="md:hidden bg-gray-800 w-[91%] ml-8">
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

export default HomePage;
