// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA0hM9MMbLU9sVLfBlk1Okuwu0jci3qzTY",
  authDomain: "chat-7377b.firebaseapp.com",
  projectId: "chat-7377b",
  storageBucket: "chat-7377b.appspot.com",
  messagingSenderId: "128355392698",
  appId: "1:128355392698:web:8a257fc710f61ea890f683"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// firebase'deki auth yapısının referansını reacta alma
export const auth = getAuth(app)

// google sağlayıcısının kurulumu
export const provider = new GoogleAuthProvider();

// firebasedeki firestore
export const db = getFirestore(app)