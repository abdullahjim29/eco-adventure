// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA2L06UiTRRclHMcO_dzsTzD3P20OuTkkY",
  authDomain: "eco-adventure-763df.firebaseapp.com",
  projectId: "eco-adventure-763df",
  storageBucket: "eco-adventure-763df.firebasestorage.app",
  messagingSenderId: "1069268674090",
  appId: "1:1069268674090:web:f9da6efcc4e0313cdfc553"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;