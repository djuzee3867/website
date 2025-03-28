import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"
import { collection, addDoc } from "@firebase/firestore"; // Perbarui ini


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAzRr6gOjsIqAw1lNkGxCc50abmWs6iN2M",
  authDomain: "djuzee-9a49a.firebaseapp.com",
  projectId: "djuzee-9a49a",
  storageBucket: "djuzee-9a49a.firebasestorage.app",
  messagingSenderId: "187388385790",
  appId: "1:187388385790:web:521de8ed09507af90408af"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db, collection, addDoc };