// ✅♍️ product js

const products = [
{
    id: 1,
    title: "title",
    price: "40,99",
    image: "./img/s3-products/s3-img.png",
    type: "print",
    isBestSeller: true,
    collection: true,
    inStock: true,
    isAdded: false,
    size: "13x16",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 2,
    title: "title",
    price: "40,99",
    image: "./img/s3-products/s3-img.png",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    inStock: true,
    isAdded: false,
    size: "13x16",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 3,
    title: "title",
    price: "40,99",
    image: "./img/s3-products/s3-img.png",
    type: "merch",
    isBestSeller: true,
    collection: true,
    inStock: false,
    isAdded: false,
    size: "13x16",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
}
];
const cart = [];

//   🉐no recuerdo como era la relacion entre estos dos elementos
const productSection = document.getElementById("product");



// ✅♍️ function that shows the product on screen

const productTemplate = (item) => {
    // 1. Creating our element to edit html
    const product = document.createElement("a");
    product.className = "product";

    product.setAttribute("href", `./product.html?id=${item.id}`);
  
    let tagCollection;
    let tagStock;

    if(item.collection) {
      tagCollection = `<span class="product__tag paragraph" id="description"
      >collection</span>`; 
    } else {
      tagCollection = ``;
    }

    if(item.inStock) {
      tagStock = `<h2 class="product__available--sold-out">Sold out</h2>`;
    } else {
      tagStock = ``;
    }

    product.innerHTML = `
    <img
    src="${item.image}"
    alt="${item.image}"
    class="product__img"
  />
  <div class="product__description">
    ${tagStock}
    ${tagCollection}
    <h3 class="product__title title" id="description">${item.title}</h3>
    <button class="product__cart-btn" id="description">
    <img src="./img/s3-products/s3-bag.svg" alt="bag">
    </button>
  </div>
  `;
//   🉐no recuerdo como era la relacion entre estos dos elementos
  productSection.appendChild(product);

// ✅♍️ creating cart button logic and push
  const productCart = product.querySelector (".product__cart-btn");
  productCart.addEventListener("click", e => {
    e.preventDefault;
    const productAdded = {
      id: item.id,
      name: item.name,
      price: item.price,
      quantity: item.quantity,
    }
    cart.push(productAdded);
  });
};

// ✅♍️ go over our array and create foreach

products.forEach(product => {
    productTemplate(product);
});