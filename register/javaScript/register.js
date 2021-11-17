import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {  getAuth, createUserWithEmailAndPassword } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";
import { getFirestore, doc, setDoc } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-firestore.js";

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
  
const form = document.querySelector(".form");
const elementContainer = document.querySelector(".element-container");
let user = "";

  // all methods from firebase are promises
  const createUser = async (email, password, userFields) => {
    try {
      const { user } = await createUserWithEmailAndPassword(auth, email, password);
      const userId = user.uid;

      await setDoc(doc(db, "users", userId), userFields);

    } catch (e) {
      console.log(e);
    }
  }

// function newElement (name)  {
const newElement = (name) => {
    elementContainer.innerHTML = "";
    const elem = document.createElement("div");
    elem.classList.add("notification");
    elem.innerHTML = `<h1 class="notification">Pronto nos pondremos en contacto contigo, ${name} gracias</h1>`;
    //  elem.innerText = "Pronto nos pondremos en contacto contigo, " + name + " gracias!";
    elementContainer.appendChild(elem);
};

// form.addEventListener("submit",function(event){
form.addEventListener("submit", (event) => {
    // Evitar que se recargue la página
    event.preventDefault();
    //    
    const name = form.userName.value;
    const city= form.city.value;
    const email = form.email.value;
    const password = form.password.value;
    const address = form.address.value;


    if (name !== "" && city !== "" && email !== "" && password !== "" && address !== "") {
        
        const userObj = {
            name,
            city,
            email,
            password,
            address,
        }

        if (email && password){
            createUser(email, password, {
                city,
                email,
                address,
                isAdmin: false,
            });
            newElement(userObj.name);
          } 


    } else {
        alert("Unfilled fields please complete");
    }
});

