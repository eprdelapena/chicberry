import React from 'react';
import CHeaderPc from './subcomponents/c_header_pc';
import { SmainLayoutMargin } from '@/styles/tailwind';
import CHeaderMobile from './subcomponents/c_header_mobile';
import { ERoutes } from '@/enums/enums_main';
import Link from 'next/link';

const menuLinks: { label: string; urlLink: ERoutes }[] = [
  { label: 'shoes', urlLink: ERoutes.ProductShoes },
  { label: 'bags', urlLink: ERoutes.ProductBags },
  { label: 'watch', urlLink: ERoutes.ProductWatch },
  { label: 'clothes', urlLink: ERoutes.ProductClothes },
  { label: 'jewelry', urlLink: ERoutes.ProductJewelry },
];
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
          <Link href={ERoutes.home} className="text-stone-500 cursor-pointer">
            Home
          </Link>
          {menuLinks.map((x: { label: string; urlLink: ERoutes }) => {
            return (
              <>
                <a
                  href={x.urlLink}
                  className="text-stone-500 cursor-pointer"
                  key={x.label}
                >
                  {' '}
                  {x.label}
                </a>
              </>
            );
          })}
        </div>
      </header>
    </>
  );
};

export default CClientHeader;
