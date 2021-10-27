// ✅♍️ product js

const artWorks = [
{
    title: "title",
    price: "40,99",
    image: "../img/s3-products/s3-img.png",
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
    title: "title",
    price: "40,99",
    image: "../img/s3-products/s3-img.png",
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
    title: "title",
    price: "40,99",
    image: "../img/s3-products/s3-img.png",
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
//   🉐no recuerdo como era la relacion entre estos dos elementos
const productSection = document.getElementById("products");



// ✅♍️ function that shows the product on screen

const productTemplate = (item) => {
    // 1. Creating our element to edit html
    const product = document.createElement("a");
    product.className ="product";
    product.innerHTML = `
    <img
    src="${item.image}"
    alt="${item.image}"
    class="product__img"
  />
  <div class="product__description">
    <h2 class="product__available--sold-out">Sold out</h2>
    <span class="product__tag paragraph" id="description"
      >collection</span
    >
    <h3 class="product__title title" id="description">${item.title}</h3>
    <button>
      <i
        class="product__cart-btn bx-border bx bx-cart bx-burst-hover"
        id="description"
        style="color: #f2b30f"
      ></i>
    </button>
  </div>
  `;
//   🉐no recuerdo como era la relacion entre estos dos elementos
  productSection.appendChild(product);

}