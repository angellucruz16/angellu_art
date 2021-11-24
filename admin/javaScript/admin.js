import { initializeApp } from "https://www.gstatic.com/firebasejs/9.3.0/firebase-app.js";
import {  getAuth, onAuthStateChanged} from "https://www.gstatic.com/firebasejs/9.3.0/firebase-auth.js";

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


const buttonConfirm = document.getElementById("button");

onAuthStateChanged(auth, async (user) => {
    
    if (user) {
        let email = user.email;
        if (email === "angellu.designs@gmail.com"){

            buttonConfirm.innerHTML = `
            <a
                class="paragraph confirm"
                id="confirm-password"
                href="../create/index.html"
            >
            CONFIRM
            </a>
            `;
           
        } else {
            buttonConfirm.innerHTML = `
            <button class="paragraph confirm" type="button" disabled>CONFIRM</button>
            `;
        }
        
    } else {
        buttonConfirm.innerHTML = `
        <form action="">
            <input class="select" type="password" id="password" />
        </form>
        <button class="paragraph confirm" type="button" disabled>CONFIRM</button>
        `;
    }
  });

