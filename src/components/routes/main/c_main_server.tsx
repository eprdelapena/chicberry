import React from 'react';
import CMainClient from './c_main_client';
import Carousel from './subcomponents/c_carousel_index';
import { SmainLayoutMargin } from '@/styles/tailwind';
import { carouseMainImages } from '@/constants/constants_main';
import CCardContainerIndex from './subcomponents/c_cardcontainer_index';

const CMainServer = () => {
  return (
    <>
      <CMainClient />
      <section className={`${SmainLayoutMargin}`}>
        <Carousel images={carouseMainImages} />
      </section>
      <CCardContainerIndex />
      <section className="mt-10"></section>
    </>
  );
};

export default CMainServer;
