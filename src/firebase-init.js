// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAWpB0EAS6JcNBKYsYKDLjCnabIkra0tDk",
  authDomain: "module-50-ce8b5.firebaseapp.com",
  projectId: "module-50-ce8b5",
  storageBucket: "module-50-ce8b5.firebasestorage.app",
  messagingSenderId: "454960662248",
  appId: "1:454960662248:web:f82ca62e3fbb9ccc05ab5d"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);