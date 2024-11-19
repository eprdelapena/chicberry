'use client';

import Head from 'next/head';
import { FaShoppingCart } from 'react-icons/fa';
import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const products = [
  { id: 1, name: 'Product 1', price: '$25.00', image: '/product1.jpg' },
  { id: 2, name: 'Product 2', price: '$30.00', image: '/product2.jpg' },
  { id: 3, name: 'Product 3', price: '$20.00', image: '/product3.jpg' },
  { id: 4, name: 'Product 4', price: '$40.00', image: '/product4.jpg' },
  // Repeat products as per your previous example
];

const Shoes = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel items now include images and titles
  const carouselItems = [
    {
      title: 'Welcome to My Online Shop',
      subtitle: 'Discover amazing products at great prices!',
      image:
        'https://static.vecteezy.com/system/resources/previews/047/133/228/non_2x/beautiful-female-model-in-holographic-clothes-photo.jpg', // Path to your image
    },
    {
      title: 'Exclusive Deals Every Day!',
      subtitle: 'Shop now and save big!',
      image:
        'https://cms-artifacts.artlist.io/content/motion-array/2628297/Happy_Plus_Size_Female_Model_In_Stylish_high_resolution_preview_2628297.jpg?Expires=2034823359639&Key-Pair-Id=K2ZDLYDZI2R1DF&Signature=hoYq797wc3lT2l9vawjtU3qnFH3982HWlsyD32TaUvMI2SuDHsrCyHkqEr0DiEs9D~EpFjVAxXV8JMbGSQBH8S4TtnS8ZXqF~iGufMV~tLw2BZlHDgebW-fDjcviXV9GPgVPgAMQckdWn3Ke0UK2UE~JnXFVL33ANnFxJIFLSJmCvNx5WcZBhmedYoWAycX4bNY2bBnaNc53SfUWm4DaktJnOsVB~2eT7UiBAS2Fx19UHKSNz28Akd91g1Bg1t6vs5BveijujKi-Mv62Bi6mHx~UbrbhL-nvrCQeA8RGcqp6PIo2y3t39pKQNFSVNBcz7NELkCAKQ7HFTABDFDnNRg__', // Path to your image
    },
    {
      title: 'Your Favorite Products, All in One Place',
      subtitle: 'Fast shipping and easy returns!',
      image:
        'https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/A_Shoe_Shoot.jpg/800px-A_Shoe_Shoot.jpg?20120911064755', // Path to your image
    },
  ];

  // Change the carousel every 3 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % carouselItems.length);
    }, 3000);

    return () => clearInterval(interval); // Clear interval on unmount
  }, []);

  return (
    <>
      <Head>
        <title>My Online Shop</title>
        <meta name="description" content="Shop for the best products" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Header */}
      <header className="bg-pink-600 text-white p-6 flex justify-between items-center shadow-md">
        <div className="text-3xl font-bold">MyShop</div>
        <nav>
          <a
            href="#"
            className="mx-6 hover:text-pink-200 transition duration-300"
          >
            Shoes
          </a>
          <a
            href="#"
            className="mx-6 hover:text-pink-200 transition duration-300"
          >
            Shop
          </a>
          <a
            href="#"
            className="mx-6 hover:text-pink-200 transition duration-300"
          >
            Contact
          </a>
          <a
            href="#"
            className="ml-6 hover:text-pink-200 transition duration-300"
          >
            <FaShoppingCart size={24} />
          </a>
        </nav>
      </header>

      {/* Carousel Section */}
      <section className="relative bg-black text-white text-center ">
        <AnimatePresence mode="wait">
          <motion.div
            key={currentIndex}
            className="carousel-item relative w-full"
            initial={{ opacity: 0, x: '100%' }} // Start from the right
            animate={{ opacity: 1, x: 0 }} // Move to the center
            exit={{ opacity: 0, x: '-100%' }} // Move to the left
            transition={{ duration: 0.5 }}
          >
            <img
              src={carouselItems[currentIndex].image}
              alt={carouselItems[currentIndex].title}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center bg-black bg-opacity-50 text-white p-6">
              <h1 className="text-5xl font-extrabold tracking-tight">
                {carouselItems[currentIndex].title}
              </h1>
              <p className="mt-6 text-xl sm:text-2xl">
                {carouselItems[currentIndex].subtitle}
              </p>
            </div>
          </motion.div>
        </AnimatePresence>
      </section>

      {/* Product Listing */}
      <section className="py-16 px-6 bg-pink-50">
        <h2 className="text-4xl font-semibold text-center text-pink-600 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-pink-600">
                {product.name}
              </h3>
              <p className="text-xl text-gray-600">{product.price}</p>
              <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-pink-50">
        <h2 className="text-4xl font-semibold text-center text-pink-600 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-pink-600">
                {product.name}
              </h3>
              <p className="text-xl text-gray-600">{product.price}</p>
              <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="py-16 px-6 bg-pink-50">
        <h2 className="text-4xl font-semibold text-center text-pink-600 mb-12">
          Featured Products
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105"
            >
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-56 object-cover rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-pink-600">
                {product.name}
              </h3>
              <p className="text-xl text-gray-600">{product.price}</p>
              <button className="mt-6 w-full bg-pink-600 text-white py-3 rounded-lg hover:bg-pink-700 transition-colors duration-300">
                Add to Cart
              </button>
            </div>
          ))}
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6 mt-16">
        <p>&copy; 2024 My Online Shop | All rights reserved</p>
      </footer>
    </>
  );
};

export default Shoes;
