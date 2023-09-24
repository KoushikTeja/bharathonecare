// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"

const firebaseConfig = {
  apiKey: "AIzaSyCNKnnfWGczeUrIhTwrjaluLlyOOM04nAw",
  authDomain: "bharathonecare3.firebaseapp.com",
  projectId: "bharathonecare3",
  storageBucket: "bharathonecare3.appspot.com",
  messagingSenderId: "1000832357220",
  appId: "1:1000832357220:web:d5aad8d585b596336ae071"
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
