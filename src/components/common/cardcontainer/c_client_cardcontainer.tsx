'use client';

import { IProductCard } from '@/schema/schema_main';
import React, { useState } from 'react';

const CClientCardContainer = (props: { data: IProductCard[] }) => {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState<IProductCard | null>(
    null
  );

  const openModal = (product: IProductCard) => {
    setSelectedProduct(product);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedProduct(null);
  };

  return (
    <>
      {props.data.map((x: IProductCard) => {
        return (
          <div key={x.id} className="border pb-2 border-gray-300 rounded-lg">
            <img
              src={x.image}
              alt={x.title}
              className="w-full h-[20em] md:h-[20em] object-cover mb-4 rounded-md bg-white"
            />
            <div className="flex items-center flex-col justify-center gap-y-1">
              <h3 className="text-xl font-medium text-center text-black">
                {x.title}
              </h3>
              <p className="text-lg font-semibold text-yellow-700 text-center">
                {x.price}
              </p>
              <div className="w-full flex md:gap-y-0 gap-y-1 flex-row items-center justify-center gap-x-2">
                <button className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600">
                  Add to Cart
                </button>
                <button
                  className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600"
                  onClick={() => openModal(x)}
                >
                  View Details
                </button>
              </div>
            </div>
          </div>
        );
      })}

      {/* Modal */}
      {modalOpen && selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div
            className="bg-white p-6 rounded-lg max-w-xl w-full mx-4 md:mx-0 overflow-y-auto"
            style={{ maxHeight: '80vh' }}
          >
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 text-2xl font-bold"
            >
              &times;
            </button>

            {/* Modal content with image top and description below */}
            <div className="flex flex-col gap-4">
              {/* Image selection and carousel */}

              {/* Display the selected image in larger view */}
              <div className="w-full">
                <img
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  className="w-full h-[20em] object-cover rounded-md mb-4" // Image full width
                />
              </div>

              {/* Description and Quantity Selection */}
              <div className="w-full">
                <div className="flex items-center justify-center gap-4">
                  {selectedProduct.subImage &&
                    selectedProduct.subImage
                      .slice(0, 3)
                      .map((image: string, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`product-image-${index}`}
                          className={`w-24 h-24 object-cover rounded-md cursor-pointer ${selectedProduct.image === image ? 'border-2 border-blue-500' : ''}`}
                          onClick={() =>
                            setSelectedProduct((prev) =>
                              prev ? { ...prev, image } : prev
                            )
                          } // Update the main image
                        />
                      ))}
                </div>
                <h3 className="text-xl font-medium text-center text-black mb-2">
                  {selectedProduct.title}
                </h3>
                <p className="text-lg font-semibold text-yellow-700 text-center mb-4">
                  {selectedProduct.price}
                </p>
                <p className="text-gray-600 text-center mb-4">
                  {selectedProduct.description}
                </p>
                <p className="text-gray-600 text-center mb-4">
                  Items left: {selectedProduct.quantity}
                </p>
                {/* Quantity Selector */}

                <div className="mt-4 flex justify-center gap-x-2">
                  <button
                    className="bg-yellow-500 text-white py-2 px-4 rounded-lg hover:bg-yellow-600"
                    onClick={closeModal}
                  >
                    Close
                  </button>
                  <button className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default CClientCardContainer;







