// ✅♍️ product js
// 🍓 Product array
const products = [
{
    id: 1,
    title: "Juicy",
    price: "50,99",
    image: "./img/s3-products/illustrations/Juicy.PNG",
    type: "print",
    isBestSeller: true,
    collection: true,
    collectionName: "Beauty",
    inStock: true,
    isAdded: false,
    size: "13x16",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 2,
    title: "Gold & Blue",
    price: "10,99",
    image: "./img/s3-products/illustrations/GoldBlueStickers.PNG",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    collectionName: "",
    inStock: true,
    isAdded: false,
    size: "11x11",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 3,
    title: "Honey",
    price: "30,99",
    image: "./img/s3-products/illustrations/Honey.PNG",
    type: "print",
    isBestSeller: true,
    collection: true,
    collectionName: "Classic",
    inStock: true,
    isAdded: false,
    size: "14x50",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 4,
  title: "Stella",
  price: "40,99",
  image: "./img/s3-products/illustrations/Stella.PNG",
  type: "print",
  isBestSeller: true,
  collection: false,
  collectionName: "",
  inStock: false,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 5,
  title: "Alice Melancholia",
  price: "60,99",
  image: "./img/s3-products/illustrations/AliceOne.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Alice",
  inStock: false,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 6,
  title: "Alice Serenity",
  price: "60,99",
  image: "./img/s3-products/illustrations/AliceTwo.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Alice",
  inStock: true,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 7,
  title: "Classy Bag",
  price: "60,99",
  image: "./img/s3-products/illustrations/BagMerch.png",
  type: "merch",
  isBestSeller: false,
  collection: false,
  collectionName: "",
  inStock: true,
  isAdded: false,
  size: "large",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 8,
  title: "Golden",
  price: "30,99",
  image: "./img/s3-products/illustrations/Golden.PNG",
  type: "print",
  isBestSeller: false,
  collection: true,
  collectionName: "Classic",
  inStock: true,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 9,
  title: "Lady",
  price: "30,99",
  image: "./img/s3-products/illustrations/Lady_BeautyCollection.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 10,
  title: "Jazmín",
  price: "30,99",
  image: "./img/s3-products/illustrations/JazminBeautyCollection.PNG",
  type: "print",
  isBestSeller: true,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
id: 11,
title: "Samantha",
price: "30,99",
image: "./img/s3-products/illustrations/Samantha_BeautyCollection.PNG",
type: "print",
isBestSeller: false,
collection: true,
collectionName: "Beauty",
inStock: true,
isAdded: false,
size: "14x50",
quantity: "1",
description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 12,
  title: "Rachel",
  price: "30,99",
  image: "./img/s3-products/illustrations/RachelBeautyCollection.PNG",
  type: "print",
  isBestSeller: false,
  collection: true,
  collectionName: "Beauty",
  inStock: true,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
  },
  {
    id: 13,
    title: "Queen's Gambit Stickers",
    price: "4,99",
    image: "./img/s3-products/illustrations/GambitStickers-4.png",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    collectionName: "",
    inStock: true,
    isAdded: false,
    size: "14x50",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
    },
    {
      id: 14,
      title: "Rhino Minimalist Stamp",
      price: "4,99",
      image: "./img/s3-products/illustrations/MinimalistRhinoStamp.png",
      type: "sticker",
      isBestSeller: false,
      collection: true,
      collectionName: "Rhino",
      inStock: true,
      isAdded: false,
      size: "14x50",
      quantity: "1",
      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
      },
      {
        id: 15,
        title: "Rhino Minimalist Stamp",
        price: "4,99",
        image: "./img/s3-products/illustrations/MaximalistRhinoStamp.png",
        type: "sticker",
        isBestSeller: false,
        collection: true,
        collectionName: "Rhino",
        inStock: true,
        isAdded: false,
        size: "14x50",
        quantity: "1",
        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
        },
        {
          id: 16,
          title: "Chilling",
          price: "20,99",
          image: "./img/s3-products/illustrations/Chill.PNG",
          type: "print",
          isBestSeller: true,
          collection: false,
          collectionName: "",
          inStock: false,
          isAdded: false,
          size: "14x50",
          quantity: "1",
          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
          },
          {
            id: 17,
            title: "Sunday",
            price: "20,99",
            image: "./img/s3-products/illustrations/Sunday.PNG",
            type: "print",
            isBestSeller: true,
            collection: false,
            collectionName: "",
            inStock: true,
            isAdded: false,
            size: "14x50",
            quantity: "1",
            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
            },
            {
              id: 18,
              title: "Classy",
              price: "17,99",
              image: "./img/s3-products/illustrations/Classy.PNG",
              type: "print",
              isBestSeller: false,
              collection: false,
              collectionName: "",
              inStock: false,
              isAdded: false,
              size: "14x50",
              quantity: "1",
              description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
              },
              {
                id: 19,
                title: "Summer",
                price: "20,99",
                image: "./img/s3-products/illustrations/Summer.PNG",
                type: "print",
                isBestSeller: false,
                collection: false,
                collectionName: "",
                inStock: true,
                isAdded: false,
                size: "14x50",
                quantity: "1",
                description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                },
                {
                  id: 20,
                  title: "Pastel",
                  price: "10,99",
                  image: "./img/s3-products/illustrations/SafariPastel.PNG",
                  type: "print",
                  isBestSeller: false,
                  collection: false,
                  collectionName: "",
                  inStock: true,
                  isAdded: false,
                  size: "14x50",
                  quantity: "1",
                  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                  },
                  {
                    id: 21,
                    title: "Michael",
                    price: "10,99",
                    image: "./img/s3-products/illustrations/Michael.PNG",
                    type: "print",
                    isBestSeller: false,
                    collection: false,
                    collectionName: "",
                    inStock: false,
                    isAdded: false,
                    size: "14x50",
                    quantity: "1",
                    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                    },
                    {
                      id: 21,
                      title: "Kitty",
                      price: "30,99",
                      image: "./img/s3-products/illustrations/Kitty.PNG",
                      type: "print",
                      isBestSeller: true,
                      collection: false,
                      collectionName: "",
                      inStock: true,
                      isAdded: false,
                      size: "14x50",
                      quantity: "1",
                      description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                      },
                      {
                        id: 22,
                        title: "Mariana",
                        price: "30,99",
                        image: "./img/s3-products/illustrations/Mariana.PNG",
                        type: "print",
                        isBestSeller: true,
                        collection: false,
                        collectionName: "",
                        inStock: true,
                        isAdded: false,
                        size: "14x50",
                        quantity: "1",
                        description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                        },
                        {
                          id: 23,
                          title: "Kiki's Delivery Service",
                          price: "30,99",
                          image: "./img/s3-products/illustrations/Kiki.PNG",
                          type: "print",
                          isBestSeller: true,
                          collection: false,
                          collectionName: "",
                          inStock: true,
                          isAdded: false,
                          size: "14x50",
                          quantity: "1",
                          description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                          },
                          {
                            id: 24,
                            title: "Japan",
                            price: "30,99",
                            image: "./img/s3-products/illustrations/Japan.PNG",
                            type: "print",
                            isBestSeller: true,
                            collection: false,
                            collectionName: "",
                            inStock: true,
                            isAdded: false,
                            size: "14x50",
                            quantity: "1",
                            description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
                            },
];
// 🍓 Array of cart added products
const cart = [];
// 🍓 Get element card from html
const productSection = document.getElementById("products");
// 🍓 function to render cards
const productTemplate = (item) => {
    const product = document.createElement("div");
    product.classList.add("card");
    product.setAttribute("href", `./product.html?id=${item.id}`);

    if(!item.inStock){
      product.classList.add('out-of-stock');
    } 
    if(item.collection){
      product.classList.add('collection');
    }

    const isAdded = cart.some(product => product.id === item.id);
    let buttonHtml;

    if (isAdded) {
      buttonHtml = `<button class="card__cart-btn" disabled>
      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
</svg>
</button>`
    } else {
      buttonHtml = ` <button class="card__cart-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="#ffff" class="bi bi-bag-check" viewBox="0 0 16 16">
  <path fill-rule="evenodd" d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"/>
  <path d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"/>
</svg>
    </button>`
    }
    // ✅♍️ Change HTML
    product.innerHTML = `
    <header class="card__header">
    <a href="">
      <img
        src="${item.image}"
        alt="${item.image}"
      />
      <div class="card__out-stock">
        <span class="title">Out of Stock</span>
      </div>
    </a>
    <div class="card__product-action">
      <div class="card__product-collection">
        <span class="paragraph">collection</span>
      </div>
      ${buttonHtml}
    </div>
  </header>
  <section class="card__details">
    <h1 class="title">${item.title}</h1>
    <span class="paragraph">${item.price}</span>
  </section>`;
  productSection.appendChild(product);

  // ✅♍️ Button Logic
  const productCart = product.querySelector(".card__cart-btn");
  productCart.addEventListener("click", e =>{
    e.preventDefault;
    const productAdded = {
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: item.quantity,
    }
    cart.push(productAdded);
    productCart.setAttribute("disabled", true);
  });
}

// ✅♍️ Filter logic here
const filterByCategory = document.getElementById("categories");
//🔸 para los select se usa change
filterByCategory.addEventListener("change", e =>{
  const category = filterByCategory.value;
  
  // 🍓 Clean container of products
  
  let filteredProductByCategory;
  
  productSection.innerHTML = "";
  
  if (category != ""){
    filteredProductByCategory = products.filter((product) => product.type === category);
  } else {
    filteredProductByCategory = products;
  }
    
    filteredProductByCategory.forEach((product) => {
      productTemplate(product);
    });

    // 🍓 "recorro" the products on my array products and call the function to render them
    products.forEach(product => {
      productTemplate(product);
    });
  
  console.log(filteredProductByCategory);

});