// ✅♍️ product Detail js
        // 🍓 to get the id
const url = window.location.search;
var searchParams = new URLSearchParams(url);
        // 🍓 save id in a variable
const productId = searchParams.get("id");

const product = products.find(product => product.id == productId);
console.log(product);

// ✅♍️ Pov Guide
const povSection = document.querySelector(".pov");
const povTemplate = (item) => {
        const pov = document.createElement ("a");
        pov.classList.add("pov__container");
        pov.classList.add("paragraph");
        pov.innerHTML = `
        <p>artwork</p>
        <img src="./img/s1-header/pov-arrow.svg" alt="pov arrow" />
        <p class="pov__art-name"> ${item.title}</p>
        `;
  povSection.appendChild(pov);
  console.log("hola");
};

povTemplate(product); 


// ✅♍️ Main image logic
const productImage = document.getElementById("productImage");
productImage.setAttribute("src", product.image);


// ✅♍️ Title logic
const productName = document.getElementById("productName");
productName.innerText = product.title;

// ✅♍️ Product Description
const productPrice = document.getElementById("productPrice");
productPrice.innerText = `$ ${product.price}`;

// ✅♍️ Product Description
const productDescription = document.getElementById("productDescription");
productDescription.innerText = product.description;