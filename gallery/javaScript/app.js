// ✅♍️ product js

const products = [
{
    id: 1,
    title: "María",
    price: "40,99",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-pZMZb0rC6qI%2FUTHNYH7mi7I%2FAAAAAAAAAPA%2Fm_VYPjtLG8w%2Fs1600%2Fcat.jpeg&f=1&nofb=1",
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
    title: "Claudia",
    price: "40,99",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-pZMZb0rC6qI%2FUTHNYH7mi7I%2FAAAAAAAAAPA%2Fm_VYPjtLG8w%2Fs1600%2Fcat.jpeg&f=1&nofb=1",
    type: "sticker",
    isBestSeller: false,
    collection: false,
    inStock: true,
    isAdded: false,
    size: "11x11",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
    id: 3,
    title: "Jhon",
    price: "40,99",
    image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-pZMZb0rC6qI%2FUTHNYH7mi7I%2FAAAAAAAAAPA%2Fm_VYPjtLG8w%2Fs1600%2Fcat.jpeg&f=1&nofb=1",
    type: "merch",
    isBestSeller: true,
    collection: true,
    inStock: false,
    isAdded: false,
    size: "14x50",
    quantity: "1",
    description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
},
{
  id: 4,
  title: "Jhon",
  price: "40,99",
  image: "https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2F3.bp.blogspot.com%2F-pZMZb0rC6qI%2FUTHNYH7mi7I%2FAAAAAAAAAPA%2Fm_VYPjtLG8w%2Fs1600%2Fcat.jpeg&f=1&nofb=1",
  type: "merch",
  isBestSeller: true,
  collection: true,
  inStock: false,
  isAdded: false,
  size: "14x50",
  quantity: "1",
  description: "Lorem ipsum dolor sit amet consectetur adipiscing elit egestas, mattis vel a dictum elementum risus nisi sem dictumst,"
}
];
// ✅♍️ Get element card from html
const productSection = document.getElementById("products");
// ✅♍️ function to render cards
const productTemplate = (item) => {
    const product = document.createElement("div");
    product.classList.add("card");
    if(item.inStock){
      product.classList.add('out-of-stock');
    }
    product.innerHTML = `
    <header class="card__header">
    <a href="#">
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
      <button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="20"
          height="20"
          fill="currentColor"
          class="bi bi-bag-check"
          viewBox="0 0 16 16"
        >
          <path
            fill-rule="evenodd"
            d="M10.854 8.146a.5.5 0 0 1 0 .708l-3 3a.5.5 0 0 1-.708 0l-1.5-1.5a.5.5 0 0 1 .708-.708L7.5 10.793l2.646-2.647a.5.5 0 0 1 .708 0z"
          />
          <path
            d="M8 1a2.5 2.5 0 0 1 2.5 2.5V4h-5v-.5A2.5 2.5 0 0 1 8 1zm3.5 3v-.5a3.5 3.5 0 1 0-7 0V4H1v10a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2V4h-3.5zM2 5h12v9a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1V5z"
          />
        </svg>
      </button>
    </div>
  </header>
  <section class="card__details">
    <h1 class="title">${item.title}</h1>
    <span class="paragraph">${item.price}</span>
  </section>`;
  productSection.appendChild(product);
}
products.forEach(element => {
  productTemplate(element);
});
// ✅♍️ creating cart button logic and push