import { SmainLayoutMargin } from '@/styles/tailwind';
import React from 'react';
import { FaTruck } from 'react-icons/fa6';
import { FaRegRegistered } from 'react-icons/fa6';
import { BsFillSearchHeartFill } from 'react-icons/bs';
import { FaCartArrowDown } from 'react-icons/fa';
import { AiOutlineDollar } from 'react-icons/ai';
import { FaArrowRight } from 'react-icons/fa'; // Import arrow icons

const CMainClient = () => {
  return (
    <>
      <section className={`${SmainLayoutMargin} md:block hidden`}>
        <div className="w-full flex flex-row">
          {/* Register */}
          <div className="relative flex-1 pb-[3em] md:pb-0 py-3 bg-[#e6e6e6] gap-y-2 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
              <FaRegRegistered className="text-[2em] text-yellow-500" />
            </div>
            <div className="text-center text-stone-500">Register</div>
            {/* Arrow on the right edge for larger screens */}
            <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black md:block hidden" />
            {/* Arrow on the bottom for mobile view */}
          </div>

          {/* Browse Products */}
          <div className="relative flex-1 py-3 bg-[#e6e6e6] gap-y-2 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
              <BsFillSearchHeartFill className="text-[2em] text-red-500" />
            </div>
            <div className="text-center text-stone-500">
              Browse our products
            </div>
            {/* Arrow on the right edge for larger screens */}
            <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black md:block hidden" />
            {/* Arrow on the bottom for mobile view */}
          </div>

          {/* Add to Cart */}
          <div className="relative flex-1 py-3  bg-[#e6e6e6] gap-y-2 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
              <FaCartArrowDown className="text-[2em] text-pink-500" />
            </div>
            <div className="text-center text-stone-500">Add to cart</div>
            {/* Arrow on the right edge for larger screens */}
            <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black md:block hidden" />
            {/* Arrow on the bottom for mobile view */}
          </div>

          {/* Purchase */}
          <div className="relative flex-1 py-3   bg-[#e6e6e6] gap-y-2 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
              <AiOutlineDollar className="text-[2em] text-green-500" />
            </div>
            <div className="text-center text-stone-500">Purchase</div>
            <FaArrowRight className="absolute right-3 top-1/2 transform -translate-y-1/2 text-black md:block hidden" />
            {/* Arrow on the bottom for mobile view */}
          </div>

          {/* Receive in 3 days */}
          <div className="relative flex-1 py-3 bg-[#e6e6e6] gap-y-2 flex flex-col items-center justify-center">
            <div className="flex items-center space-x-2">
              <FaTruck className="text-[2em] text-orange-500" />
            </div>
            <div className="text-center text-stone-500">
              Receive in just 3 days!
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default CMainClient;
