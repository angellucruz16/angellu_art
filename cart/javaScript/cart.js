// ✅♍️ cart js
const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("subtotal");
let total = 0;

const getMyCart = () =>{
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};
console.log(getMyCart());

// ✅♍️ Render prodUct in cart template------------------
const renderMyCart = () => {
  cartSection.innerHTML = "";
  const cart = getMyCart();
  cart.forEach(product => {
      total += parseInt(product.price);
      renderProduct(product);
  });
  totalSection.innerText = `${formatCurrency(total)}`;
}

const renderProduct =  (product) => {
    const newProdct = document.createElement("li");
    newProdct.className = "product-view__template";
    newProdct.innerHTML = `
    <img
    class="product-view__template--img"
    src="${product.image}"
    alt="${product.image}"
  />
  <div class="product-view__template__info__data paragraph">
    <div class="product-view__template__info__title">
      <p class="title-tag">${product.title}</p>
      <p>13x13</p>
    </div>
    <div class="product-view__template__info__price">
      <p class="title-tag">US Price</p>
      <p>${formatCurrency(product.price)}</p>
    </div>
    <div class="product-view__template__info__Quantity">
      <p class="title-tag">Quantity</p>
      <select class= "select" name="quantity" id="quantity">
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
        <option value="6">6</option>
        <option value="7">7</option>
        <option value="8">8</option>
        <option value="9">9</option>
        <option value="10">10</option>
      </select>
    </div>
    <div class="product-view__template__total">
      <p class="title-tag">Total</p>
      <p>${formatCurrency(product.price)}</p>
    </div>
    <button class="button-default" id="button-delete">
      <img src="./img/s2-cart-product-view/delete-button.svg" alt="" />
    </button>
  </div>`;

    const deteleBtn = newProdct.querySelector("#button-delete");
    deteleBtn.addEventListener ("click", (e) => {
      const productsCopy = getMyCart();
      const newProducts = productsCopy.filter((currentProduct) => {
        console.log(product.id, currentProduct.id);
        return currentProduct.id !== product.id;
      });
      console.log(newProducts);
      localStorage.setItem("cart", JSON.stringify(newProducts));
      console.log(getMyCart());
      renderMyCart();
    });

    cartSection.appendChild(newProdct);
};
// 🥓 No funciona me sale NaN


renderMyCart();
console.log (total);