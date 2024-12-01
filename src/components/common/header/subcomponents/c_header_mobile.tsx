import React from 'react';
import { logoName } from '@/constants/constants_main';
import { IoMdMenu } from 'react-icons/io';
import { MdOutlineForwardToInbox } from 'react-icons/md';
import { RiShoppingCartLine } from 'react-icons/ri';
import { CgHeart } from 'react-icons/cg';
import { CiSearch } from 'react-icons/ci';

const CHeaderMobile = () => {
  return (
    <>
      <div className="w-full p-5 flex items-center justify-between ">
        <h1 className="text-black font-bold flex flex-row gap-x-2">
          <IoMdMenu className="text-[4vw] sm:text-[1.3em] text-black" />
          <MdOutlineForwardToInbox className="text-[4vw] sm:text-[1.3em] text-black" />
        </h1>
        <h1 className="text-black text-[5vw] sm:text-[1.5em] font-bold">
          {logoName.toUpperCase()}
        </h1>
        <h1 className="text-black font-bold flex flex-row gap-x-2">
          <CiSearch className="text-[4vw] sm:text-[1.3em] text-black" />
          <CgHeart className="text-[4vw] sm:text-[1.3em] text-black" />
          <RiShoppingCartLine className="text-[4vw] sm:text-[1.3em] text-black" />
        </h1>
      </div>
    </>
  );
};

export default CHeaderMobile;
