// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD1eYqaPAnylJWQ5VH9ogwmbXY0WRimM04",
  authDomain: "recipe-finder-3b3a0.firebaseapp.com",
  projectId: "recipe-finder-3b3a0",
  storageBucket: "recipe-finder-3b3a0.appspot.com",
  messagingSenderId: "305082149748",
  appId: "1:305082149748:web:88feb7facbdae655209a21",
  measurementId: "G-WH149CFS76"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app;
