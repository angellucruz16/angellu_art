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

console.log(product.images);

// ✅♍️ Images select Logic
const gallery = document.getElementById("gallerySelect");
const createGallery = () => {

        gallerySelect.innerHTML = `<img src="${product.image}">`;
        if(product.images[1] === "empty" && product.images[2] === "empty"){
                gallerySelect.innerHTML = `
                <img src="${product.images[0]}" alt="${product.images[0]}">
                `;
        } else {
                gallerySelect.innerHTML = `
                <img src="${product.images[0]}" alt="${product.images[0]}">
                <img src="${product.images[1]}" alt="${product.images[1]}">
                <img src="${product.images[2]}" alt="${product.images[2]}">
                `;
        }
        //   gallerySelect.appendChild(gallery);

          // 🍓 selected image logic & click
          const productGalleryImages = document.querySelector(".product__images-preview > .product__select-img-container");
        
          productGalleryImages.addEventListener("click", e => {
                if (e.target.tagName === "IMG"){
                        const imageSource = e.target.currentSrc;
                        productImage.setAttribute("src", imageSource);
                };
          });
        };

        if (product.images){
                createGallery();
        };

// ✅♍️ Size Select Logic
const sizes = document.getElementById("sizes");
const createSelectSize = () => {

        sizes.innerHTML = `
        <option value="${product.size[0]}">${product.size[0]}</option>
        <option value="${product.size[1]}">${product.size[1]}</option>
        <option value="${product.size[2]}">${product.size[2]}</option>
        `;
       
};

// ✅♍️ button Logic
const productCart = product.querySelector(".product__add-to-cart-btn");
productCart.addEventListener("click", e =>{
        console.log("click");
        e.prevent
});
createSelectSize();