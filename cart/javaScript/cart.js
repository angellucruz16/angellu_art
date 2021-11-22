import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

// ✅♍️ cart js
const cartSection = document.getElementById("cart");
const totalSection = document.getElementById("subtotal");
// const checkoutForm = document.getElementById("checkout");

let total = 0;
let cart = [];
let userLogged = {};

const getMyCart = () =>{
    const cart = localStorage.getItem("cart");
    return cart ? JSON.parse(cart) : [];
};
console.log(getMyCart());

const removeProduct = (productId) => {
  const cart = getMyCart();
  const newCart = cart.filter(product => product.id !== productId);
  
  // slice approach
  localStorage.setItem("cart", JSON.stringify(newCart));

  renderMyCart();

};

const getFirebaseCart = async (userId) => {
  const docRef = doc(db, "cart", userId);
  const docSnap = await getDoc(docRef);
  return docSnap.exists() ? docSnap.data() : {
      products: []
  }
};

const getUserInfo = async (userId) => {
  try {
      const docRef = doc(db, "users", userId);
      const docSnap = await getDoc(docRef);
      return docSnap.data();
  } catch (e) {
      console.log(e);
  }
}

// ✅♍️ Render prodUct in cart template------------------
const renderMyCart = (cart) => {
  cartSection.innerHTML = "";
  total = 0;

  cart.forEach(product => {
      total += parseInt(product.price);
      renderProduct(product);
  });

  totalSection.innerText = `${formatCurrency(total)}`;
};


const renderProduct =  (product) => {
    const newProduct = document.createElement("li");
    newProduct.className = "product-view__template";
    newProduct.innerHTML = `
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
      
    //   const newProducts = productsCopy.filter((currentProduct) => {
    //     console.log(product.id, currentProduct.id);
    //     return currentProduct.id !== product.id;
    //   });
    //   console.log(newProducts);
    //   localStorage.setItem("cart", JSON.stringify(newProducts));
    //   console.log(getMyCart());
    //   renderMyCart();
    // });

    cartSection.appendChild(newProduct);

    newProduct.addEventListener("click", e => {
      if (e.target.tagName === "BUTTON") {
          removeProduct(product.id);
      }
  });
};

const deleteCart = async () => {
  try {
      await deleteDoc(doc(db, "cart", userLogged.uid));
      renderMyCart([]);
      console.log("Carrito de compras actualizado...");
  } catch(e) {
      console.log(e);
  }
};


console.log (total);

// function to create order


// checkoutForm.addEventListener("submit", e => {
//   e.preventDefault();

//   const name = checkoutForm.name.value;
//   const number = checkoutForm.number.value;
//   const code = checkoutForm.code.value;
//   const email = checkoutForm.email.value;
//   const address = checkoutForm.address.value;


//   const userFields = {
//       name,
//       number,
//       code,
//       email,
//       address,
//   };

//   if (cart.length) {
//       if (name && number && code && email && address) {
//           createOrder(userFields);
//       } else {
//           alert("Completa todos los campos...");
//       }
//   } else {
//       alert("Selecciona algunos productos...")
//   }
// });


onAuthStateChanged(auth, async (user) => {
  if (user) {
      const result = await getFirebaseCart(user.uid);
      cart = result.products;
      renderMyCart(cart);

      const userInfo = await getUserInfo(user.uid);
      userLogged = {
          ...user,
          ...userInfo
      };
      console.log(userLogged);
  } else {
      cart = getMyCart();
      renderMyCart(cart);
  }
});

// 😵 so i can use this function in other js file 
export{
  deleteCart,
}