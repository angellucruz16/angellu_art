// ✅♍️ product js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

// 🍓 Product array
// const products = [
// {
//     id: 1,
//     title: "Juicy",
//     price: "5099",
//     image: "../illustrations/Juicy.png",
//     type: "print",
//     isBestSeller: true,
//     collection: true,
//     collectionName: "Beauty",
//     inStock: true,
//     isAdded: false,
//     size: [
//         "13x16",
//         "15x15",
//         "25x13"
//     ],
//     quantity: "1",
//     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//      images: [
//         "../illustrations/Juicy.png",
//          "../illustrations/mockup detail/Juicy-m1.png",
//          "../illustrations/mockup detail/Juicy-m2.png" ]
//  },
// {
//     id: 2,
//     title: "Gold & Blue",
//     price: "1099",
//     image: "../illustrations/GoldBlueStickers.png",
//     type: "sticker",
//     isBestSeller: false,
//     collection: false,
//     collectionName: "",
//     inStock: true,
//     isAdded: false,
//     size: [
//       "5x5",
//       "7x5",
//       "15x7"
//   ],
//     quantity: "1",
//     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//     images: [
//       "../illustrations/GoldBlueStickers.png",
//        "../illustrations/mockup detail/Juicy-m1.png",
//        "../illustrations/mockup detail/Juicy-m2.png" ]
// },
// {
//     id: 3,
//     title: "Honey",
//     price: "3099",
//     image: "../illustrations/Honey.png",
//     type: "print",
//     isBestSeller: true,
//     collection: true,
//     collectionName: "Classic",
//     inStock: true,
//     isAdded: false,
//     size: [
//       "13x16",
//       "15x15",
//       "25x13"
//   ],
//     quantity: "1",
//     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//     images: [
//       "../illustrations/Honey.png",
//        "../illustrations/mockup detail/Honey-m1.png",
//        "../illustrations/mockup detail/Honey-m2.png" ]
// },
// {
//   id: 4,
//   title: "Stella",
//   price: "4099",
//   image: "../illustrations/Stella.png",
//   type: "print",
//   isBestSeller: true,
//   collection: false,
//   collectionName: "",
//   inStock: false,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/Stella.png",
//      "../illustrations/mockup detail/Stella-m1.png",
//      "../illustrations/mockup detail/Stella-m2.png" ]
// },
// {
//   id: 5,
//   title: "Alice Melancholia",
//   price: "6099",
//   image: "../illustrations/AliceOne.png",
//   type: "print",
//   isBestSeller: true,
//   collection: true,
//   collectionName: "Alice",
//   inStock: false,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/AliceOne.png",
//      "../illustrations/mockup detail/AliceOne-m1.png",
//      "../illustrations/mockup detail/AliceOne-m2.png" ]
// },
// {
//   id: 6,
//   title: "Alice Serenity",
//   price: "6099",
//   image: "../illustrations/AliceTwo.png",
//   type: "print",
//   isBestSeller: true,
//   collection: true,
//   collectionName: "Alice",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],  quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/AliceTwo.png",
//      "../illustrations/mockup detail/AliceTwo-m1.png",
//      "../illustrations/mockup detail/AliceTwo-m2.png" ]
// },
// {
//   id: 7,
//   title: "Classy Bag",
//   price: "6099",
//   image: "../illustrations/BagMerch.png",
//   type: "merch",
//   isBestSeller: false,
//   collection: false,
//   collectionName: "",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "small",
//     "medium",
//     "large"
// ],  quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/BagMerch.png",
//      "empty",
//      "empty" ]
// },
// {
//   id: 8,
//   title: "Golden",
//   price: "3099",
//   image: "../illustrations/Golden.png",
//   type: "print",
//   isBestSeller: false,
//   collection: true,
//   collectionName: "Classic",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/Golden.png",
//      "../illustrations/mockup detail/Golden-m1.png",
//      "../illustrations/mockup detail/Golden-m2.png" ]
// },
// {
//   id: 9,
//   title: "Lady",
//   price: "3099",
//   image: "../illustrations/Lady_BeautyCollection.png",
//   type: "print",
//   isBestSeller: true,
//   collection: true,
//   collectionName: "Beauty",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/Lady_BeautyCollection.png",
//      "../illustrations/mockup detail/Lady_BeautyCollection-m1.png",
//      "../illustrations/mockup detail/Lady_BeautyCollection-m2.png" ]
// },
// {
//   id: 10,
//   title: "Jazmín",
//   price: "3099",
//   image: "../illustrations/JazminBeautyCollection.png",
//   type: "print",
//   isBestSeller: true,
//   collection: true,
//   collectionName: "Beauty",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/JazminBeautyCollection.png",
//      "../illustrations/mockup detail/JazminBeautyCollection-m1.png",
//      "../illustrations/mockup detail/JazminBeautyCollection-m2.png" ]
// },
// {
// id: 11,
// title: "Samantha",
// price: "3099",
// image: "../illustrations/Samantha_BeautyCollection.png",
// type: "print",
// isBestSeller: false,
// collection: true,
// collectionName: "Beauty",
// inStock: true,
// isAdded: false,
// size: [
//   "13x16",
//   "15x15",
//   "25x13"
// ],
// quantity: "1",
// description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
// images: [
//   "../illustrations/Samantha_BeautyCollection.png",
//    "../illustrations/mockup detail/Samantha_BeautyCollection-m1.png",
//    "../illustrations/mockup detail/Samantha_BeautyCollection-m2.png" ]
// },
// {
//   id: 12,
//   title: "Rachel",
//   price: "3099",
//   image: "../illustrations/RachelBeautyCollection.png",
//   type: "print",
//   isBestSeller: false,
//   collection: true,
//   collectionName: "Beauty",
//   inStock: true,
//   isAdded: false,
//   size: [
//     "13x16",
//     "15x15",
//     "25x13"
// ],
//   quantity: "1",
//   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//   images: [
//     "../illustrations/RachelBeautyCollection.png",
//      "../illustrations/mockup detail/RachelBeautyCollection-m1.png",
//      "../illustrations/mockup detail/RachelBeautyCollection-m2.png" ]
//   },
//   {
//     id: 13,
//     title: "Queen's Gambit Stickers",
//     price: "499",
//     image: "../illustrations/GambitStickers-4.png",
//     type: "sticker",
//     isBestSeller: false,
//     collection: false,
//     collectionName: "",
//     inStock: true,
//     isAdded: false,
//     size: [
//       "5x5",
//       "7x5",
//       "15x7"
//   ],
//     quantity: "1",
//     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//     images: [
//       "../illustrations/GambitStickers-4.png",
//        "../illustrations/GambitSticker-1.png",
//        "../illustrations/GambitSticker-3.png" ]
//     },
//     {
//       id: 14,
//       title: "Rhino Minimalist Stamp",
//       price: "499",
//       image: "../illustrations/MinimalistRhinoStamp.png",
//       type: "sticker",
//       isBestSeller: false,
//       collection: true,
//       collectionName: "Rhino",
//       inStock: true,
//       isAdded: false,
//       size: [
//         "5x5",
//         "7x5",
//         "15x7"
//     ],
//       quantity: "1",
//       description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//       images: [
//         "../illustrations/MinimalistRhinoStamp.png",
//          "../illustrations/RhinoStamp1.png",
//          "../illustrations/RhinoStamp2.png" ]
//       },
//       {
//         id: 15,
//         title: "Rhino Minimalist Stamp",
//         price: "499",
//         image: "../illustrations/MaximalistRhinoStamp.png",
//         type: "sticker",
//         isBestSeller: false,
//         collection: true,
//         collectionName: "Rhino",
//         inStock: true,
//         isAdded: false,
//         size: [
//           "5x5",
//           "7x5",
//           "15x7"
//       ],
//         quantity: "1",
//         description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//         images: [
//           "../illustrations/MaximalistRhinoStamp.png",
//            "../illustrations/RhinoStamp1.png",
//            "../illustrations/RhinoStamp2.png" ]
//         },
//         {
//           id: 16,
//           title: "Chilling",
//           price: "2099",
//           image: "../illustrations/Chill.png",
//           type: "print",
//           isBestSeller: true,
//           collection: false,
//           collectionName: "",
//           inStock: false,
//           isAdded: false,
//           size: [
//             "13x16",
//             "15x15",
//             "25x13"
//         ], 
//           quantity: "1",
//           description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//           images: [
//             "../illustrations/Chill.png",
//              "../illustrations/mockup detail/Chill-m1.png",
//              "../illustrations/mockup detail/Chill-m2.png" ]
//           },
//           {
//             id: 17,
//             title: "Sunday",
//             price: "2099",
//             image: "../illustrations/Sunday.png",
//             type: "print",
//             isBestSeller: true,
//             collection: false,
//             collectionName: "",
//             inStock: true,
//             isAdded: false,
//             size: [
//               "13x16",
//               "15x15",
//               "25x13"
//           ],    
//             quantity: "1",
//             description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//             images: [
//               "../illustrations/Sunday.png",
//                "../illustrations/mockup detail/Sunday-m1.png",
//                "../illustrations/mockup detail/Sunday-m2.png" ]
//             },
//             {
//               id: 18,
//               title: "Classy",
//               price: "1799",
//               image: "../illustrations/Classy.png",
//               type: "print",
//               isBestSeller: false,
//               collection: false,
//               collectionName: "",
//               inStock: false,
//               isAdded: false,
//               size: [
//                 "13x16",
//                 "15x15",
//                 "25x13"
//             ],    
//               quantity: "1",
//               description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//               images: [
//                 "../illustrations/Classy.png",
//                  "../illustrations/mockup detail/Classy-m1.png",
//                  "../illustrations/mockup detail/Classy-m2.png" ]
//               },
//               {
//                 id: 19,
//                 title: "Summer",
//                 price: "2099",
//                 image: "../illustrations/Summer.png",
//                 type: "print",
//                 isBestSeller: false,
//                 collection: false,
//                 collectionName: "",
//                 inStock: true,
//                 isAdded: false,
//                 size: [
//                   "13x16",
//                   "15x15",
//                   "25x13"
//               ],    
//                 quantity: "1",
//                 description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                 images: [
//                   "../illustrations/Summer.png",
//                    "../illustrations/mockup detail/Summer-m1.png",
//                    "../illustrations/mockup detail/Summer-m2.png" ]
//                 },
//                 {
//                   id: 20,
//                   title: "Pastel",
//                   price: "1099",
//                   image: "../illustrations/SafariPastel.png",
//                   type: "print",
//                   isBestSeller: false,
//                   collection: false,
//                   collectionName: "",
//                   inStock: true,
//                   isAdded: false,
//                   size: [
//                     "13x16",
//                     "15x15",
//                     "25x13"
//                 ],    
//                   quantity: "1",
//                   description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                   images: [
//                     "../illustrations/SafariPastel.png",
//                      "../illustrations/mockup detail/SafariPastel-m1.png",
//                      "../illustrations/mockup detail/SafariPastel-m2.png" ]
//                   },
//                   {
//                     id: 21,
//                     title: "Michael",
//                     price: "1099",
//                     image: "../illustrations/Michael.png",
//                     type: "print",
//                     isBestSeller: false,
//                     collection: false,
//                     collectionName: "",
//                     inStock: false,
//                     isAdded: false,
//                     size: [
//                       "13x16",
//                       "15x15",
//                       "25x13"
//                   ],    
//                     quantity: "1",
//                     description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                     images: [
//                       "../illustrations/Michael.png",
//                        "../illustrations/mockup detail/Michael-m1.png",
//                        "../illustrations/mockup detail/Michael-m2.png" ]
//                     },
//                     {
//                       id: 21,
//                       title: "Kitty",
//                       price: "3099",
//                       image: "../illustrations/Kitty.png",
//                       type: "print",
//                       isBestSeller: true,
//                       collection: false,
//                       collectionName: "",
//                       inStock: true,
//                       isAdded: false,
//                       size: [
//                         "13x16",
//                         "15x15",
//                         "25x13"
//                     ],    
//                       quantity: "1",
//                       description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                       images: [
//                         "../illustrations/Kitty.png",
//                          "../illustrations/mockup detail/Kitty-m1.png",
//                          "../illustrations/mockup detail/Kitty-m2.png" ]
//                       },
//                       {
//                         id: 22,
//                         title: "Mariana",
//                         price: "3099",
//                         image: "../illustrations/Mariana.png",
//                         type: "print",
//                         isBestSeller: true,
//                         collection: false,
//                         collectionName: "",
//                         inStock: true,
//                         isAdded: false,
//                         size: [
//                           "13x16",
//                           "15x15",
//                           "25x13"
//                       ],    
//                         quantity: "1",
//                         description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                         images: [
//                           "../illustrations/Mariana.png",
//                            "../illustrations/mockup detail/Mariana-m1.png",
//                            "../illustrations/mockup detail/Mariana-m2.png" ]
//                         },
//                         {
//                           id: 23,
//                           title: "Kiki's Delivery Service",
//                           price: "3099",
//                           image: "../illustrations/Kiki.png",
//                           type: "print",
//                           isBestSeller: true,
//                           collection: false,
//                           collectionName: "",
//                           inStock: true,
//                           isAdded: false,
//                           size: [
//                             "13x16",
//                             "15x15",
//                             "25x13"
//                         ],    
//                           quantity: "1",
//                           description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                           images: [
//                             "../illustrations/Kiki.png",
//                              "../illustrations/mockup detail/Kiki-m1.png",
//                              "../illustrations/mockup detail/Kiki-m2.png" ]
//                           },
//                           {
//                             id: 24,
//                             title: "Japan",
//                             price: "3099",
//                             image: "../illustrations/Japan.png",
//                             type: "print",
//                             isBestSeller: true,
//                             collection: false,
//                             collectionName: "",
//                             inStock: true,
//                             isAdded: false,
//                             size: [
//                               "13x16",
//                               "15x15",
//                               "25x13"
//                           ],    
//                             quantity: "1",
//                             description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
//                             images: [
//                               "../illustrations/Japan.png",
//                                "../illustrations/mockup detail/Japan-m1.png",
//                                "../illustrations/mockup detail/Japan-m2.png" ]
//                             },
                            
// ];

products.forEach(async (product) => {
  await setDoc(doc(db, "products", `01289FB374BFA2F${product.id}`), product);
});
