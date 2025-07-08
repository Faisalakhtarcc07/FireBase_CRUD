// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBqWa0vGSOQtZx6pbr1l57bJEYzdRYAThQ",
  authDomain: "vite-contact-b0f21.firebaseapp.com",
  projectId: "vite-contact-b0f21",
  storageBucket: "vite-contact-b0f21.firebasestorage.app",
  messagingSenderId: "805522081258",
  appId: "1:805522081258:web:d312662d7c09b716be1e93"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)