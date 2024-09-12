import { initializeApp } from "firebase/app";
import { getAuth,GoogleAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";

const firebaseConfig = {
  apiKey: "AIzaSyChEMECeGjWsVT2YyqjIz06fxS2gaWwyaA",
  authDomain: "olx-clone-49112.firebaseapp.com",
  projectId: "olx-clone-49112",
  storageBucket: "olx-clone-49112.appspot.com",
  messagingSenderId: "196481187366",
  appId: "1:196481187366:web:9c684852b548342440f0e7",
  measurementId: "G-569DW88L5M"
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
export const googleProvider = new GoogleAuthProvider()
export const db = getFirestore(app)
export const storage =  getStorage(app)