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
//     image: "../illustrations/Juicy.PNG",
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
//         "../illustrations/Juicy.PNG",
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
//     image: "../illustrations/Honey.PNG",
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
//       "../illustrations/Honey.PNG",
//        "../illustrations/mockup detail/Honey-m1.png",
//        "../illustrations/mockup detail/Honey-m2.png" ]
// },
// {
//   id: 4,
//   title: "Stella",
//   price: "4099",
//   image: "../illustrations/Stella.PNG",
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
//     "../illustrations/Stella.PNG",
//      "../illustrations/mockup detail/Stella-m1.png",
//      "../illustrations/mockup detail/Stella-m2.png" ]
// },
// {
//   id: 5,
//   title: "Alice Melancholia",
//   price: "6099",
//   image: "../illustrations/AliceOne.PNG",
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
//     "../illustrations/AliceOne.PNG",
//      "../illustrations/mockup detail/AliceOne-m1.png",
//      "../illustrations/mockup detail/AliceOne-m2.png" ]
// },
// {
//   id: 6,
//   title: "Alice Serenity",
//   price: "6099",
//   image: "../illustrations/AliceTwo.PNG",
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
//     "../illustrations/AliceTwo.PNG",
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
//     "../illustrations/BagMerch.PNG",
//      "empty",
//      "empty" ]
// },
// {
//   id: 8,
//   title: "Golden",
//   price: "3099",
//   image: "../illustrations/Golden.PNG",
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
//     "../illustrations/Golden.PNG",
//      "../illustrations/mockup detail/Golden-m1.png",
//      "../illustrations/mockup detail/Golden-m2.png" ]
// },
// {
//   id: 9,
//   title: "Lady",
//   price: "3099",
//   image: "../illustrations/Lady_BeautyCollection.PNG",
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
//     "../illustrations/Lady_BeautyCollection.PNG",
//      "../illustrations/mockup detail/Lady_BeautyCollection-m1.png",
//      "../illustrations/mockup detail/Lady_BeautyCollection-m2.png" ]
// },
// {
//   id: 10,
//   title: "Jazmín",
//   price: "3099",
//   image: "../illustrations/JazminBeautyCollection.PNG",
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
//     "../illustrations/JazminBeautyCollection.PNG",
//      "../illustrations/mockup detail/JazminBeautyCollection-m1.png",
//      "../illustrations/mockup detail/JazminBeautyCollection-m2.png" ]
// },
// {
// id: 11,
// title: "Samantha",
// price: "3099",
// image: "../illustrations/Samantha_BeautyCollection.PNG",
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
//   "../illustrations/Samantha_BeautyCollection.PNG",
//    "../illustrations/mockup detail/Samantha_BeautyCollection-m1.png",
//    "../illustrations/mockup detail/Samantha_BeautyCollection-m2.png" ]
// },
// {
//   id: 12,
//   title: "Rachel",
//   price: "3099",
//   image: "../illustrations/RachelBeautyCollection.PNG",
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
//     "../illustrations/RachelBeautyCollection.PNG",
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
//       "../illustrations/GambitStickers-4.PNG",
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
//         "../illustrations/MinimalistRhinoStamp.PNG",
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
//           "../illustrations/MaximalistRhinoStamp.PNG",
//            "../illustrations/RhinoStamp1.png",
//            "../illustrations/RhinoStamp2.png" ]
//         },
//         {
//           id: 16,
//           title: "Chilling",
//           price: "2099",
//           image: "../illustrations/Chill.PNG",
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
//             "../illustrations/Chill.PNG",
//              "../illustrations/mockup detail/Chill-m1.png",
//              "../illustrations/mockup detail/Chill-m2.png" ]
//           },
//           {
//             id: 17,
//             title: "Sunday",
//             price: "2099",
//             image: "../illustrations/Sunday.PNG",
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
//               "../illustrations/Sunday.PNG",
//                "../illustrations/mockup detail/Sunday-m1.png",
//                "../illustrations/mockup detail/Sunday-m2.png" ]
//             },
//             {
//               id: 18,
//               title: "Classy",
//               price: "1799",
//               image: "../illustrations/Classy.PNG",
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
//                 "../illustrations/Classy.PNG",
//                  "../illustrations/mockup detail/Classy-m1.png",
//                  "../illustrations/mockup detail/Classy-m2.png" ]
//               },
//               {
//                 id: 19,
//                 title: "Summer",
//                 price: "2099",
//                 image: "../illustrations/Summer.PNG",
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
//                   "../illustrations/Summer.PNG",
//                    "../illustrations/mockup detail/Summer-m1.png",
//                    "../illustrations/mockup detail/Summer-m2.png" ]
//                 },
//                 {
//                   id: 20,
//                   title: "Pastel",
//                   price: "1099",
//                   image: "../illustrations/SafariPastel.PNG",
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
//                     "../illustrations/SafariPastel.PNG",
//                      "../illustrations/mockup detail/SafariPastel-m1.png",
//                      "../illustrations/mockup detail/SafariPastel-m2.png" ]
//                   },
//                   {
//                     id: 21,
//                     title: "Michael",
//                     price: "1099",
//                     image: "../illustrations/Michael.PNG",
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
//                       "../illustrations/Michael.PNG",
//                        "../illustrations/mockup detail/Michael-m1.png",
//                        "../illustrations/mockup detail/Michael-m2.png" ]
//                     },
//                     {
//                       id: 21,
//                       title: "Kitty",
//                       price: "3099",
//                       image: "../illustrations/Kitty.PNG",
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
//                         "../illustrations/Kitty.PNG",
//                          "../illustrations/mockup detail/Kitty-m1.png",
//                          "../illustrations/mockup detail/Kitty-m2.png" ]
//                       },
//                       {
//                         id: 22,
//                         title: "Mariana",
//                         price: "3099",
//                         image: "../illustrations/Mariana.PNG",
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
//                           "../illustrations/Mariana.PNG",
//                            "../illustrations/mockup detail/Mariana-m1.png",
//                            "../illustrations/mockup detail/Mariana-m2.png" ]
//                         },
//                         {
//                           id: 23,
//                           title: "Kiki's Delivery Service",
//                           price: "3099",
//                           image: "../illustrations/Kiki.PNG",
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
//                             "../illustrations/Kiki.PNG",
//                              "../illustrations/mockup detail/Kiki-m1.png",
//                              "../illustrations/mockup detail/Kiki-m2.png" ]
//                           },
//                           {
//                             id: 24,
//                             title: "Japan",
//                             price: "3099",
//                             image: "../illustrations/Japan.PNG",
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
//                               "../illustrations/Japan.PNG",
//                                "../illustrations/mockup detail/Japan-m1.png",
//                                "../illustrations/mockup detail/Japan-m2.png" ]
//                             },
                            
// ];

products.forEach(async (product) => {
  await setDoc(doc(db, "products", `01289FB374BFA2F${product.id}`), product);
});
