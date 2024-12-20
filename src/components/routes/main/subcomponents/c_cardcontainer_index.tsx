import React from 'react';
import CClientCardContainer from '@/components/common/cardcontainer/c_client_cardcontainer';
import { SmainLayoutMargin } from '@/styles/tailwind';
import { IProductCard } from '@/schema/schema_main';
import { SampleBagData } from '@/utils/sampledata';

// const bagsProductItems2 = [
//   {
//     id: 1,
//     title: 'CK Black',
//     price: '₱2,499.45',
//     image:
//       'https://media.karousell.com/media/photos/products/2024/5/9/preloved_charles__keith_black__1715250473_ce6db621_progressive.jpg',
//   },
//   {
//     id: 2,
//     title: 'Louise Vitton Bag',
//     price: '₱5,999.45',
//     image: 'https://m.media-amazon.com/images/I/714AoWuTAXL._AC_UL1500_.jpg',
//   },
//   {
//     id: 3,
//     title: 'Prada Luxury Bag',
//     price: '₱65,000.00',
//     image:
//       'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2C7BF0151/1BA426_2C7B_F0151_V_MOO_MDL.jpg',
//   },
//   {
//     id: 4,
//     title: 'Chanel Classic',
//     price: '₱150,000.00',
//     image: 'https://www.chanel.com/images///f_auto//-9543169343518.jpg',
//   },
// ];

// const productItems = [
//   {
//     id: 1,
//     title: 'Nike KD',
//     price: '₱1,099.45',
//     image:
//       'https://i.pinimg.com/originals/20/0d/18/200d1824d16179e101b8cc05fa17e53f.jpg',
//   },
//   {
//     id: 2,
//     title: 'Kobe 6',
//     price: '₱1,649.45',
//     image:
//       'https://down-ph.img.susercontent.com/file/ph-11134207-7r990-lyrtvpu7pe2i28',
//   },
//   {
//     id: 3,
//     title: 'Zoom Kyrie',
//     price: '₱2,199.45',
//     image:
//       'https://s1.dswcdn.com/uploads/Nike_Zoom_Kyrie_Shoes/Nike_Kyrie_3/Nike_Zoom_Kyrie_III_3_Flyknit_black_red_Men_Basketball_Shoes.jpg',
//   },
//   {
//     id: 4,
//     title: 'Jordan 10',
//     price: '₱2,749.45',
//     image: 'https://i.ebayimg.com/images/g/jaIAAOSwqHJjuLFf/s-l1200.jpg',
//   },
// ];

// const WatchproductItems3 = [
//   {
//     id: 1,
//     title: 'Lacoste White Dial',
//     price: '₱1,099.45',
//     image:
//       'https://catchywatches.com/wp-content/uploads/2024/08/2011069-original-lacoste-men-women-watch-white-dial-rubber-strap-egypt-13.jpg',
//   },
//   {
//     id: 2,
//     title: 'Rolex Luxury Watch',
//     price: '₱1,649.45',
//     image:
//       'https://watchexchange.sg/wp-content/uploads/2023/11/most-expensive-rolex-.jpg',
//   },
//   {
//     id: 3,
//     title: 'Swatch PON-Wave',
//     price: '₱2,199.45',
//     image:
//       'https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw225eb4f7/images/Swatch/collections/2024/PON-Wave-2/d_960x960_good_to_gorp.jpg',
//   },
//   {
//     id: 4,
//     title: 'Technomarine',
//     price: '₱2,749.45',
//     image:
//       'https://mydiamond.com.ph/cdn/shop/products/221931267_4486253581407998_431660367613189167_n_1024x1024@2x.jpg?v=1634524783',
//   },
// ];

// const ClothesproductItems4 = [
//   {
//     id: 1,
//     title: 'Uniqlo Performance',
//     price: '₱1,099.00',
//     image:
//       'https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_03_kv.jpg?240829',
//   },
//   {
//     id: 2,
//     title: 'Modern Fit',
//     price: '₱1,649.00',
//     image:
//       'https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/465185/item/phgoods_15_465185_3x4.jpg?width=494',
//   },
//   {
//     id: 3,
//     title: 'Sports Edition',
//     price: '₱2,199.00',
//     image:
//       'https://image.uniqlo.com/UQ/ST3/my/imagesgoods/470193/sub/mygoods_470193_sub3_3x4.jpg?width=494',
//   },
//   {
//     id: 4,
//     title: 'Utility',
//     price: '₱2,749.00',
//     image:
//       'https://im.uniqlo.com/global-cms/spa/res3ca638bb58cd1ba0a0fa3b9612f836defr.jpg',
//   },
// ];

// const JewelryItems5 = [
//   {
//     id: 1,
//     title: 'Nike KD',
//     price: '₱1,099.45',
//     image:
//       'https://media.karousell.com/media/photos/products/2022/2/24/18k_saudi_gold_necklace_18_1645712476_bc4b15ef_progressive.jpg',
//   },
//   {
//     id: 2,
//     title: 'Kobe 6',
//     price: '₱1,649.45',
//     image:
//       'https://www.sparkles.ph/cdn/shop/files/9F9F9EDB-B11F-41B6-933A-3F96AEF2631E.png?v=1707430051',
//   },
//   {
//     id: 3,
//     title: 'Zoom Kyrie',
//     price: '₱2,199.45',
//     image:
//       'https://down-ph.img.susercontent.com/file/ph-11134207-23020-it0effcualnv2f',
//   },
//   {
//     id: 4,
//     title: 'Jordan 10',
//     price: '₱2,749.45',
//     image:
//       'https://down-ph.img.susercontent.com/file/3194d0a4f962d013067c17e313b25910',
//   },
// ];

const dataArray: { label: string; data: IProductCard[] }[] = [
  { label: 'Featured Bag Products', data: SampleBagData.slice(0, 4) },
  { label: 'Features Shoe Products', data: SampleBagData.slice(0, 4) },
  { label: 'Featured Watch Products', data: SampleBagData.slice(0, 4) },
  { label: 'Featured Clothes Products', data: SampleBagData.slice(0, 4) },
  { label: 'Featured Jewelry Items', data: SampleBagData.slice(0, 4) },
];
const CCardContainerIndex = () => {
  return (
    <>
      {dataArray.map((x: { label: string; data: IProductCard[] }) => {
        return (
          <>
            <section className={`${SmainLayoutMargin} mt-5 md:mt-10`}>
              <h2 className="text-3xl text-black font-semibold text-center mb-8">
                {x.label}
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                <CClientCardContainer data={x.data} />
              </div>
            </section>
          </>
        );
      })}
    </>
  );
};

export default CCardContainerIndex;
