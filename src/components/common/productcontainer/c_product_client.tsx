import React from 'react';
import { SmainLayoutMargin } from '@/styles/tailwind';
import CInstructionContainer from '../instructioncontainer/c_instructioncontainer';
import CClientCardContainer from '../cardcontainer/c_client_cardcontainer';
import { IProductCard } from '@/schema/schema_main';

const CProductClient = (props: {
  label: string;
  productArray: IProductCard[];
}) => {
  return (
    <>
      <CInstructionContainer />
      <div
        className={`${SmainLayoutMargin} flex w-full items-center flex-col gap-y-5 justify-center`}
      >
        <h1 className="text-black text-[5vw] mt-5 sm:text-[1.5em] font-bold">
          {props.label.toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CClientCardContainer data={props.productArray} />
        </div>
      </div>
    </>
  );
};

export default CProductClient;
