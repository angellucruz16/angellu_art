// import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
// import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
// import { getFirestore, doc, getDoc, addDoc, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

// const app = initializeApp(firebaseConfig);
// const auth = getAuth();
// const db = getFirestore(app);



// import {
//     deleteCart,
// } from "../cart/javaScript/cart.js";

// const checkoutForm = document.getElementById("checkout");
// const autocompleteFields = document.getElementById("autofill");

// const createOrder = async (userFields) => {
//     console.log(userFields, cart, total);
//     try {
//         const order = await addDoc(collection(db, "orders"), {
//             ...userFields, 
//             products: cart,
//             total,
//             email: userLogged.email,
//             status: "pending",
//         });
//         alert(`Muchas gracias, tu pedido con ID: ${order.id} ha quedado registrado.`);
  
//         deleteCart();
//     } catch (e) {
//         console.log(e)
//     }
//   };
  
//   autocompleteFields.addEventListener("click", e => {
//     checkoutForm.name.value = userLogged.name;
//     checkoutForm.city.value = userLogged.city;
//     checkoutForm.address.value = userLogged.address;
// });


// checkoutForm.addEventListener("submit", e => {
//     e.preventDefault();
  
//     const name = checkoutForm.name.value;
//     const number = checkoutForm.number.value;
//     const code = checkoutForm.code.value;
//     const email = checkoutForm.email.value;
//     const address = checkoutForm.address.value;
  
  
//     const userFields = {
//         name,
//         number,
//         code,
//         email,
//         address,
//     };
  
//     if (cart.length) {
//         if (name && number && code && email && address) {
//             createOrder(userFields);
//         } else {
//             alert("Please complet all fields...");
//         }
//     } else {
//         alert("Add products in your cart")
//     }
//   });

