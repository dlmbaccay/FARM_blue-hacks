// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { getAuth, signOut } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD6jkONua-4QwWcuvdw7hntg7yzivZMQb8",
  authDomain: "auth-b4150.firebaseapp.com",
  projectId: "auth-b4150",
  storageBucket: "auth-b4150.appspot.com",
  messagingSenderId: "809358815378",
  appId: "1:809358815378:web:daa66522217e4761bf764b",
  measurementId: "G-TDRG898YP3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);


let logout = document.getElementById('logout');

logout.addEventListener('click', () => {
    signOut(auth).then(() => {
        // Sign-out successful.
        alert("Sign Out Successful");
        window.location.href = "index.html";
    }).catch((error) => {
        // An error happened.
        alert("Sign Out Failed");
    });
});