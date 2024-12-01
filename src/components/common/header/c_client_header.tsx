import React from 'react';
import CHeaderPc from './subcomponents/c_header_pc';
import { SmainLayoutMargin } from '@/styles/tailwind';
import CHeaderMobile from './subcomponents/c_header_mobile';

const CClientHeader = () => {
  return (
    <>
      <header className="w-full">
        {/* header computer */}
        <section
          className={`${SmainLayoutMargin} hidden py-3 md:block w-full h-auto`}
        >
          <CHeaderPc />
        </section>
        <section className={`block md:hidden w-full h-auto`}>
          <CHeaderMobile />
        </section>
        <div
          className={`py-3 flex flex-row gap-x-5 w-full items-center justify-center md:justify-start ${SmainLayoutMargin} `}
        >
          <p className="text-stone-500 cursor-pointer"> Bags </p>
          <p className="text-stone-500 cursor-pointer"> Jewelries </p>
          <p className="text-stone-500 cursor-pointer"> Watch </p>
          <p className="text-stone-500 cursor-pointer"> Shoes </p>
          <p className="text-stone-500 cursor-pointer"> Clothes </p>
        </div>
      </header>
    </>
  );
};

export default CClientHeader;
