import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
import { collection, addDoc } from "@firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyAzRr6gOjsIqAw1lNkGxCc50abmWs6iN2M",
  authDomain: "djuzee-9a49a.firebaseapp.com",
  projectId: "djuzee-9a49a",
  storageBucket: "djuzee-9a49a.firebasestorage.app",
  messagingSenderId: "187388385790",
  appId: "1:187388385790:web:521de8ed09507af90408af"
};

// Initialize with a unique name
const app = initializeApp(firebaseConfig, 'comments-app');
const db = getFirestore(app);
const storage = getStorage(app);

export { db, storage, collection, addDoc };