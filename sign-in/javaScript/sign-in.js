import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {  getAuth, signInWithEmailAndPassword,signInWithPopup, GoogleAuthProvider  } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, getDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js"; 

const firebaseConfig = {
    apiKey: "AIzaSyA2tct77jPrdJUvyyHhIstyIHrSxLdCoqI",
    authDomain: "angelluart.firebaseapp.com",
    projectId: "angelluart",
    storageBucket: "angelluart.appspot.com",
    messagingSenderId: "29378963163",
    appId: "1:29378963163:web:9ef0c9b588839f10c00efe"
  };
    // Initialize Firebase
    const app = initializeApp(firebaseConfig);
    const db = getFirestore(app);
    const auth = getAuth();
    const googleButton = document.getElementById("google");
  
const form = document.querySelector(".form");
const elementContainer = document.querySelector(".element-container");

const getUserInfo = async (userId) => {
    try {
        const docRef = doc(db, "users", userId);
        const docSnap = await getDoc(docRef);
        return docSnap.data();
    } catch (e) {
        console.log(e);
    }
  };

    const newElement = (message) => {
        elementContainer.innerHTML = "";
        const elem = document.createElement("div");
        elem.classList.add("notification");
        elem.innerHTML = `<h1 class="notification">${message}</h1>`;
        elementContainer.appendChild(elem);
    };

    const loginWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        const result = await signInWithPopup(auth, provider);
        const user = result.user;
    
        const userInfo = await getUserInfo(user.uid);
    
        console.log(`Bienvenido ${userInfo.name}`);
    };
    

 
  // all methods from firebase are promises
  const login = async(email, password) => {
    try {
        const { user } = await signInWithEmailAndPassword(auth, email, password);
        const userInfo = await getUserInfo(user.uid);

        if (userInfo.isAdmin) {
            window.location = "../create-product";
        } else {
            window.location = "../gallery";
        }

        console.log(userInfo);

    } catch (e) {
        console.log(e);
        if (e.code === "auth/user-not-found") {
            newElement("Este usuario no existe en nuestra base de datos");
        }
        if (e.code === "auth/wrong-password") {
            newElement("Wrong password");
        }
    }
}


googleButton.addEventListener("click", e =>{
    loginWithGoogle();
}); 

// form.addEventListener("submit",function(event){
form.addEventListener("submit", (event) => {
    // Evitar que se recargue la página
    event.preventDefault();
    //    
    const email = form.email.value;
    const password = form.password.value;

        if (email && password){
            login(email, password);
          } else {
            alert("unfilled fields")
          }
});

