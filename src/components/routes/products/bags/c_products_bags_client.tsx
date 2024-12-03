import CInstructionContainer from '@/components/common/instructioncontainer/c_instructioncontainer';
import React from 'react';
import CClientCardContainer from '@/components/common/cardcontainer/c_client_cardcontainer';
import { SmainLayoutMargin } from '@/styles/tailwind';

const stringData = 'Bag Products';

const combinedProductItems = [
  // Bags
  {
    id: 1,
    title: 'CK Black',
    price: '₱2,499.45',
    image:
      'https://cdn-images.farfetch-contents.com/13/20/16/04/13201604_54422838_1000.jpg',
  },
  {
    id: 2,
    title: 'Louise Vitton Bag',
    price: '₱5,999.45',
    image: 'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg',
  },
  {
    id: 3,
    title: 'Prada Luxury Bag',
    price: '₱65,000.00',
    image:
      'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713',
  },
  {
    id: 4,
    title: 'Chanel Classic',
    price: '₱150,000.00',
    image:
      'https://baginning.com/media/catalog/product/cache/79b7de24d0c40c829bb951f51913e3c1/w/h/white_leather_top_handle_bag_3_.jpg',
  },
  // Shoes
  {
    id: 5,
    title: 'Nike KD',
    price: '₱1,099.45',
    image: 'https://m.media-amazon.com/images/I/71vz71m5usL._AC_SL1500_.jpg',
  },
  {
    id: 6,
    title: 'Kobe 6',
    price: '₱1,649.45',
    image:
      'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwf321765f/images/DIS/L1515HSR892_0.png?sw=500&sh=500&sm=fit',
  },
  {
    id: 7,
    title: 'Zoom Kyrie',
    price: '₱2,199.45',
    image:
      'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg',
  },
  {
    id: 8,
    title: 'Jordan 10',
    price: '₱2,749.45',
    image: 'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg',
  },
  // Watches
  {
    id: 9,
    title: 'Lacoste White Dial',
    price: '₱1,099.45',
    image:
      'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000',
  },
  {
    id: 10,
    title: 'Rolex Luxury Watch',
    price: '₱1,649.45',
    image:
      'https://baginning.com/media/catalog/product/cache/79b7de24d0c40c829bb951f51913e3c1/w/h/white_leather_top_handle_bag_3_.jpg',
  },
  {
    id: 11,
    title: 'Swatch PON-Wave',
    price: '₱2,199.45',
    image: 'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg',
  },
  {
    id: 12,
    title: 'Technomarine',
    price: '₱2,749.45',
    image: 'https://m.media-amazon.com/images/I/911vQnvBlUL._AC_SY500_.jpg',
  },
  // Clothes
  {
    id: 13,
    title: 'Uniqlo Performance',
    price: '₱1,099.00',
    image: 'https://m.media-amazon.com/images/I/911vQnvBlUL._AC_SY500_.jpg',
  },
  {
    id: 14,
    title: 'Modern Fit',
    price: '₱1,649.00',
    image:
      'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp',
  },
  {
    id: 15,
    title: 'Sports Edition',
    price: '₱2,199.00',
    image: 'https://m.media-amazon.com/images/I/61iRKAyoeQL._AC_SY625_.jpg',
  },
  {
    id: 16,
    title: 'Utility',
    price: '₱2,749.00',
    image: 'https://i.ebayimg.com/images/g/9OIAAOSwAXxkOz7l/s-l960.webp',
  },
  // Jewelry
  {
    id: 17,
    title: '18k Saudi Gold Necklace',
    price: '₱1,099.45',
    image:
      'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp',
  },
  {
    id: 18,
    title: 'Sparkles Pendant',
    price: '₱1,649.45',
    image:
      'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/89/P00488011.jpg',
  },
  {
    id: 19,
    title: 'Zoom Kyrie Jewelry',
    price: '₱2,199.45',
    image: 'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY2446_V1.jpg',
  },
  {
    id: 20,
    title: 'Jordan 10 Necklace',
    price: '₱2,749.45',
    image:
      'https://rustans.com/cdn/shop/files/3281638_01.jpg?v=1725195142&width=1000',
  },
];

const CProductsBagsClient = () => {
  return (
    <>
      <CInstructionContainer />

      <div
        className={`${SmainLayoutMargin} flex w-full items-center flex-col gap-y-5 justify-center`}
      >
        <h1 className="text-black text-[5vw] mt-5 sm:text-[1.5em] font-bold">
          {stringData.toUpperCase()}
        </h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          <CClientCardContainer data={combinedProductItems} />
        </div>
      </div>
    </>
  );
};

export default CProductsBagsClient;
