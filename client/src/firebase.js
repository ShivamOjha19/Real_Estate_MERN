/* eslint-disable no-unused-vars */
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-estate-d13fd.firebaseapp.com",
  projectId: "mern-estate-d13fd",
  storageBucket: "mern-estate-d13fd.appspot.com",
  messagingSenderId: "859390473179",
  appId: "1:859390473179:web:a9d1a6b7faf69868d7edfe"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);