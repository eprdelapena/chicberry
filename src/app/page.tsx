'use client';

import Head from 'next/head';
import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const products = [
  {
    id: 1,
    name: 'Product 1',
    price: '2,500 Php ',
    image:
      'https://my-test-11.slatic.net/p/3c44feb26efe8c9e3ea6210bba7b0733.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,850 Php ',
    image:
      'https://enfant.com.ph/cdn/shop/files/2270509cbe91fafc3585fb3faa213a52.jpg?v=1724313307&width=1445',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,300 Php ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ1cvj4v7MxTNEXmv5dxuHS46-ZQfwxDSK16g&s',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image:
      'https://static.nike.com/a/images/w_1920,c_limit/5359f1a2-d415-43ac-80d8-0a285023bd17/image.jpg',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '2,700 Php ',
    image: 'https://i.ebayimg.com/images/g/4sIAAOSw1EZexTbk/s-l1200.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,920 Php ',
    image:
      'https://i5.walmartimages.com/seo/Women-Shoes-Ladies-Breathable-Sneakers-Non-Slip-Soft-Sole-Mesh-Tennis-Walking-Fashion-Pink-7_66136bd9-432b-435f-aeb7-384ee98e8723.aec7fa8ded5265701ced5a03e440d0d3.jpeg',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,890 Php ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQiowjzZqUNaQwIU8PMa_R3OL6nft8zbCMmyA&s',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image: 'https://baccabucci.com/cdn/shop/products/MG_5242.jpg?v=1633514122',
  },
  // Repeat products as per your previous example
];

const products2 = [
  {
    id: 1,
    name: 'Product 1',
    price: '2,500 Php ',
    image: 'https://m.media-amazon.com/images/I/71T8EVp49iL._AC_SL1500_.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,850 Php ',
    image:
      'https://thingsremembered.com.ph/cdn/shop/products/BLACK_MED.jpg?v=1715226416',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,300 Php ',
    image:
      'https://bagsofluxury.com/cdn/shop/files/Collection-1.jpg?v=1710324778&width=3200',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image:
      'https://mygemma.com/cdn/shop/articles/Copy_of_myGemma_Blog_Featured_Image-20_1295d095-b38b-40ad-be9f-7120b1104e42.png?v=1696352823g',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '2,700 Php ',
    image:
      'https://res.cloudinary.com/social-upload-prod-media-cld/image/upload/shopify/1/0207/8508/files/ETT9084.jpg?v=1692892836',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,920 Php ',
    image:
      'https://www.kalkstore.com/cdn/shop/articles/KL_WEB_BLOG_PORTADA_4420x2400_df689793-0c08-4d64-8872-7b415597a5ac.jpg?v=1654701916&width=1500',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,890 Php ',
    image: 'https://m.media-amazon.com/images/I/51t3jnd1lUL._AC_SL1001_.jpg',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image:
      'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQFZCOH1MrIMTdtuUxMaWkxhaggpLJY90pyug&s',
  },
  // Repeat products as per your previous example
];

const products3 = [
  {
    id: 1,
    name: 'Product 1',
    price: '2,500 Php ',
    image: 'https://3.imimg.com/data3/AS/LU/MY-1357390/jewelries-500x500.jpg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,850 Php ',
    image:
      'https://image.made-in-china.com/202f0j00deJWiaqBMYbj/OEM-ODM-All-Types-of-Jewelries-Alloly-Brass-925-Sterling-Silver-Stainless-Steel-Jewelry-Necklaces-Bracelets-Earrings-Jewelry.webp',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,300 Php ',
    image:
      'https://i0.wp.com/waziri.ng/wp-content/uploads/2023/12/Gold-Replica-Bangle-and-Ring-Set-Jewelries.png?fit=500%2C500&ssl=1',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image:
      'https://guesswatches.com/cdn/shop/files/Nav_Collections_656x410_Mobile_F24_Sig_c52b35e4-1d84-4639-8e01-22a339d93a30.png?v=1725468376&width=720',
  },
  {
    id: 1,
    name: 'Product 1',
    price: '2,700 Php ',
    image:
      'https://i5.walmartimages.com/seo/OLEVS-Mens-Gold-Watches-Luxury-Stainless-Steel-Band-Watch-For-Men-Big-Face-With-Calendar-Roman-Numerals-Quartz-Wrist-Classic-Waterproof_60e88262-52a8-4d20-a4ac-dcb8ba7ea823.d7784720ad0b1983058d8eb4bd142cd7.jpeg',
  },
  {
    id: 2,
    name: 'Product 2',
    price: '1,920 Php ',
    image:
      'https://www.watchgecko.com/cdn/shop/articles/Banner_2_1_1100x.jpg?v=1700729062',
  },
  {
    id: 3,
    name: 'Product 3',
    price: '2,890 Php ',
    image: 'https://media.beaverbrooks.co.uk/i/beaverbrooks/og-watches',
  },
  {
    id: 4,
    name: 'Product 4',
    price: '1,900 Php ',
    image:
      'https://globalboutique.com/wp-content/uploads/2023/05/inline-gold-watches-1.jpg',
  },
  // Repeat products as per your previous example
];

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Carousel items now include images and titles
  const carouselItems = [
    {
      title: 'Welcome to Chicberry',
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
        <div className="text-3xl font-bold">ChicBerry</div>
        <nav>
          <a
            href="#"
            className="mx-6 hover:text-pink-200 transition duration-300"
          >
            Home
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
        </nav>
      </header>

      {/* Carousel Section */}
      <section className="relative bg-black text-white text-center">
        <section className="relative bg-black text-white text-center">
          <motion.div
            key={currentIndex} // Keep the key but don't use AnimatePresence
            className="carousel-item relative w-full"
            initial={{ opacity: 0, x: '100%' }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: '-100%' }}
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
        </section>
      </section>

      {/* Horizontal Scrollable Featured Products Section */}
      <section className="py-16 px-6 bg-gradient-to-r from-indigo-500 to-pink-500">
        <h2 className="text-4xl font-semibold text-center text-white mb-12">
          Latest Shoe Arrivals
        </h2>

        {/* Horizontal scrollable container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6">
            {products.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-64 border-2 border-indigo-500"
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
        </div>

        <h2 className="text-4xl font-semibold text-center text-white mb-12 mt-10">
          Hottes bags in the market
        </h2>

        {/* Horizontal scrollable container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6">
            {products2.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-64 border-2 border-indigo-500"
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
        </div>

        <h2 className="text-4xl font-semibold text-center text-white mb-12 mt-10">
          Luxurious brands
        </h2>

        {/* Horizontal scrollable container */}
        <div className="overflow-x-auto pb-6">
          <div className="flex space-x-6">
            {products3.map((product, index) => (
              <div
                key={index}
                className="flex-shrink-0 bg-white p-6 rounded-xl shadow-lg hover:shadow-2xl transition-shadow duration-300 transform hover:scale-105 w-64 border-2 border-indigo-500"
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
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-pink-600 text-white text-center py-6 mt-16">
        <p>&copy; 2024 My Online Shop | All rights reserved</p>
      </footer>
    </>
  );
};

export default Home;
