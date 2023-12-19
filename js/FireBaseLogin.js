import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.1/firebase-app.js";
import { getAuth, createUserWithEmailAndPassword, signInWithRedirect, signInWithEmailAndPassword, onAuthStateChanged, GoogleAuthProvider, signInWithPopup } from  "https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCiXlz3jeuaVms1irD3rKlwVNE_DwnO14o",
  authDomain: "pinguinstudiozweb.firebaseapp.com",
  projectId: "pinguinstudiozweb",
  storageBucket: "pinguinstudiozweb.appspot.com",
  messagingSenderId: "197115887577",
  appId: "1:197115887577:web:fa4c00a8bc48f63c6123c8"
};
const app = initializeApp(firebaseConfig);

const auth = getAuth();

document.getElementById('SignUp').addEventListener("click", (e) => { 
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
    console.log(email,password)
    createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed up 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('Email').value = errorMessage;
    // ..
});
})

document.getElementById('Login').addEventListener("click", (e) => { 
    const email = document.getElementById('Email').value;
    const password = document.getElementById('Password').value;
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorCode = error.code;
    const errorMessage = error.message;
    document.getElementById('Email').value = errorMessage;
  });

});