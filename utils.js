import { initializeApp } from "firebase/app";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";

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
    const auth = getAuth();
    const registerForm = document.getElementById("register");
    const loginForm = document.getElementById("login");

  // all methods from firebase are promises
    const createUser = async (email, password) => {
      try {
        await createUserWithEmailAndPassword(auth, email, password)   
      } catch (e) {
        console.log(e);
      }
    }
 
    
    registerForm.addEventListener("submit" , e   => {
      e.preventDefault(); 
      const email = registerForm.email.valua;
      const password = registerForm.password.value;
      if (email, password){
        createUser(email, password);
      } else {
        alert("unfilled fields")
      }
      createUser(email, password);
    });





  // Currency format
  const formatCurrency = (price) => {
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "US",
      minimumFractionDigits: 2,
    }).format(price);
   };

