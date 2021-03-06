// ✅♍️ product js
 
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, collection, getDocs, doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
// 🍓 Using localstorage to get cart products--------------------------------------------
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// 🍓  get products from firebase
let products = [];
let userLogged = null;
let cart = [];


const getAllProducts = async() => {
    const collectionRef = collection(db, "products");
    const { docs } = await getDocs(collectionRef);

    const firebaseProducts = docs.map((doc) => {
        return {
            ...doc.data(),
            id: doc.id,
        }
    })

    // Recorro cada uno de los 4 productos que tengo en mi arreglo
    firebaseProducts.forEach(product => {
        // Llamo la funcion productTemplate para cada product.
        productTemplate(product);
    });

    products = firebaseProducts;
};

//all get my  cart logic
const getMyCart = () =>{
  const cart = localStorage.getItem("cart");
  return cart ? JSON.parse(cart) : [];
};

const getFirebaseCart = async (userId) => {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    return docSnap.exists() ? docSnap.data() : {
        products: []
    }
};

const addProductsToCart = async (products) => {
    await setDoc(doc(db, "cart", userLogged.uid), {
        products
    });
};

// 🍓 Get element card from html--------------------------------------------
const productSection = document.getElementById("products");
// 🍓 function to render cards--------------------------------------------
const productTemplate = (item) => {
    const product = document.createElement("a");
    product.classList.add("card");
    product.setAttribute("href", `../product-detail/index.html?id=${item.id}`);

    if(!item.inStock){
      product.classList.add('out-of-stock');
    } 
    if(item.collection){
      product.classList.add('collection');
    }

    const isAdded = cart.some(product => product.id === item.id);
    let buttonHtml;

    if (isAdded) {
      buttonHtml = `<button class="card__cart-btn">
      <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
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

    const thumbnail = "https://lh3.googleusercontent.com/proxy/4-9vwlusvTGHW6fSzDLBcOEmWhInH5HefCQ2w1yBGYWEhrXPkZ_VVSp2XxWz1L50tDlL85Bxh9uQ98R2GQf6P1em4caM-2gQUcoyiBGNVWpOxyLmzlMMmDgoKYTAEkM";

    // ✅♍️ Change HTML--------------------------------------------
    product.innerHTML = `
    <header class="card__header">
      <img
        src="${item.image != '' ? item.image : thumbnail}"
        alt="${item.image}"
      />
      <div class="card__out-stock">
        <span class="title">Out of Stock</span>
      </div>
    <div class="card__product-action">
      <div class="card__product-collection">
        <span class="paragraph">collection</span>
      </div>
      ${buttonHtml}
    </div>
  </header>
  <section class="card__details">
    <h1 class="title">${item.title}</h1>
    <span class="paragraph">${formatCurrency(item.price)}</span>
  </section>`;

  productSection.appendChild(product);

  // ✅♍️ Button Logic--------------------------------------------
  const productCart = product.querySelector(".card__cart-btn");
  productCart.addEventListener("click", e =>{
    e.preventDefault();
    e.stopImmediatePropagation();
    const productAdded = {
      id: item.id,
      image: item.image,
      title: item.title,
      price: item.price,
      quantity: parseInt(item.quantity),
    }
    cart.push(productAdded);
    
    if (userLogged) {
      addProductsToCart(cart);
  }

    localStorage.setItem("cart",JSON.stringify(cart));

    productCart.classList.toggle("card__product-action--added");
    
    if (isAdded) {
      productCart.innerHTML =`<svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
    </svg>`;
    } else { 
      productCart.innerHTML = ` <svg xmlns="http://www.w3.org/2000/svg" width="25" height="25" fill="currentColor" class="bi bi-bag-check-fill" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M10.5 3.5a2.5 2.5 0 0 0-5 0V4h5v-.5zm1 0V4H15v10a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V4h3.5v-.5a3.5 3.5 0 1 1 7 0zm-.646 5.354a.5.5 0 0 0-.708-.708L7.5 10.793 6.354 9.646a.5.5 0 1 0-.708.708l1.5 1.5a.5.5 0 0 0 .708 0l3-3z"/>
      </svg>`;
    }
  });
}

// ✅♍️ Filter logic here--------------------------------------------
const filterByCategory = document.getElementById("categories");
const loadProducts = () => {
  // 🍓 Pickup categorie selec value
  const category = filterByCategory.value || "";
  // const order = orderBySelect.value;

  // 🍓 Clean container of products
  productSection.innerHTML = "";

  let filteredProductByCategory;

  if (category != ""){
    filteredProductByCategory = products.filter((product) => product.type === category);
  } else {
    filteredProductByCategory = products;
  }

  // if (order === "Higher to lower"

  filteredProductByCategory.forEach(product => {
    productTemplate(product);
  });
}
//🔸 para los select se usa change
filterByCategory.addEventListener("change", e =>{
  loadProducts();
});


products.forEach(product => {
  productTemplate(product);
});
// 🍓 "recorro" the products on my array products and call the function to render them


onAuthStateChanged(auth, async (user) => {
  if (user) {
      const result = await getFirebaseCart(user.uid);
      cart = result.products;
      userLogged = user;
  } else {
      cart = getMyCart();
  }

  getAllProducts();
});

