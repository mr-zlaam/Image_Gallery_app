import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";
const firebaseConfig = {
  apiKey: "AIzaSyC0tU3WwIlHhIJv-6n0JzCulbxp0JtHdEs",
  authDomain: "sk-images.firebaseapp.com",
  projectId: "sk-images",
  storageBucket: "sk-images.appspot.com",
  messagingSenderId: "146646331253",
  appId: "1:146646331253:web:71607cf6aabfd6bb8f6d3c",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const storage = getStorage(app);
export const db = getFirestore(app);
