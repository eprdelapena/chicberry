import CInstructionContainer from '@/components/common/instructioncontainer/c_instructioncontainer';
import React from 'react';
import CClientCardContainer from '@/components/common/cardcontainer/c_client_cardcontainer';
import { SmainLayoutMargin } from '@/styles/tailwind';

const stringData = 'Shoe Products';

const combinedProductItems = [
  // Bags
  {
    id: 1,
    title: 'CK Black',
    price: '₱2,499.45',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a5b979a-e42b-4a80-b25a-3926e6294b23/AIR+MAX+90+GTX.png',
  },
  {
    id: 2,
    title: 'Louise Vitton Bag',
    price: '₱5,999.45',
    image:
      'https://images.asics.com/is/image/asics/1183B395_400_SR_RT_GLB-3?$product$',
  },
  {
    id: 3,
    title: 'Prada Luxury Bag',
    price: '₱65,000.00',
    image:
      'https://images.asics.com/is/image/asics/1183A387_103_SR_RT_GLB?$product$',
  },
  {
    id: 4,
    title: 'Chanel Classic',
    price: '₱150,000.00',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/9a5b979a-e42b-4a80-b25a-3926e6294b23/AIR+MAX+90+GTX.png',
  },
  // Shoes
  {
    id: 5,
    title: 'Nike KD',
    price: '₱1,099.45',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7db556e8-e9e8-4a30-a577-099be6e215e5/AIR+FORCE+1+%2707+LV8.png',
  },
  {
    id: 6,
    title: 'Kobe 6',
    price: '₱1,649.45',
    image:
      'https://restoerun.com/cdn/shop/files/1000473241_01.jpg?v=1721298656&width=5000',
  },
  {
    id: 7,
    title: 'Zoom Kyrie',
    price: '₱2,199.45',
    image: 'https://m.media-amazon.com/images/I/51U4VkEq+qL._AC_SL1000_.jpg',
  },
  {
    id: 8,
    title: 'Jordan 10',
    price: '₱2,749.45',
    image:
      'https://en-kw.sssports.com/dw/image/v2/BDVB_PRD/on/demandware.static/-/Sites-akeneo-master-catalog/default/dwe6834b04/sss/SSS2/C/L/1/8/2/SSS2_CL1826371_313_195981537840_1.jpg?sw=700&sh=700&sm=fit',
  },
  // Watches
  {
    id: 9,
    title: 'Lacoste White Dial',
    price: '₱1,099.45',
    image:
      'https://columbiasportswear.ph/cdn/shop/files/1000473234_01.jpg?v=1712889225',
  },
  {
    id: 10,
    title: 'Rolex Luxury Watch',
    price: '₱1,649.45',
    image:
      'https://columbiasportswear.co.za/wp-content/uploads/2024/04/2063101_466_f2_tt_preview_download.jpg',
  },
  {
    id: 11,
    title: 'Swatch PON-Wave',
    price: '₱2,199.45',
    image:
      'https://www.rei.com/media/5700cf08-095e-49d3-b6b4-59cca3c98fd9.jpg?size=784x588',
  },
  {
    id: 12,
    title: 'Technomarine',
    price: '₱2,749.45',
    image:
      'https://images-cdn.ubuy.co.in/659dac9f3311e10b807deb1c-the-north-face-vectiv-enduris-3.jpg',
  },
  // Clothes
  {
    id: 13,
    title: 'Uniqlo Performance',
    price: '₱1,099.00',
    image:
      'https://assets.thenorthface.eu/images/t_img/f_auto,h_462,w_462/e_sharpen:60/dpr_2.0/v1720722844/NF0A8A9WZU3-HERO/Summit-Offtrail-Trail-Running-Shoes.png',
  },
  {
    id: 14,
    title: 'Modern Fit',
    price: '₱1,649.00',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/295177e8-9b13-4841-a1d8-4d8c219e33be/AIR+MAX+90+SP.png',
  },
  {
    id: 15,
    title: 'Sports Edition',
    price: '₱2,199.00',
    image:
      'https://dynamic.zacdn.com/k1jEduYWurB4EeHWlkSGhRL5jU8=/filters:quality(70):format(webp)/https://static-ph.zacdn.com/p/lacoste-0751-1022263-1.jpg',
  },
  {
    id: 16,
    title: 'Utility',
    price: '₱2,749.00',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/7db556e8-e9e8-4a30-a577-099be6e215e5/AIR+FORCE+1+%2707+LV8.png',
  },
  // Jewelry
  {
    id: 17,
    title: '18k Saudi Gold Necklace',
    price: '₱1,099.45',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/853a834d7fd94185834f8a6e56ce57cc_9366/London_Shoes_White_IG6208_01_standard.jpg',
  },
  {
    id: 18,
    title: 'Sparkles Pendant',
    price: '₱1,649.45',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/a34f007a106043afb2f3afab00e997ee_9366/Samba_OG_Shoes_White_IG1024_01_standard.jpg',
  },
  {
    id: 19,
    title: 'Zoom Kyrie Jewelry',
    price: '₱2,199.45',
    image:
      'https://assets.adidas.com/images/h_840,f_auto,q_auto,fl_lossy,c_fill,g_auto/e2bff7577b34435e974ee7d13c6dd565_9366/adidas_Taekwondo_Shoes_White_JQ4774_01_standard.jpg',
  },
  {
    id: 20,
    title: 'Jordan 10 Necklace',
    price: '₱2,749.45',
    image:
      'https://static.nike.com/a/images/t_PDP_1728_v1/f_auto,q_auto:eco/295177e8-9b13-4841-a1d8-4d8c219e33be/AIR+MAX+90+SP.png',
  },
];

const CProductsShoesClient = () => {
  return (
    <>
      <CInstructionContainer />
      <div
        className={`${SmainLayoutMargin} flex w-full items-center flex-col gap-y-5 my-10 justify-center`}
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

export default CProductsShoesClient;
