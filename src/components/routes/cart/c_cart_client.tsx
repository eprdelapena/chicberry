'use client';

import { useState } from 'react';
import { SmainLayoutMargin } from '@/styles/tailwind';

interface Product {
  id: number;
  name: string;
  price: number;
}

interface CartItem {
  product: Product;
  quantity: number;
}

const initialCart: CartItem[] = [
  { product: { id: 1, name: 'Bags', price: 999 }, quantity: 1 },
  { product: { id: 2, name: 'Lacoste slippers', price: 699 }, quantity: 2 },
  { product: { id: 3, name: 'H2 Watcn', price: 199 }, quantity: 1 },
];

// Region to Municipality mapping (simplified, complete data would be much larger)
const regionsWithMunicipalities: { [key: string]: string[] } = {
  'National Capital Region': [
    'Quezon City',
    'Manila',
    'Makati',
    'Taguig',
    'Pasig',
    'Parañaque',
    'Mandaluyong',
    'Pasay',
    'Marikina',
    'Muntinlupa',
    'Caloocan',
    'Valenzuela',
    'Malabon',
    'Navotas',
    'Caloocan',
    'Las Piñas',
    'San Juan',
    'Quezon City',
    'Manila',
  ],
  // Other regions omitted for brevity...
};

const OrderSummary = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [receiverName, setReceiverName] = useState<string>('');
  const [selectedRegion, setSelectedRegion] = useState<string>('');
  const [selectedMunicipality, setSelectedMunicipality] = useState<string>('');
  const [selectedBarangay, setSelectedBarangay] = useState<string>(''); // Text input for Barangay
  const [blockLotNumber, setBlockLotNumber] = useState<string>('');
  const [cellphoneNumber, setCellphoneNumber] = useState<string>(''); // New state for cellphone number

  const handleRemoveFromCart = (productId: number) => {
    const updatedCart = cart.filter((item) => item.product.id !== productId);
    setCart(updatedCart);
  };

  const handleChangeQuantity = (productId: number, quantity: number) => {
    if (quantity <= 0) return;
    setCart(
      cart.map((item) =>
        item.product.id === productId ? { ...item, quantity } : item
      )
    );
  };

  const calculateTotal = () => {
    return cart.reduce(
      (total, item) => total + item.product.price * item.quantity,
      0
    );
  };

  const handleCheckout = () => {
    if (
      !receiverName ||
      !selectedRegion ||
      !selectedMunicipality ||
      !selectedBarangay ||
      !blockLotNumber ||
      !cellphoneNumber
    ) {
      alert('Please fill out all the required fields.');
    } else {
      alert(
        `Checkout successful! Delivery Details: ${receiverName}, ${selectedRegion}, ${selectedMunicipality}, ${selectedBarangay}, ${blockLotNumber}, Cellphone: ${cellphoneNumber}`
      );
      setIsModalOpen(false); // Close modal after checkout
    }
  };

  return (
    <div className={`${SmainLayoutMargin}`}>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Order Summary
        </h1>

        {/* Cart Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-black mb-4">Your Order</h2>

          {cart.length === 0 ? (
            <p className="text-center text-black">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-wrap justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col w-full sm:w-auto">
                    <h3 className="text-lg font-medium text-black">
                      {item.product.name}
                    </h3>
                    <p className="text-black">
                      Unit Price: ₱ {item.product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex md:flex-row flex-col justify-between gap-x-5 md:items-center w-full sm:w-auto md:w-auto">
                    <p className="font-medium text-black text-right md:text-left">
                      ₱ {(item.product.price * item.quantity).toLocaleString()}
                    </p>
                    <div className="flex items-center space-x-2 my-2 sm:my-0 md:flex-row">
                      <button
                        onClick={() =>
                          handleChangeQuantity(
                            item.product.id,
                            item.quantity - 1
                          )
                        }
                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                      >
                        -
                      </button>
                      <input
                        type="number"
                        value={item.quantity}
                        onChange={(e) =>
                          handleChangeQuantity(
                            item.product.id,
                            parseInt(e.target.value)
                          )
                        }
                        className="w-16 text-center text-black border border-gray-300 rounded"
                        min="1"
                        disabled
                      />
                      <button
                        onClick={() =>
                          handleChangeQuantity(
                            item.product.id,
                            item.quantity + 1
                          )
                        }
                        className="bg-gray-300 text-black px-3 py-1 rounded hover:bg-gray-400 transition"
                      >
                        +
                      </button>
                    </div>
                    <button
                      onClick={() => handleRemoveFromCart(item.product.id)}
                      className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600 transition mt-2 sm:mt-0 md:mt-0"
                    >
                      Remove
                    </button>
                  </div>
                </div>
              ))}
            </div>
          )}

          {/* Total Price */}
          <div className="flex justify-between items-center mt-6">
            <p className="text-xl font-semibold text-black">Total:</p>
            <p className="text-xl font-semibold text-black">
              ₱ {calculateTotal().toLocaleString()}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <button
              onClick={() => setIsModalOpen(true)}
              className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition w-full sm:w-auto"
            >
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>

      {/* Modal for Delivery Address */}
      {isModalOpen && (
        <div className="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96">
            <h2 className="text-2xl font-semibold mb-4 text-black">
              Enter Delivery Address
            </h2>

            {/* Receiver Name */}
            <input
              type="text"
              placeholder="Receiver's Name"
              value={receiverName}
              onChange={(e) => setReceiverName(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            />

            {/* Cellphone Number */}
            <input
              type="text"
              placeholder="Cellphone Number"
              value={cellphoneNumber}
              onChange={(e) => setCellphoneNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            />

            {/* Region Dropdown */}
            <select
              value={selectedRegion}
              onChange={(e) => {
                setSelectedRegion(e.target.value);
                setSelectedMunicipality(''); // Reset municipality when region changes
              }}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            >
              <option value="">Select Region</option>
              {Object.keys(regionsWithMunicipalities).map((region, idx) => (
                <option key={idx} value={region}>
                  {region}
                </option>
              ))}
            </select>

            {/* Municipality Dropdown */}
            <select
              value={selectedMunicipality}
              onChange={(e) => setSelectedMunicipality(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
              disabled={!selectedRegion}
            >
              <option value="">Select Municipality/City</option>
              {selectedRegion &&
                regionsWithMunicipalities[selectedRegion]?.map(
                  (municipality: string, idx: number) => (
                    <option key={idx} value={municipality}>
                      {municipality}
                    </option>
                  )
                )}
            </select>

            {/* Barangay Text Input */}
            <input
              type="text"
              placeholder="Barangay"
              value={selectedBarangay}
              onChange={(e) => setSelectedBarangay(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            />

            {/* Block/Lot Number */}
            <input
              type="text"
              placeholder="Full Address"
              value={blockLotNumber}
              onChange={(e) => setBlockLotNumber(e.target.value)}
              className="w-full p-3 border border-gray-300 rounded-lg mb-4 text-black"
            />

            {/* Checkout Button */}
            <div className="flex justify-between gap-4">
              <button
                onClick={handleCheckout}
                className="bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition"
              >
                Checkout
              </button>
              <button
                onClick={() => setIsModalOpen(false)}
                className="bg-gray-400 text-white py-2 px-4 rounded-lg hover:bg-gray-500 transition"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default OrderSummary;
