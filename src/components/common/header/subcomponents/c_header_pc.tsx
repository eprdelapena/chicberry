'use client';

import React, { useState } from 'react';
import { IoPersonOutline } from 'react-icons/io5';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgHeart } from 'react-icons/cg';
import { IoSearchOutline } from 'react-icons/io5'; // Import search icon

import { logoName } from '@/constants/constants_main';

type IconMenu = 'person' | 'cart' | 'heart' | 'headphones' | 'world' | null;

const CHeaderPc = () => {
  // State to manage hover menu visibility
  const [isMenuOpen, setIsMenuOpen] = useState<IconMenu>(null);

  // Function to toggle menu on hover or click
  const toggleMenu = (icon: IconMenu) => {
    setIsMenuOpen(isMenuOpen === icon ? null : icon); // Toggle the menu
  };

  return (
    <>
      {/* Logo Section */}
      <div className="w-full flex flex-row justify-between items-center">
        {/* Logo */}
        <h1 className="text-black md:text-[3vw] lg:text-[2.2em] font-bold">
          {logoName.toUpperCase()}
        </h1>

        {/* Search Bar with Search Icon */}
        <div className="relative flex items-center">
          <IoSearchOutline className="absolute cursor-pointer left-4 text-gray-400 md:text-[1.5em] lg:text-[1.5em]" />
          <input
            type="text"
            placeholder="Search products, categories, etc."
            className="pl-12 pr-4 py-2 rounded-lg border border-gray-300 text-black focus:outline-none focus:ring-2 focus:ring-blue-500 md:w-[200px] lg:w-[300px] transition-all duration-300 ease-in-out"
          />
        </div>

        {/* Icon Section */}
        <div className="text-black flex flex-row cursor-pointer gap-x-3 font-bold">
          {/* Person Icon */}
          <div
            className="relative"
            onMouseEnter={() => toggleMenu('person')}
            onMouseLeave={() => toggleMenu(null)}
            onClick={() => toggleMenu('person')}
          >
            <IoPersonOutline className="text-black cursor-pointer md:text-[4vw] lg:text-[1.5em]" />
            {isMenuOpen === 'person' && (
              <div className="absolute z-50 top-4 right-0 bg-white shadow-lg rounded-md p-2 mt-2 w-[150px]">
                {/* if login */}
                {/* <ul className="text-black text-sm">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Profile</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Settings</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Logout</li>
                </ul> */}

                {/* if logout */}
                <ul className="text-stone-500 text-sm">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    Sign-in
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    Register
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    My orders
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    My messages
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    My coupons
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    My points
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    Recently viewed
                  </li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer font-light">
                    More services
                  </li>
                </ul>
              </div>
            )}
          </div>

          {/* Cart Icon */}
          <div
            className="relative"
            onMouseEnter={() => toggleMenu('cart')}
            onMouseLeave={() => toggleMenu(null)}
            onClick={() => toggleMenu('cart')}
          >
            <RiShoppingCartLine className="text-black cursor-pointer md:text-[4vw] lg:text-[1.5em]" />
            {isMenuOpen === 'cart' && (
              <>
                {/* if login */}
                {/* <div className="absolute top-4 right-0 bg-white shadow-lg rounded-md p-2 mt-2 w-[150px]">
                  <ul className="text-black text-sm">
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">My Cart</li>
                    <li className="p-2 hover:bg-gray-100 cursor-pointer">Checkout</li>
                  </ul>
                </div> */}
                {/* if logout */}
                <div className="absolute z-50 top-4 right-0  shadow-lg rounded-md p-5 items-center justify-center gap-y-3 flex flex-col mt-2 md:w-[20em] bg-white">
                  <div>
                    <RiShoppingCartLine className="text-black cursor-pointer md:text-[4vw] lg:text-[3em]" />
                  </div>
                  <p className="text-[0.8em] font-light text-stone-500">
                    Shopping cart is Empty
                  </p>
                  <p className="text-[0.8em] font-light text-stone-500">
                    Welcome back! If you had items in your shopping cart, we
                    saved them for you. SIGN IN now to see them, or whenever you
                    are ready to check out.
                  </p>
                </div>
              </>
            )}
          </div>

          {/* Heart Icon */}
          <div
            className="relative"
            onMouseEnter={() => toggleMenu('heart')}
            onMouseLeave={() => toggleMenu(null)}
            onClick={() => toggleMenu('heart')}
          >
            <CgHeart className="text-black cursor-pointer md:text-[4vw] lg:text-[1.5em]" />
          </div>

          {/* Headphones Icon */}
          {/* <div 
            className="relative"
            onMouseEnter={() => toggleMenu('headphones')}
            onMouseLeave={() => toggleMenu(null)}
            onClick={() => toggleMenu('headphones')}
          >
            <FiHeadphones className="text-black cursor-pointer md:text-[4vw] lg:text-[1.5em]" />
            {isMenuOpen === 'headphones' && (
              <div className="absolute top-4 right-0  shadow-lg rounded-md p-5 items-center justify-center gap-y-3 flex flex-col mt-2 md:w-[20em] bg-white">
                <p className='text-[0.8em] font-bold text-stone-500'> Customer Service </p>
                <p className='text-[0.8em] font-light text-stone-500'>What can we do for you? </p>
              </div>
            )}
          </div> */}

          {/* World Icon */}
          {/* <div 
            className="relative"
            onMouseEnter={() => toggleMenu('world')}
            onMouseLeave={() => toggleMenu(null)}
            onClick={() => toggleMenu('world')}
          >
            <TbWorld className="text-black cursor-pointer md:text-[4vw] lg:text-[1.5em]" />
            {isMenuOpen === 'world' && (
              <div className="absolute top-4 right-0 bg-white shadow-lg rounded-md p-2 mt-2 w-[150px]">
                <ul className="text-black text-sm">
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Countries</li>
                  <li className="p-2 hover:bg-gray-100 cursor-pointer">Languages</li>
                </ul>
              </div>
            )}
          </div> */}
        </div>
      </div>
    </>
  );
};

export default CHeaderPc;
