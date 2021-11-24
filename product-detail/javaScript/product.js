// ✅♍️ product Detail js
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const productSection = document.getElementById("product");
const spinner = document.getElementById("spinner");


const getProduct = async () => {
    const url = window.location.search;
    const searchParams = new URLSearchParams(url);
    const productId = searchParams.get("id");
        
    const docRef = doc(db, "products", productId);
    const docSnap = await getDoc(docRef);
    const data = docSnap.data();
        
    productSection.classList.add("loaded");
    spinner.classList.add("loaded");
        
    loadProductInfo(data);
}

const createSelectSize = (product) => {

    sizes.innerHTML = `
    <option value="${product.size[0]}">${product.size[0]}</option>
    <option value="${product.size[1]}">${product.size[1]}</option>
    <option value="${product.size[2]}">${product.size[2]}</option>
    `;
   
};

const createGallery = (product) => {

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



const loadProductInfo = (product) => {

    // ✅♍️ Main image logic
    const productImage = document.getElementById("productImage");
    productImage.setAttribute("src", product.image);


    // ✅♍️ Title logic
    const productName = document.getElementById("productName");
    productName.innerText = product.title;

    // ✅♍️ Product Description
    const productPrice = document.getElementById("productPrice");
    productPrice.innerText = `${formatCurrency(product.price)}`;

    // ✅♍️ Product Description
    const productDescription = document.getElementById("productDescription");
    productDescription.innerText = product.description;

    if (product.images){
        createGallery(product);
    };

    createSelectSize(product);

    povTemplate(product); 


}

// ✅♍️ Images select Logic

const gallery = document.getElementById("gallerySelect");


// ✅♍️ Size Select Logic
const sizes = document.getElementById("sizes");


// ✅♍️ button Logic
const productCart = product.querySelector(".product__add-to-cart-btn");
productCart.addEventListener("click", e =>{
        e.prevent
});

getProduct();