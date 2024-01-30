// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog5.firebaseapp.com",
  projectId: "mern-blog5",
  storageBucket: "mern-blog5.appspot.com",
  messagingSenderId: "153934017440",
  appId: "1:153934017440:web:d20477be47949e2e3daac5",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
