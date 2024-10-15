"use client";

import React from 'react';

const Navbar: React.FC = () => {
  return (
    <nav className="bg-transparent absolute top-0 left-0 w-full z-10 pt-5 px-20">
      <div className="md:h-16 h-28 mx-auto md:px-4 container flex items-center justify-between flex-wrap md:flex-nowrap">
      
        <div className="text-indigo-500 md:order-1 mb-4 md:mb-0">
          <img
            src="https://res.cloudinary.com/df3ffobko/image/upload/v1728922132/Frame_h0bfuc.png"
            alt="Logo"
            className="h-10"
          />
        </div>

        <div className="text-gray-50 order-3 w-full md:w-auto md:order-2 tracking-wider font-poppins">
          <ul className="flex flex-col md:flex-row md:justify-between">
            <li className="md:px-4 md:py-2"><a href="#">About Us</a></li>
            <li className="md:px-4 md:py-2"><a href="#">How We Help</a></li>
            <li className="md:px-4 md:py-2"><a href="#">Pricing</a></li>
            <li className="md:px-4 md:py-2"><a href="#">Portfolios</a></li>
            <li className="md:px-4 md:py-2"><a href="#">Testimonials</a></li>
            <li className="md:px-4 md:py-2"><a href="#">Insights</a></li>
          </ul>
        </div>
        
    
        <div className="order-2 md:order-3 mb-4 md:mb-0">
          <button className="bg-white text-black px-8 py-2 rounded-xl text-sm tracking-wider font-poppins font-semibold">
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
