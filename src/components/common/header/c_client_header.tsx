import React from 'react';
import CHeaderPc from './subcomponents/c_header_pc';
import { SmainLayoutMargin } from '@/styles/tailwind';
import CHeaderMobile from './subcomponents/c_header_mobile';
import Link from 'next/link';

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
          <Link href="/" className="text-stone-500 cursor-pointer">
            Home
          </Link>
          <a href="/products/bags" className="text-stone-500 cursor-pointer">
            {' '}
            Bags
          </a>
          <a href="/products/clothes" className="text-stone-500 cursor-pointer">
            {' '}
            Clothes{' '}
          </a>
          <a href="/products/watch" className="text-stone-500 cursor-pointer">
            {' '}
            Watch{' '}
          </a>
          <a href="/products/shoes" className="text-stone-500 cursor-pointer">
            {' '}
            Shoes{' '}
          </a>
          <a href="/products/clothes" className="text-stone-500 cursor-pointer">
            {' '}
            Clothes{' '}
          </a>
        </div>
      </header>
    </>
  );
};

export default CClientHeader;
