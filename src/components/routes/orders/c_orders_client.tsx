'use client';
import React, { useEffect, useState } from 'react';

// Updated fake data with more products, receiver details, and address
const orderData: {
  id: number;
  products: {
    name: string;
    quantity: number;
  }[];
  price: number;
  date: string;
  status: 'Received' | 'Pending' | 'On Delivery';
  receiverName: string;
  mobileNumber: string;
  address: string;
}[] = [
  {
    id: 1,
    products: [
      { name: 'Laptop', quantity: 1 },
      { name: 'Wireless Mouse', quantity: 2 },
      { name: 'USB-C Charger', quantity: 1 },
    ],
    price: 999.99,
    date: '2024-12-10',
    status: 'Received',
    receiverName: 'John Doe',
    mobileNumber: '09123456789',
    address: '123 Elm St, Springfield, IL 62701, USA',
  },
  {
    id: 2,
    products: [
      { name: 'Smartphone', quantity: 1 },
      { name: 'Screen Protector', quantity: 1 },
      { name: 'Phone Case', quantity: 1 },
    ],
    price: 799.99,
    date: '2024-12-12',
    status: 'Pending',
    receiverName: 'Jane Smith',
    mobileNumber: '09876543210',
    address: '456 Oakwood Dr, Denver, CO 80202, USA',
  },
  {
    id: 3,
    products: [
      { name: 'Headphones', quantity: 1 },
      { name: 'Bluetooth Speaker', quantity: 1 },
    ],
    price: 189.99,
    date: '2024-12-13',
    status: 'On Delivery',
    receiverName: 'Alice Johnson',
    mobileNumber: '09111223344',
    address: '789 Pine Ave, Austin, TX 73301, USA',
  },
  {
    id: 4,
    products: [
      { name: 'Smartwatch', quantity: 1 },
      { name: 'Charging Dock', quantity: 1 },
    ],
    price: 249.99,
    date: '2024-12-14',
    status: 'On Delivery',
    receiverName: 'Bob Brown',
    mobileNumber: '09998887766',
    address: '101 Maple Lane, Seattle, WA 98101, USA',
  },
  {
    id: 5,
    products: [
      { name: 'Tablet', quantity: 1 },
      { name: 'Keyboard', quantity: 1 },
      { name: 'Stylus Pen', quantity: 1 },
    ],
    price: 499.99,
    date: '2024-12-15',
    status: 'Received',
    receiverName: 'Rachel Green',
    mobileNumber: '09122334455',
    address: '202 Birch Rd, Portland, OR 97201, USA',
  },
  {
    id: 6,
    products: [
      { name: 'Camera', quantity: 1 },
      { name: 'Tripod', quantity: 1 },
      { name: 'Memory Card', quantity: 2 },
    ],
    price: 459.99,
    date: '2024-12-16',
    status: 'Pending',
    receiverName: 'Monica Geller',
    mobileNumber: '09223344556',
    address: '303 Cedar Blvd, San Francisco, CA 94105, USA',
  },
];

const ClientComponentOrders = () => {
  const [orders, setOrders] = useState<
    {
      id: number;
      products: {
        name: string;
        quantity: number;
      }[];
      price: number;
      date: string;
      status: 'Received' | 'Pending' | 'On Delivery';
      receiverName: string;
      mobileNumber: string;
      address: string; // Added address type
    }[]
  >([]);

  const renderStatusClass = (
    status: 'Received' | 'Pending' | 'On Delivery'
  ) => {
    switch (status) {
      case 'Received':
        return 'bg-green-200 text-green-800';
      case 'Pending':
        return 'bg-yellow-200 text-yellow-800';
      case 'On Delivery':
        return 'bg-blue-200 text-blue-800';
      default:
        return '';
    }
  };

  useEffect(() => {
    setOrders(orderData);
  }, []);

  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-3xl font-semibold text-center mb-6 text-black">
        Order Status
      </h2>
      <div className="space-y-6">
        {orders.map((order) => (
          <div
            key={order.id}
            className="border border-gray-300 rounded-lg p-6 shadow-lg bg-white"
          >
            <h3 className="text-xl font-semibold text-black">
              Order {order.id}
            </h3>
            <p className="text-sm text-gray-500">Ordered on: {order.date}</p>

            {/* Receiver Details */}
            <div className="mt-4 space-y-2">
              <p className="font-semibold text-black">
                Receiver: {order.receiverName}
              </p>
              <p className="text-sm text-gray-600">
                Mobile: {order.mobileNumber}
              </p>
              <p className="text-sm text-gray-600">Address: {order.address}</p>
            </div>

            {/* Loop through products */}
            <div className="mt-4 space-y-3">
              {order.products.map((product, index) => (
                <div
                  key={index}
                  className="flex justify-between items-center border-b border-gray-200 pb-3"
                >
                  <span className="font-semibold text-black">
                    {product.name}
                  </span>
                  <span className="text-sm text-gray-600">
                    Quantity: {product.quantity}
                  </span>
                </div>
              ))}
            </div>

            <div className="flex justify-between items-center mt-4">
              <span className="text-lg font-semibold text-black">
                ${order.price.toFixed(2)}
              </span>
            </div>

            <p
              className={`mt-4 px-4 py-2 inline-block rounded-full text-sm ${renderStatusClass(order.status)} text-black`}
            >
              {order.status}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ClientComponentOrders;
