import { IProductCard } from '@/components/schema/schema_main';
import React from 'react';

const CClientCardContainer = (props: { data: IProductCard[] }) => {
  return (
    <>
      {props.data.map((x: IProductCard) => {
        return (
          <>
            <div key={x.id} className="border pb-2 border-gray-300 rounded-lg">
              <img
                src={x.image}
                alt={x.title}
                className="w-full h-[20em] md:h-[20em] object-cover mb-4 rounded-md bg-red-500" // Increased height (h-80)
              />
              <div className="flex items-center flex-col justify-center gap-y-1">
                <h3 className="text-xl font-medium text-center">{x.title}</h3>
                <p className="text-lg font-semibold text-yellow-700 text-center">
                  {x.price}
                </p>
                <div className="w-full flex flex-col md:gap-y-0 gap-y-1 md:flex-row items-center justify-center gap-x-2">
                  <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                    Add to Cart
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    View Details
                  </button>
                </div>
              </div>
            </div>
          </>
        );
      })}
    </>
  );
};

export default CClientCardContainer;
