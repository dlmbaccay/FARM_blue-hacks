// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-app.js";
import { 
        getAuth,
        createUserWithEmailAndPassword,
        signInWithEmailAndPassword,
        signOut,
} from "https://www.gstatic.com/firebasejs/9.21.0/firebase-auth.js";
import { getDatabase, ref, set, update } from "https://www.gstatic.com/firebasejs/9.21.0/firebase-database.js";
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
const database = getDatabase();

let register = document.getElementById('register');
let login = document.getElementById('login');

// register function for the user to register to the website using firebase authentication
register.addEventListener('click', () => {
    window.location.href = "register.html";
})

// login function for the user to login to the website using firebase authentication
login.addEventListener('click', (e) => {

    var email = document.getElementById('inputEmail').value;
    var password = document.getElementById('inputPassword').value;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        alert  ('user logged in successfully');
        window.location.href = "market.html";
    })
    .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        alert(errorMessage);
    })
})