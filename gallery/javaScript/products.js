// ✅♍️ product js
// 🍓 Product array
const products = [
{
    id: 1,
    title: "Juicy",
    price: "50,99",
    image: "../illustrations/Juicy.PNG",
    type: "print",
    isBestSeller: true,
    collection: true,
    collectionName: "Beauty",
    inStock: true,
    isAdded: false,
    size: [
        "13x16",
        "15x15",
        "25x13"
    ],
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,",
     images: [
        "../illustrations/Juicy.PNG",
         "../illustrations/GoldBlueStickers.PNG",
         "../illustrations/Stella.PNG" ]
 },
{
    id: 2,
    title: "Gold & Blue",
    price: "10,99",
    image: "../illustrations/GoldBlueStickers.png",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    collectionName: "",
    inStock: true,
    isAdded: false,
    size: [
      "5x5",
      "7x5",
      "15x7"
  ],
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 3,
    title: "Honey",
    price: "30,99",
    image: "../illustrations/Honey.PNG",
    type: "print",
    isBestSeller: true,
    collection: true,
    collectionName: "Classic",
    inStock: true,
    isAdded: false,
    size: [
      "13x16",
      "15x15",
      "25x13"
  ],
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 4,
  title: "Stella",
  price: "40,99",
  image: "../illustrations/Stella.PNG",
  type: "print",
  isBestSeller: true,
  collection: false,
  collectionName: "",
  inStock: false,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 5,
  title: "Alice Melancholia",
  price: "60,99",
  image: "../illustrations/AliceOne.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Alice",
  inStock: false,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 6,
  title: "Alice Serenity",
  price: "60,99",
  image: "../illustrations/AliceTwo.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Alice",
  inStock: true,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 7,
  title: "Classy Bag",
  price: "60,99",
  image: "../illustrations/BagMerch.png",
  type: "merch",
  isBestSeller: false,
  collection: false,
  collectionName: "",
  inStock: true,
  isAdded: false,
  size: [
    "small",
    "medium",
    "large"
],  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 8,
  title: "Golden",
  price: "30,99",
  image: "../illustrations/Golden.PNG",
  type: "print",
  isBestSeller: false,
  collection: true,
  collectionName: "Classic",
  inStock: true,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 9,
  title: "Lady",
  price: "30,99",
  image: "../illustrations/Lady_BeautyCollection.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 10,
  title: "Jazmín",
  price: "30,99",
  image: "../illustrations/JazminBeautyCollection.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
id: 11,
title: "Samantha",
price: "30,99",
image: "../illustrations/Samantha_BeautyCollection.PNG",
type: "print",
isBestSeller: false,
collection: true,
collectionName: "Beauty",
inStock: true,
isAdded: false,
size: [
  "13x16",
  "15x15",
  "25x13"
],
quantity: "1",
description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 12,
  title: "Rachel",
  price: "30,99",
  image: "../illustrations/RachelBeautyCollection.PNG",
  type: "print",
  isBestSeller: false,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: [
    "13x16",
    "15x15",
    "25x13"
],
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
  },
  {
    id: 13,
    title: "Queen's Gambit Stickers",
    price: "4,99",
    image: "../illustrations/GambitStickers-4.png",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    collectionName: "",
    inStock: true,
    isAdded: false,
    size: [
      "5x5",
      "7x5",
      "15x7"
  ],
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
    },
    {
      id: 14,
      title: "Rhino Minimalist Stamp",
      price: "4,99",
      image: "../illustrations/MinimalistRhinoStamp.png",
      type: "sticker",
      isBestSeller: false,
      collection: true,
      collectionName: "Rhino",
      inStock: true,
      isAdded: false,
      size: [
        "5x5",
        "7x5",
        "15x7"
    ],
      quantity: "1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
      },
      {
        id: 15,
        title: "Rhino Minimalist Stamp",
        price: "4,99",
        image: "../illustrations/MaximalistRhinoStamp.png",
        type: "sticker",
        isBestSeller: false,
        collection: true,
        collectionName: "Rhino",
        inStock: true,
        isAdded: false,
        size: [
          "5x5",
          "7x5",
          "15x7"
      ],
        quantity: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
        },
        {
          id: 16,
          title: "Chilling",
          price: "20,99",
          image: "../illustrations/Chill.PNG",
          type: "print",
          isBestSeller: true,
          collection: false,
          collectionName: "",
          inStock: false,
          isAdded: false,
          size: [
            "13x16",
            "15x15",
            "25x13"
        ], 
          quantity: "1",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
          },
          {
            id: 17,
            title: "Sunday",
            price: "20,99",
            image: "../illustrations/Sunday.PNG",
            type: "print",
            isBestSeller: true,
            collection: false,
            collectionName: "",
            inStock: true,
            isAdded: false,
            size: [
              "13x16",
              "15x15",
              "25x13"
          ],    
            quantity: "1",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
            },
            {
              id: 18,
              title: "Classy",
              price: "17,99",
              image: "../illustrations/Classy.PNG",
              type: "print",
              isBestSeller: false,
              collection: false,
              collectionName: "",
              inStock: false,
              isAdded: false,
              size: [
                "13x16",
                "15x15",
                "25x13"
            ],    
              quantity: "1",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
              },
              {
                id: 19,
                title: "Summer",
                price: "20,99",
                image: "../illustrations/Summer.PNG",
                type: "print",
                isBestSeller: false,
                collection: false,
                collectionName: "",
                inStock: true,
                isAdded: false,
                size: [
                  "13x16",
                  "15x15",
                  "25x13"
              ],    
                quantity: "1",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                },
                {
                  id: 20,
                  title: "Pastel",
                  price: "10,99",
                  image: "../illustrations/SafariPastel.PNG",
                  type: "print",
                  isBestSeller: false,
                  collection: false,
                  collectionName: "",
                  inStock: true,
                  isAdded: false,
                  size: [
                    "13x16",
                    "15x15",
                    "25x13"
                ],    
                  quantity: "1",
                  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                  },
                  {
                    id: 21,
                    title: "Michael",
                    price: "10,99",
                    image: "../illustrations/Michael.PNG",
                    type: "print",
                    isBestSeller: false,
                    collection: false,
                    collectionName: "",
                    inStock: false,
                    isAdded: false,
                    size: [
                      "13x16",
                      "15x15",
                      "25x13"
                  ],    
                    quantity: "1",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                    },
                    {
                      id: 21,
                      title: "Kitty",
                      price: "30,99",
                      image: "../illustrations/Kitty.PNG",
                      type: "print",
                      isBestSeller: true,
                      collection: false,
                      collectionName: "",
                      inStock: true,
                      isAdded: false,
                      size: [
                        "13x16",
                        "15x15",
                        "25x13"
                    ],    
                      quantity: "1",
                      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                      },
                      {
                        id: 22,
                        title: "Mariana",
                        price: "30,99",
                        image: "../illustrations/Mariana.PNG",
                        type: "print",
                        isBestSeller: true,
                        collection: false,
                        collectionName: "",
                        inStock: true,
                        isAdded: false,
                        size: [
                          "13x16",
                          "15x15",
                          "25x13"
                      ],    
                        quantity: "1",
                        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                        },
                        {
                          id: 23,
                          title: "Kiki's Delivery Service",
                          price: "30,99",
                          image: "../illustrations/Kiki.PNG",
                          type: "print",
                          isBestSeller: true,
                          collection: false,
                          collectionName: "",
                          inStock: true,
                          isAdded: false,
                          size: [
                            "13x16",
                            "15x15",
                            "25x13"
                        ],    
                          quantity: "1",
                          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                          },
                          {
                            id: 24,
                            title: "Japan",
                            price: "30,99",
                            image: "../illustrations/Japan.PNG",
                            type: "print",
                            isBestSeller: true,
                            collection: false,
                            collectionName: "",
                            inStock: true,
                            isAdded: false,
                            size: [
                              "13x16",
                              "15x15",
                              "25x13"
                          ],    
                            quantity: "1",
                            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                            },
                            
];