import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import { getAuth, onAuthStateChanged } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc, addDoc, collection, deleteDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const db = getFirestore(app);

let cart = [];
let total = 0;


const checkoutForm = document.getElementById("checkout");

const getFirebaseCart = async (userId) => {
    const docRef = doc(db, "cart", userId);
    const docSnap = await getDoc(docRef);
    console.log(docSnap);
    return docSnap.exists() ? docSnap.data() : {
        products: []
    }
};

const deleteCart = async () => {
    try {
        await deleteDoc(doc(db, "cart", userLogged.uid));
        renderMyCart([]);
        console.log("updated cart...");
    } catch(e) {
        console.log(e);
    }
  };

const createOrder = async (userFields) => {
    try {
        const order = await addDoc(collection(db, "orders"), {
            ...userFields, 
            products: cart,
            total,
            email: userLogged.email,
            status: "pending",
        });
        alert(`Muchas gracias, tu pedido con ID: ${order.id} ha quedado registrado.`);
  
        deleteCart();
    } catch (e) {
        console.log(e)
    }
  };


checkoutForm.addEventListener("submit", e => {
    e.preventDefault();
  
    const name = checkoutForm.name.value;
    const number = checkoutForm.number.value;
    const code = checkoutForm.code.value;
    const email = checkoutForm.email.value;
    const address = checkoutForm.address.value;
  
  
    const userFields = {
        name,
        number,
        code,
        email,
        address,
        total,
    };
  
    if (cart.length) {
        if (name && number && code && email && address) {
            createOrder(userFields);
        } else {
            alert("Please complet all fields...");
        }
    } else {
        alert("Add products in your cart")
    }
  });

  onAuthStateChanged(auth, async (user) => {
    if (user) {
        const result = await getFirebaseCart(user.uid);
        cart = result.products;

        cart.forEach(product => {
            total += parseInt(product.price);
        });

        console.log(total); 
        price();
    }
  });

  const price  =  (cart) => {
      const totalPrice = document.getElementById("total");
      totalPrice.innerHTML = `
      <p class="total-check">Total:</p>
      <p>${formatCurrency(total)}</p>
      `;
  }
console.log(total);
