import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAqAYzsyCexJfSa86ttQ6LL3P00uadIUl8",
  authDomain: "casamento-18ea6.firebaseapp.com",
  projectId: "casamento-18ea6",
  storageBucket: "casamento-18ea6.firebasestorage.app",
  messagingSenderId: "210292634038",
  appId: "1:210292634038:web:d55a30d95dedc84d009117",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
