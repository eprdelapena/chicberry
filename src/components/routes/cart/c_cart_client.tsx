'use client';

// components/OrderSummary.tsx
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

const OrderSummary = () => {
  const [cart, setCart] = useState<CartItem[]>(initialCart);

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

  return (
    <div className={`${SmainLayoutMargin}`}>
      <div className="container mx-auto p-6">
        <h1 className="text-4xl font-bold mb-6 text-center text-black">
          Order Summary
        </h1>

        {/* Cart Summary */}
        <div className="bg-white shadow-lg rounded-lg p-6 space-y-6">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">
            Your Order
          </h2>

          {cart.length === 0 ? (
            <p className="text-center text-gray-500">Your cart is empty</p>
          ) : (
            <div className="space-y-4">
              {cart.map((item) => (
                <div
                  key={item.product.id}
                  className="flex flex-wrap justify-between items-center bg-gray-100 p-4 rounded-lg shadow-sm"
                >
                  <div className="flex flex-col w-full sm:w-auto">
                    <h3 className="text-lg font-medium text-gray-700">
                      {item.product.name}
                    </h3>
                    <p className="text-gray-500">
                      Unit Price: ₱ {item.product.price.toLocaleString()}
                    </p>
                  </div>

                  <div className="flex justify-between gap-x-5 items-center w-full sm:w-auto md:w-auto">
                    <p className="font-medium text-gray-900 text-right md:text-left">
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
                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition"
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
                        className="bg-gray-300 text-gray-700 px-3 py-1 rounded hover:bg-gray-400 transition"
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
            <p className="text-xl font-semibold text-gray-800">Total:</p>
            <p className="text-xl font-semibold text-gray-900">
              ₱ {calculateTotal().toLocaleString()}
            </p>
          </div>

          {/* Checkout Button */}
          <div className="mt-6 text-center">
            <button className="bg-green-500 text-white py-3 px-6 rounded-lg hover:bg-green-600 transition w-full sm:w-auto">
              Proceed to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OrderSummary;
