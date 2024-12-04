import { IProductCard } from "@/schema/schema_main";

export const SampleBagData: IProductCard[] = [
    {
    id: 1,
    title: 'CK Black',
    price: '₱2,499.45',
    image:
      'https://cdn-images.farfetch-contents.com/13/20/16/04/13201604_54422838_1000.jpg',
    description: 'A sleek and elegant black bag perfect for both casual and formal occasions.',
    quantity: 5,
    subImage: [
      'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg', // from Louise Vitton Bag
      'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713', // from Prada Luxury Bag
      'https://baginning.com/media/catalog/product/cache/79b7de24d0c40c829bb951f51913e3c1/w/h/white_leather_top_handle_bag_3_.jpg' // from Chanel Classic
    ]
  },
  {
    id: 2,
    title: 'Louise Vitton Bag',
    price: '₱5,999.45',
    image: 'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg',
    description: 'A luxurious and timeless design that adds sophistication to any outfit.',
    quantity: 3,
    subImage: [
      'https://cdn-images.farfetch-contents.com/13/20/16/04/13201604_54422838_1000.jpg', // from CK Black
      'https://m.media-amazon.com/images/I/71vz71m5usL._AC_SL1500_.jpg', // from Nike KD
      'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwf321765f/images/DIS/L1515HSR892_0.png?sw=500&sh=500&sm=fit' // from Kobe 6
    ]
  },
  {
    id: 3,
    title: 'Prada Luxury Bag',
    price: '₱65,000.00',
    image:
      'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713',
    description: 'Exquisite craftsmanship and high-end materials make this bag a true investment piece.',
    quantity: 2,
    subImage: [
      'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg', // from Zoom Kyrie
      'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000', // from Lacoste White Dial
      'https://m.media-amazon.com/images/I/911vQnvBlUL._AC_SY500_.jpg' // from Technomarine
    ]
  },
  {
    id: 4,
    title: 'Chanel Classic',
    price: '₱150,000.00',
    image:
      'https://baginning.com/media/catalog/product/cache/79b7de24d0c40c829bb951f51913e3c1/w/h/white_leather_top_handle_bag_3_.jpg',
    description: 'An iconic piece that epitomizes luxury and timeless fashion, perfect for any occasion.',
    quantity: 1,
    subImage: [
      'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
      'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
      'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
    ]
  },
  // Shoes
  {
    id: 5,
    title: 'Nike KD',
    price: '₱1,099.45',
    image: 'https://m.media-amazon.com/images/I/71vz71m5usL._AC_SL1500_.jpg',
    description: 'A high-performance basketball shoe designed for comfort and agility on the court.',
    quantity: 4,
    subImage: [
      'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713', // from Prada Luxury Bag
      'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000', // from Lacoste White Dial
      'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwf321765f/images/DIS/L1515HSR892_0.png?sw=500&sh=500&sm=fit' // from Kobe 6
    ]
  },
  {
    id: 6,
    title: 'Kobe 6',
    price: '₱1,649.45',
    image:
      'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwf321765f/images/DIS/L1515HSR892_0.png?sw=500&sh=500&sm=fit',
    description: 'A stylish and durable sneaker, ideal for both performance and streetwear fashion.',
    quantity: 3,
    subImage: [
      'https://cdn-images.farfetch-contents.com/13/20/16/04/13201604_54422838_1000.jpg', // from CK Black
      'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg', // from Louise Vitton Bag
      'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg' // from Zoom Kyrie
    ]
  },
  {
    id: 7,
    title: 'Zoom Kyrie',
    price: '₱2,199.45',
    image:
      'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg',
    description: 'Sleek and supportive, this sneaker offers comfort and traction for your active lifestyle.',
    quantity: 2,
    subImage: [
      'https://baginning.com/media/catalog/product/cache/79b7de24d0c40c829bb951f51913e3c1/w/h/white_leather_top_handle_bag_3_.jpg', // from Chanel Classic
      'https://m.media-amazon.com/images/I/71vz71m5usL._AC_SL1500_.jpg', // from Nike KD
      'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
    ]
  },
  {
    id: 8,
    title: 'Jordan 10',
    price: '₱2,749.45',
    image: 'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg',
    description: 'A legendary sneaker that blends retro style with modern performance features.',
    quantity: 3,
    subImage: [
      'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp', // from Modern Fit
      'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000', // from Lacoste White Dial
      'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg' // from Swatch PON-Wave
    ]
  },
      // Watches
      {
        id: 9,
        title: 'Lacoste White Dial',
        price: '₱1,099.45',
        image: 'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000',
        description: 'A clean and minimalist design, perfect for everyday wear with a touch of elegance.',
        quantity: 5,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg', // Subimage from another product
          'https://m.media-amazon.com/images/I/71vz71m5usL._AC_SL1500_.jpg', // Subimage from another product
          'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713', // Subimage from another product
        ],
      },
      {
        id: 10,
        title: 'Swatch PON-Wave',
        price: '₱2,149.45',
        image: 'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg',
        description: 'A sporty and vibrant watch with a modern design for the bold and adventurous.',
        quantity: 3,
        subImage: [
          'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg', // Subimage from another product
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // Subimage from another product
          'https://cdn-images.farfetch-contents.com/13/20/16/04/13201604_54422838_1000.jpg', // Subimage from another product
        ],
      },
      {
        id: 11,
        title: 'Rolex Submariner',
        price: '₱235,000.00',
        image: 'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg',
        description: 'A luxury dive watch with outstanding precision and timeless style.',
        quantity: 2,
        subImage: [
          'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000', // Subimage from another product
          'https://grandeurstore.ph/cdn/shop/files/A1_c9b3bdcb-2bb0-4e11-a552-88248c81d2d4.png?v=1718265779&width=713', // Subimage from another product
          'https://www.longchamp.com/dw/image/v2/BCVX_PRD/on/demandware.static/-/Sites-LC-master-catalog/default/dwf321765f/images/DIS/L1515HSR892_0.png?sw=500&sh=500&sm=fit', // Subimage from another product
        ],
      },
      {
        id: 12,
        title: 'Omega Seamaster',
        price: '₱295,000.00',
        image: 'https://is4.revolveassets.com/images/p4/n/uv/MARJ-WY505_V1.jpg',
        description: 'A stylish dive watch with advanced water resistance and a sporty aesthetic.',
        quantity: 3,
        subImage: [
          'https://rustans.com/cdn/shop/files/3329697_3.jpg?v=1732849397&width=1000', // Subimage from another product
          'https://5.imimg.com/data5/FV/GM/MY-2/stylish-ladies-bag-1000x1000.jpg', // Subimage from another product
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // Subimage from another product
        ],
      },
      // Continue for other items...
    // Clothes
    {
        id: 13,
        title: 'Uniqlo Performance',
        price: '₱1,099.00',
        image: 'https://m.media-amazon.com/images/I/911vQnvBlUL._AC_SY500_.jpg',
        description: 'A versatile and comfortable performance piece, perfect for active lifestyles.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 14,
        title: 'Modern Fit',
        price: '₱1,649.00',
        image:
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp',
        description: 'A contemporary fit designed to flatter and offer a modern, sleek silhouette.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 15,
        title: 'Sports Edition',
        price: '₱2,199.00',
        image: 'https://m.media-amazon.com/images/I/61iRKAyoeQL._AC_SY625_.jpg',
        description: 'Built for comfort and style, this sports edition shirt supports performance in any activity.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 16,
        title: 'Utility',
        price: '₱2,749.00',
        image: 'https://i.ebayimg.com/images/g/9OIAAOSwAXxkOz7l/s-l960.webp',
        description: 'A practical and rugged design, combining utility with modern fashion trends.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      // Jewelry
      {
        id: 17,
        title: '18k Saudi Gold Necklace',
        price: '₱1,099.45',
        image:
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp',
        description: 'A stunning 18k gold necklace that exudes luxury and timeless elegance.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 18,
        title: 'Sparkles Pendant',
        price: '₱1,649.45',
        image:
          'https://img.mytheresa.com/1094/1238/100/jpeg/catalog/product/89/P00488011.jpg',
        description: 'A sparkling pendant that adds a touch of glamour to any outfit.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 19,
        title: 'Zoom Kyrie Jewelry',
        price: '₱2,199.45',
        image: 'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY2446_V1.jpg',
        description: 'A unique and modern jewelry piece, perfect for athletes or fashion-forward individuals.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      },
      {
        id: 20,
        title: 'Jordan 10 Necklace',
        price: '₱2,749.45',
        image:
          'https://rustans.com/cdn/shop/files/3281638_01.jpg?v=1725195142&width=1000',
        description: 'An exclusive Jordan 10 necklace that showcases a fusion of luxury and sporty flair.',
        quantity: 1,
        subImage: [
          'https://is4.revolveassets.com/images/p4/n/uv/FNEF-WY3305_V1.jpg', // from Swatch PON-Wave
          'https://m.media-amazon.com/images/I/71aJR2pwB+L._AC_SL1500_.jpg', // from Jordan 10
          'https://image.made-in-china.com/155f0j00PbUkJWirbQcs/Nine-West-Calandra-Mini-Flap-Crossbody-Woman-Tote-Bag-Fashion-Lady-Handbags.webp' // from Modern Fit
        ]
      }
  ];
  

export const sampleClotheData = [
    // Bags
    {
      id: 1,
      title: 'CK Black',
      price: '₱2,499.45',
      image:
        'https://media.karousell.com/media/photos/products/2024/5/9/preloved_charles__keith_black__1715250473_ce6db621_progressive.jpg',
    },
    {
      id: 2,
      title: 'Louise Vitton Bag',
      price: '₱5,999.45',
      image: 'https://m.media-amazon.com/images/I/714AoWuTAXL._AC_UL1500_.jpg',
    },
    {
      id: 3,
      title: 'Prada Luxury Bag',
      price: '₱65,000.00',
      image:
        'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2C7BF0151/1BA426_2C7B_F0151_V_MOO_MDL.jpg',
    },
    {
      id: 4,
      title: 'Chanel Classic',
      price: '₱150,000.00',
      image: 'https://www.chanel.com/images///f_auto//-9543169343518.jpg',
    },
    // Shoes
    {
      id: 5,
      title: 'Nike KD',
      price: '₱1,099.45',
      image:
        'https://i.pinimg.com/originals/20/0d/18/200d1824d16179e101b8cc05fa17e53f.jpg',
    },
    {
      id: 6,
      title: 'Kobe 6',
      price: '₱1,649.45',
      image:
        'https://down-ph.img.susercontent.com/file/ph-11134207-7r990-lyrtvpu7pe2i28',
    },
    {
      id: 7,
      title: 'Zoom Kyrie',
      price: '₱2,199.45',
      image:
        'https://s1.dswcdn.com/uploads/Nike_Zoom_Kyrie_Shoes/Nike_Kyrie_3/Nike_Zoom_Kyrie_III_3_Flyknit_black_red_Men_Basketball_Shoes.jpg',
    },
    {
      id: 8,
      title: 'Jordan 10',
      price: '₱2,749.45',
      image: 'https://i.ebayimg.com/images/g/jaIAAOSwqHJjuLFf/s-l1200.jpg',
    },
    // Watches
    {
      id: 9,
      title: 'Lacoste White Dial',
      price: '₱1,099.45',
      image:
        'https://catchywatches.com/wp-content/uploads/2024/08/2011069-original-lacoste-men-women-watch-white-dial-rubber-strap-egypt-13.jpg',
    },
    {
      id: 10,
      title: 'Rolex Luxury Watch',
      price: '₱1,649.45',
      image:
        'https://watchexchange.sg/wp-content/uploads/2023/11/most-expensive-rolex-.jpg',
    },
    {
      id: 11,
      title: 'Swatch PON-Wave',
      price: '₱2,199.45',
      image:
        'https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw225eb4f7/images/Swatch/collections/2024/PON-Wave-2/d_960x960_good_to_gorp.jpg',
    },
    {
      id: 12,
      title: 'Technomarine',
      price: '₱2,749.45',
      image:
        'https://mydiamond.com.ph/cdn/shop/products/221931267_4486253581407998_431660367613189167_n_1024x1024@2x.jpg?v=1634524783',
    },
    // Clothes
    {
      id: 13,
      title: 'Uniqlo Performance',
      price: '₱1,099.00',
      image:
        'https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_03_kv.jpg?240829',
    },
    {
      id: 14,
      title: 'Modern Fit',
      price: '₱1,649.00',
      image:
        'https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/465185/item/phgoods_15_465185_3x4.jpg?width=494',
    },
    {
      id: 15,
      title: 'Sports Edition',
      price: '₱2,199.00',
      image:
        'https://image.uniqlo.com/UQ/ST3/my/imagesgoods/470193/sub/mygoods_470193_sub3_3x4.jpg?width=494',
    },
    {
      id: 16,
      title: 'Utility',
      price: '₱2,749.00',
      image:
        'https://im.uniqlo.com/global-cms/spa/res3ca638bb58cd1ba0a0fa3b9612f836defr.jpg',
    },
    // Jewelry
    {
      id: 17,
      title: '18k Saudi Gold Necklace',
      price: '₱1,099.45',
      image:
        'https://media.karousell.com/media/photos/products/2022/2/24/18k_saudi_gold_necklace_18_1645712476_bc4b15ef_progressive.jpg',
    },
    {
      id: 18,
      title: 'Sparkles Pendant',
      price: '₱1,649.45',
      image:
        'https://www.sparkles.ph/cdn/shop/files/9F9F9EDB-B11F-41B6-933A-3F96AEF2631E.png?v=1707430051',
    },
    {
      id: 19,
      title: 'Zoom Kyrie Jewelry',
      price: '₱2,199.45',
      image:
        'https://down-ph.img.susercontent.com/file/ph-11134207-23020-it0effcualnv2f',
    },
    {
      id: 20,
      title: 'Jordan 10 Necklace',
      price: '₱2,749.45',
      image:
        'https://down-ph.img.susercontent.com/file/3194d0a4f962d013067c17e313b25910',
    },
  ];
  
  export const sampleJewelryData = [
    // Bags
    {
      id: 1,
      title: 'CK Black',
      price: '₱2,499.45',
      image:
        'https://media.karousell.com/media/photos/products/2024/5/9/preloved_charles__keith_black__1715250473_ce6db621_progressive.jpg',
    },
    {
      id: 2,
      title: 'Louise Vitton Bag',
      price: '₱5,999.45',
      image: 'https://m.media-amazon.com/images/I/714AoWuTAXL._AC_UL1500_.jpg',
    },
    {
      id: 3,
      title: 'Prada Luxury Bag',
      price: '₱65,000.00',
      image:
        'https://www.prada.com/content/dam/pradabkg_products/1/1BA/1BA426/2C7BF0151/1BA426_2C7B_F0151_V_MOO_MDL.jpg',
    },
    {
      id: 4,
      title: 'Chanel Classic',
      price: '₱150,000.00',
      image: 'https://www.chanel.com/images///f_auto//-9543169343518.jpg',
    },
    // Shoes
    {
      id: 5,
      title: 'Nike KD',
      price: '₱1,099.45',
      image:
        'https://i.pinimg.com/originals/20/0d/18/200d1824d16179e101b8cc05fa17e53f.jpg',
    },
    {
      id: 6,
      title: 'Kobe 6',
      price: '₱1,649.45',
      image:
        'https://down-ph.img.susercontent.com/file/ph-11134207-7r990-lyrtvpu7pe2i28',
    },
    {
      id: 7,
      title: 'Zoom Kyrie',
      price: '₱2,199.45',
      image:
        'https://s1.dswcdn.com/uploads/Nike_Zoom_Kyrie_Shoes/Nike_Kyrie_3/Nike_Zoom_Kyrie_III_3_Flyknit_black_red_Men_Basketball_Shoes.jpg',
    },
    {
      id: 8,
      title: 'Jordan 10',
      price: '₱2,749.45',
      image: 'https://i.ebayimg.com/images/g/jaIAAOSwqHJjuLFf/s-l1200.jpg',
    },
    // Watches
    {
      id: 9,
      title: 'Lacoste White Dial',
      price: '₱1,099.45',
      image:
        'https://catchywatches.com/wp-content/uploads/2024/08/2011069-original-lacoste-men-women-watch-white-dial-rubber-strap-egypt-13.jpg',
    },
    {
      id: 10,
      title: 'Rolex Luxury Watch',
      price: '₱1,649.45',
      image:
        'https://watchexchange.sg/wp-content/uploads/2023/11/most-expensive-rolex-.jpg',
    },
    {
      id: 11,
      title: 'Swatch PON-Wave',
      price: '₱2,199.45',
      image:
        'https://www.swatch.com/dw/image/v2/BDNV_PRD/on/demandware.static/-/Library-Sites-swarp-global/default/dw225eb4f7/images/Swatch/collections/2024/PON-Wave-2/d_960x960_good_to_gorp.jpg',
    },
    {
      id: 12,
      title: 'Technomarine',
      price: '₱2,749.45',
      image:
        'https://mydiamond.com.ph/cdn/shop/products/221931267_4486253581407998_431660367613189167_n_1024x1024@2x.jpg?v=1634524783',
    },
    // Clothes
    {
      id: 13,
      title: 'Uniqlo Performance',
      price: '₱1,099.00',
      image:
        'https://www.uniqlo.com/jp/ja/contents/feature/masterpiece/common/img/product/item_03_kv.jpg?240829',
    },
    {
      id: 14,
      title: 'Modern Fit',
      price: '₱1,649.00',
      image:
        'https://image.uniqlo.com/UQ/ST3/ph/imagesgoods/465185/item/phgoods_15_465185_3x4.jpg?width=494',
    },
    {
      id: 15,
      title: 'Sports Edition',
      price: '₱2,199.00',
      image:
        'https://image.uniqlo.com/UQ/ST3/my/imagesgoods/470193/sub/mygoods_470193_sub3_3x4.jpg?width=494',
    },
    {
      id: 16,
      title: 'Utility',
      price: '₱2,749.00',
      image:
        'https://im.uniqlo.com/global-cms/spa/res3ca638bb58cd1ba0a0fa3b9612f836defr.jpg',
    },
    // Jewelry
    {
      id: 17,
      title: '18k Saudi Gold Necklace',
      price: '₱1,099.45',
      image:
        'https://media.karousell.com/media/photos/products/2022/2/24/18k_saudi_gold_necklace_18_1645712476_bc4b15ef_progressive.jpg',
    },
    {
      id: 18,
      title: 'Sparkles Pendant',
      price: '₱1,649.45',
      image:
        'https://www.sparkles.ph/cdn/shop/files/9F9F9EDB-B11F-41B6-933A-3F96AEF2631E.png?v=1707430051',
    },
    {
      id: 19,
      title: 'Zoom Kyrie Jewelry',
      price: '₱2,199.45',
      image:
        'https://down-ph.img.susercontent.com/file/ph-11134207-23020-it0effcualnv2f',
    },
    {
      id: 20,
      title: 'Jordan 10 Necklace',
      price: '₱2,749.45',
      image:
        'https://down-ph.img.susercontent.com/file/3194d0a4f962d013067c17e313b25910',
    },
  ];
  
export const sampleShoeData = [
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