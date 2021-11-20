const firebaseConfig = {
  apiKey: "AIzaSyA2tct77jPrdJUvyyHhIstyIHrSxLdCoqI",
  authDomain: "angelluart.firebaseapp.com",
  projectId: "angelluart",
  storageBucket: "angelluart.appspot.com",
  messagingSenderId: "29378963163",
  appId: "1:29378963163:web:9ef0c9b588839f10c00efe"
};


// Currency format
const formatCurrency = (price) => {
    return new Intl.NumberFormat("en-US",{
      style: "currency",
      currency: "USD",
      minimumFractionDigits: 2,
    }).format(price);
   };

