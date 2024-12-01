import React from 'react';
import CMainClient from './c_main_client';
import Carousel from './subcomponents/c_carousel_index';
import { SmainLayoutMargin } from '@/styles/tailwind';
import { carouseMainImages } from '@/constants/constants_main';

const CMainServer = () => {
  return (
    <>
      <CMainClient />
      <section className={`${SmainLayoutMargin}`}>
        <Carousel images={carouseMainImages} />
      </section>
      <section className={`${SmainLayoutMargin} md:mt-10 bg-yellow-500`}>
        asdasdnmals
      </section>
    </>
  );
};

export default CMainServer;
